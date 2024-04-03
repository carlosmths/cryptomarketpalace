import axios, { AxiosResponse } from 'axios';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { InputCurrency } from 'components/InputCurrency';
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

  const onCurrencySelect = (currency: Currency, currencyType: CurrencyType) => {
    currencyType === CurrencyType.fiat
      ? setSelectedFiatCurrency({ ...currency })
      : setSelectedCryptoCurrency({ ...currency });
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

  React.useEffect(() => {
    fetchRates();
  }, []);

  const onInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {};

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
          isLoading={isLoading}
        />
        <InputCurrency
          key="crypto"
          placeholder="10.00 - 10,000.00"
          currencies={currencies}
          selectedCurrency={selectedCryptoCurrency}
          currencyType={CurrencyType.crypto}
          onCurrencySelect={onCurrencySelect}
          isLoading={isLoading}
        />
      </div>
      <Button className="mt-auto">Continue</Button>
    </form>
  );
};

export { BuySellForm, BuySellType };
export type { Currency, CurrencyType };
