import { BuySellType } from 'components/BuySellForm';
import { Currency } from 'components/InputCurrency';
import { SimpleAccordion } from 'components/SimpleAccordion';

interface TradeDetailsProps {
  cryptoValue: string;
  fiatValue: string;
  selectedCryptoCurrency?: Currency;
  selectedFiatCurrency?: Currency;
  buySellType: BuySellType;
  networkFee: string;
  processingFee: string;
}

const TradeDetails: React.FC<TradeDetailsProps> = ({
  cryptoValue,
  fiatValue,
  selectedCryptoCurrency,
  selectedFiatCurrency,
  buySellType,
  networkFee,
  processingFee,
}) => {
  const totalFiatValue = fiatValue
    ? Number(fiatValue) - Number(networkFee) - Number(processingFee)
    : 0;
  return (
    <SimpleAccordion
      headline={
        <>
          You'll get {cryptoValue || 0} {selectedCryptoCurrency?.symbol} for{' '}
          {selectedFiatCurrency?.currencySymbol}
          {fiatValue || 0}
        </>
      }
      content={
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between">
            <span>
              {cryptoValue || 0} {selectedCryptoCurrency?.symbol} @{' '}
              {selectedFiatCurrency?.currencySymbol}
              {(
                Number(selectedCryptoCurrency?.rateUsd) /
                Number(selectedFiatCurrency?.rateUsd)
              ).toFixed(2)}
            </span>
            <span>
              {selectedFiatCurrency?.currencySymbol}
              {totalFiatValue}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Network fee</span>
            <span>
              {selectedFiatCurrency?.currencySymbol}
              {networkFee}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Processing fee</span>
            <span>
              {selectedFiatCurrency?.currencySymbol}
              {processingFee}
            </span>
          </div>
        </div>
      }
      className="bg-white"
    />
  );
};

export { TradeDetails };
