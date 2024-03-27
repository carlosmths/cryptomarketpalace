import { Button } from 'components/Button';
import { CurrencyType, InputCurrency } from 'components/InputCurrency';

const BuyForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 h-96">
      <InputCurrency key="crypto" currencyType={CurrencyType.crypto} />
      <InputCurrency key="fiat" currencyType={CurrencyType.fiat} />
      <Button className="mt-auto">Continue</Button>
    </form>
  );
};

export { BuyForm };
