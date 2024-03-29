import { Button } from 'components/Button';
import { CurrencyType, InputCurrency } from 'components/InputCurrency';

const BuyForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 h-96">
      <InputCurrency
        key="crypto"
        placeholder="10.00 - 10,000.00"
        currencyType={CurrencyType.crypto}
      />
      <InputCurrency
        key="fiat"
        placeholder="0.00"
        currencyType={CurrencyType.fiat}
      />
      <Button className="mt-auto">Continue</Button>
    </form>
  );
};

export { BuyForm };
