import classNames from 'classnames';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

type CryptoCurrency = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  logoUrl?: string;
};

type ApiResponse = {
  data: CryptoCurrency[];
  timestamp: number;
};

interface TopCryptocurrenciesProps {
  limit: number;
}

const TopCryptocurrencies: React.FC<TopCryptocurrenciesProps> = ({ limit }) => {
  const [currencies, setCurrencies] = React.useState<CryptoCurrency[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleCurrenciesData = (cryptocurrencies: CryptoCurrency[]) => {
    const withMappedImages = cryptocurrencies.map((crypto) => {
      crypto.logoUrl = `https://assets.coincap.io/assets/icons/${crypto.symbol}@2x.png`;
      return crypto;
    });
    setCurrencies([...withMappedImages]);
    return withMappedImages;
  };

  const fetchData = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios<ApiResponse>(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      if (!response) {
        throw new Error('Network response was not ok');
      }
      const apiResponse = await response.data;
      handleCurrenciesData(apiResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFixedValue = (value: string): string => Number(value).toFixed(2);

  React.useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const getGreenOrRedColor = (currency: CryptoCurrency): string => {
    return Number(getFixedValue(currency.changePercent24Hr)) >= 0 ? 'text-green-700' : 'text-red-700';
  };

  return (
    <div className="top-cryptocurrencies">
      {isLoading
        ? Array.from({ length: limit }).map(() => (
            <div key={uuidv4()} className="flex justify-between mb-2 items-center">
              <div className="flex gap-x-2 w-6/12 items-center">
                <div className="skeleton-loading w-10 h-10"></div>
                <div className="skeleton-loading w-7/12 h-6"></div>
              </div>
              <div className="w-2/12 h-6 skeleton-loading"></div>
              <div className="w-2/12 h-6 skeleton-loading"></div>
            </div>
          ))
        : currencies?.map((currency) => (
            <div key={currency.id} className="flex justify-between font-semibold mb-2 items-center">
              <div className="flex items-center gap-x-2 w-6/12">
                <span className="flex items-center justify-center w-10 h-10">
                  <img src={currency.logoUrl?.toLowerCase()}></img>
                </span>
                <span>
                  {currency.name} {`(${currency.symbol})`}
                </span>
              </div>
              <div className={classNames('w-3/12 text-right', getGreenOrRedColor(currency))}>
                ${getFixedValue(currency.priceUsd)}
              </div>
              <div className={classNames('w-3/12 text-right', getGreenOrRedColor(currency))}>
                {getFixedValue(currency.changePercent24Hr)}%
              </div>
            </div>
          ))}
    </div>
  );
};

export { TopCryptocurrencies };
