import axios, { AxiosResponse } from 'axios';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { InputCurrency } from 'components/InputCurrency';
import { TradeDetails } from 'components/TradeDetails';
import { debounce, random } from 'lodash';
import React from 'react';
import { kebabToNormal } from 'utilities/stringUtils';

enum BuySellType {
  buy = 'buy',
  sell = 'sell',
}

enum CurrencyType {
  fiat = 'fiat',
  crypto = 'crypto',
}

interface Currency {
  id: string;
  name: string;
  symbol: string;
  currencySymbol: null | string;
  type: CurrencyType;
  rateUsd: string;
  logoUrl?: string;
}

interface ApiResponse {
  data: Currency[];
  timestamp: number;
}

interface BuySellFormProps {
  type: BuySellType;
}

const BuySellForm: React.FC<BuySellFormProps> = ({ type }) => {
  const [currencies, setCurrencies] = React.useState<Currency[]>([]);
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = React.useState<
    Currency | undefined
  >();
  const [selectedFiatCurrency, setSelectedFiatCurrency] = React.useState<
    Currency | undefined
  >();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [fiatValue, setFiatValue] = React.useState<string>('');
  const [cryptoValue, setCryptoValue] = React.useState<string>('');
  const [networkFee, setNetworkFee] = React.useState<string>('');
  const [processingFee, setProcessingFee] = React.useState<string>('');
  const processingFeePercentage = 4.5; // Random values to calculate fees.
  const networkFeeUsd = random(1.8, 2.6);

  const setLogos = (currencies: Currency[]) => {
    return currencies.map((currency) => {
      currency.logoUrl =
        currency.type === 'crypto'
          ? `https://assets.coincap.io/assets/icons/${currency.symbol}@2x.png`
          : `https://wise.com/public-resources/assets/flags/rectangle/${currency.symbol}.png`;
      currency.name = kebabToNormal(currency.id);
      return currency;
    });
  };

  const setDefaultCurrency = (currencies: Currency[]) => {
    currencies.forEach((currency) => {
      currency.id === 'bitcoin' && setSelectedCryptoCurrency({ ...currency });
      currency.id === 'united-states-dollar' &&
        setSelectedFiatCurrency({ ...currency });
    });
  };

  const clearValues = () => {
    setCryptoValue('');
    setFiatValue('');
  };

  const onCurrencySelect = (currency: Currency, currencyType: CurrencyType) => {
    if (currencyType === CurrencyType.fiat) {
      setSelectedFiatCurrency({ ...currency });
    } else {
      setSelectedCryptoCurrency({ ...currency });
    }
    clearValues();
  };

  const fetchRates = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios<ApiResponse>(
        'https://api.coincap.io/v2/rates'
      );
      const apiResponse = await response.data;
      const currenciesWithLogos = setLogos(apiResponse.data);
      setDefaultCurrency(currenciesWithLogos);
      setCurrencies([...currenciesWithLogos]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setConvertedCurrency = (newValue: string, currency: Currency) => {
    const isFiat = currency.type === CurrencyType.fiat;
    const usdRate = Number(newValue) * Number(currency?.rateUsd);
    const totalUsdRate = isFiat
      ? usdRate
      : (usdRate + networkFeeUsd) / (1 - processingFeePercentage / 100);
    const processingFeeUsd = (totalUsdRate * processingFeePercentage) / 100;
    const totalValueUsd = isFiat
      ? totalUsdRate - networkFeeUsd - processingFeeUsd
      : totalUsdRate;
    const selectedRateUsd = Number(
      isFiat ? selectedCryptoCurrency?.rateUsd : selectedFiatCurrency?.rateUsd
    );
    const convertedValue = totalValueUsd / selectedRateUsd;
    isFiat
      ? setCryptoValue(convertedValue.toFixed(8).toString())
      : setFiatValue(convertedValue.toFixed(2).toString());
    const networkFeeCurrency =
      networkFeeUsd / Number(selectedFiatCurrency?.rateUsd);
    setNetworkFee(networkFeeCurrency.toFixed(2));
    const processingFeeCurrency =
      processingFeeUsd > 0
        ? processingFeeUsd / Number(selectedFiatCurrency?.rateUsd)
        : 0;
    setProcessingFee(processingFeeCurrency.toFixed(2));
  };

  const debouncedSetConvertedCurrency = React.useCallback(
    debounce(setConvertedCurrency, 500),
    [selectedCryptoCurrency, selectedFiatCurrency]
  );

  const onInputChange = (newValue: string, currency?: Currency) => {
    if (!currency) return;
    currency.type === CurrencyType.fiat
      ? setFiatValue(newValue)
      : setCryptoValue(newValue);
    debouncedSetConvertedCurrency(newValue, currency);
  };

  React.useEffect(() => {
    fetchRates();
  }, []);

  return (
    <form className="flex flex-col gap-5 h-96">
      <div
        className={classNames(
          'flex gap-5',
          type === BuySellType.buy ? 'flex-col' : 'flex-col-reverse'
        )}
      >
        <InputCurrency
          key="fiat"
          placeholder="0.00"
          currencies={currencies}
          selectedCurrency={selectedFiatCurrency}
          currencyType={CurrencyType.fiat}
          onCurrencySelect={onCurrencySelect}
          value={fiatValue}
          onInputChange={onInputChange}
          isLoading={isLoading}
        />
        <InputCurrency
          key="crypto"
          placeholder="0.00000"
          currencies={currencies}
          selectedCurrency={selectedCryptoCurrency}
          currencyType={CurrencyType.crypto}
          onCurrencySelect={onCurrencySelect}
          value={cryptoValue}
          onInputChange={onInputChange}
          isLoading={isLoading}
        />
      </div>
      <TradeDetails
        cryptoValue={cryptoValue}
        fiatValue={fiatValue}
        selectedCryptoCurrency={selectedCryptoCurrency}
        selectedFiatCurrency={selectedFiatCurrency}
        buySellType={type}
        networkFee={networkFee}
        processingFee={processingFee}
      />
      <Button className="mt-auto">Continue</Button>
    </form>
  );
};

export { BuySellForm, BuySellType };
export type { Currency, CurrencyType };
