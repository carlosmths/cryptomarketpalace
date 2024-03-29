import axios, { AxiosResponse } from 'axios';
import { Image } from 'components/Image';
import React from 'react';
import MissingFlag from 'assets/missing-flag.svg';
import ArrowDown from 'assets/arrow-down.svg?react';
import { SearchableList } from 'components/SearchableList';
import classNames from 'classnames';
import { kebabToNormal } from 'utilities/stringUtils';

enum CurrencyType {
  fiat = 'fiat',
  crypto = 'crypto',
}

interface Currency {
  id: string;
  name: string;
  symbol: string;
  currencySymbol: null | string;
  type: 'fiat' | 'crypto';
  rateUsd: string;
  logoUrl?: string;
}

interface ApiResponse {
  data: Currency[];
  timestamp: number;
}

interface InputCurrencyProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  currencyType: CurrencyType;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  currencyType,
  ...inputProps
}) => {
  const [currencies, setCurrencies] = React.useState<Currency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = React.useState<
    Currency | undefined
  >();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

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
    const defaultCurrency = currencies.find((currency) =>
      currencyType === CurrencyType.crypto
        ? currency.id === 'bitcoin'
        : currency.id === 'united-states-dollar'
    );
    defaultCurrency && setSelectedCurrency({ ...defaultCurrency });
  };

  const fetchRates = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios<ApiResponse>(
        'https://api.coincap.io/v2/rates'
      );
      const apiResponse = await response.data;
      const newCurrencies = apiResponse.data.filter(
        (currency) => currency.type === currencyType
      );
      const currenciesWithLogos = setLogos(newCurrencies);
      setDefaultCurrency(currenciesWithLogos);
      setCurrencies([...currenciesWithLogos]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleParentFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLDivElement, Element>
  ) => {
    const parentClasses = e.target.parentElement?.classList;
    parentClasses?.toggle('focusable-input');
  };

  const renderListItem = (currency: Currency): React.ReactNode => {
    return (
      <>
        <Image
          key={currency.id}
          src={currency.logoUrl?.toLowerCase() || ''}
          alt=""
          fallbackSrc={MissingFlag}
          className="w-7"
        />
        <div className="w-16">{currency.symbol}</div>
        <div>{currency.name}</div>
      </>
    );
  };

  const handleDropdownClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleListItemClick = (currency: Currency) => {
    setSelectedCurrency({ ...currency });
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    fetchRates();
  }, []);

  return (
    <div className="input-currency relative">
      <div className="flex items-center gap-x-3 bg-white px-3 rounded-lg hover:outline hover:outline-1 hover:outline-slate-950">
        <input
          type="text"
          className="w-full py-3 border-none outline-none"
          onFocus={handleParentFocus}
          onBlur={handleParentFocus}
          {...inputProps}
        ></input>
        {isLoading ? (
          <div className="skeleton-loading w-28 h-6"></div>
        ) : (
          <div
            className="flex items-center w-28 h-6 gap-x-2 font-bold cursor-pointer"
            tabIndex={0}
            onClick={handleDropdownClick}
          >
            <Image
              key={selectedCurrency?.id}
              src={selectedCurrency?.logoUrl?.toLowerCase() || ''}
              alt=""
              fallbackSrc={MissingFlag}
              className="w-6"
            />
            <span className="flex-1">{selectedCurrency?.symbol}</span>
            <ArrowDown className="w-2 h-full" />
          </div>
        )}
      </div>
      <SearchableList
        items={currencies}
        renderItem={renderListItem}
        onElementClick={handleListItemClick}
        className={classNames(
          'h-96 w-full z-10 rounded-lg border border-solid border-purple-950 bg-white overflow-y-auto absolute top-14',
          isMenuOpen ? 'block' : 'hidden'
        )}
      />
    </div>
  );
};

export { InputCurrency, CurrencyType };
