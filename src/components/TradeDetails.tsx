import classNames from 'classnames';
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
  className?: string;
}

const TradeDetails: React.FC<TradeDetailsProps> = ({
  cryptoValue,
  fiatValue,
  selectedCryptoCurrency,
  selectedFiatCurrency,
  buySellType,
  networkFee,
  processingFee,
  className,
}) => {
  const buyingFiatValue = fiatValue ? Number(fiatValue) - Number(networkFee) - Number(processingFee) : 0;
  const sellingFiatValue = fiatValue ? Number(fiatValue) + Number(processingFee) : 0;
  const isBuying = buySellType === BuySellType.buy;

  const getHeadLine = (): React.ReactNode => {
    return isBuying ? (
      <>
        You'll get {cryptoValue || 0} {selectedCryptoCurrency?.symbol} for {selectedFiatCurrency?.currencySymbol}
        {fiatValue || 0}
      </>
    ) : (
      <>
        You'll get {selectedFiatCurrency?.currencySymbol}
        {fiatValue || 0} for {cryptoValue || 0} {selectedCryptoCurrency?.symbol}
      </>
    );
  };

  return (
    <SimpleAccordion
      headline={getHeadLine()}
      content={
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between">
            <span>
              {cryptoValue || 0} {selectedCryptoCurrency?.symbol} @ {selectedFiatCurrency?.currencySymbol}
              {(Number(selectedCryptoCurrency?.rateUsd) / Number(selectedFiatCurrency?.rateUsd)).toFixed(2)}
            </span>
            <span>
              {selectedFiatCurrency?.currencySymbol}
              {(isBuying ? buyingFiatValue : sellingFiatValue).toFixed(2)}
            </span>
          </div>
          {isBuying && (
            <div className="flex justify-between">
              <span>Network fee</span>
              <span>
                {selectedFiatCurrency?.currencySymbol}
                {networkFee}
              </span>
            </div>
          )}

          <div className="flex justify-between">
            <span>Processing fee</span>
            <span>
              {!isBuying && <>-</>}
              {selectedFiatCurrency?.currencySymbol}
              {processingFee}
            </span>
          </div>
        </div>
      }
      className={classNames('bg-white', className)}
    />
  );
};

export { TradeDetails };
