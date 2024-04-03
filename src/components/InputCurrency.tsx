import { Image } from 'components/Image';
import React from 'react';
import MissingFlag from 'assets/missing-flag.svg';
import ArrowDown from 'assets/arrow-down.svg?react';
import { SearchableList } from 'components/SearchableList';
import classNames from 'classnames';
import { Currency, CurrencyType } from 'components/BuySellForm';

interface InputCurrencyProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  currencies: Currency[];
  currencyType: CurrencyType;
  selectedCurrency?: Currency;
  isLoading: boolean;
  onCurrencySelect: (currency: Currency, type: CurrencyType) => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  currencies,
  currencyType,
  onChange,
  isLoading,
  selectedCurrency,
  onCurrencySelect,
  ...inputProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

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
    onCurrencySelect(currency, currencyType);
    setIsMenuOpen(false);
  };

  return (
    <div className="input-currency relative">
      <div className="flex items-center gap-x-3 bg-white px-3 rounded-lg hover:outline hover:outline-1 hover:outline-slate-950">
        <input
          type="text"
          className="w-full py-3 border-none outline-none"
          onFocus={handleParentFocus}
          onBlur={handleParentFocus}
          onChange={onChange}
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

export { InputCurrency };
export type { Currency };
