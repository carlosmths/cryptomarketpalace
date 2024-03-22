import classNames from 'classnames';
import React from 'react';
import axios from 'axios';
import { ReactComponent as BitcoinLogo } from 'assets/bitcoin.svg';
import { ReactComponent as BnbLogo } from 'assets/bnb.svg';
import { ReactComponent as EthereumLogo } from 'assets/ethereum.svg';
import { ReactComponent as SolanaLogo } from 'assets/solana.svg';
import { ReactComponent as TetherLogo } from 'assets/tether.svg';

interface CurrenciesApiResponse {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

const logosMap: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  bitcoin: BitcoinLogo,
  ethereum: EthereumLogo,
  tether: TetherLogo,
  'binance-coin': BnbLogo,
  solana: SolanaLogo,
};

const getLogo = (id: string): JSX.Element => {
  const Logo = logosMap[id];
  return <Logo className="h-full" />;
};

const TopCryptocurrencies: React.FC = () => {
  const [currencies, setCurrencies] = React.useState<
    CurrenciesApiResponse[] | null
  >(null);

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    const ids = Object.keys(logosMap).join(',');
    try {
      const response = await axios(
        `https://api.coincap.io/v2/assets?ids=${ids}`
      );
      if (!response) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.data;
      setCurrencies([...jsonData.data]);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFixedValue = (value: string): string => Number(value).toFixed(2);

  React.useEffect(() => {
    const interval = setInterval(fetchData, 3000);
    fetchData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-cryptocurrencies">
      {isLoading
        ? Object.keys(logosMap).map((cryptoName) => (
            <div
              key={`skeleton-${cryptoName}`}
              className="flex justify-between mb-2 items-center"
            >
              <div className="flex gap-x-2 w-6/12 items-center">
                <div className="skeleton-loading w-10 h-10"></div>
                <div className="skeleton-loading w-7/12 h-6"></div>
              </div>
              <div className="w-2/12 h-6 skeleton-loading"></div>
              <div className="w-2/12 h-6 skeleton-loading"></div>
            </div>
          ))
        : currencies?.map((currency) => (
            <div
              key={currency.id}
              className="flex justify-between font-semibold mb-2 items-center"
            >
              <div className="flex items-center gap-x-2 w-6/12">
                <span className="flex items-center justify-center w-10 h-10">
                  {getLogo(currency.id)}
                </span>
                <span>
                  {currency.name} {`(${currency.symbol})`}
                </span>
              </div>
              <div className="w-3/12 text-right">
                ${getFixedValue(currency.priceUsd)}
              </div>
              <div
                className={classNames(
                  'w-3/12 text-right',
                  Number(getFixedValue(currency.changePercent24Hr)) >= 0
                    ? 'text-green-700'
                    : 'text-red-700'
                )}
              >
                {getFixedValue(currency.changePercent24Hr)}%
              </div>
            </div>
          ))}
    </div>
  );
};

export { TopCryptocurrencies };
