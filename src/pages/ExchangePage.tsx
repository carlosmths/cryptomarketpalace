import { BuyForm } from 'components/BuyForm';
import { Container } from 'components/Container';
import { SellForm } from 'components/SellForm';
import { Tabs } from 'components/Tabs';

const ExchangePage: React.FC = () => {
  return (
    <section>
      <Container>
        <Tabs
          tabs={[
            {
              title: 'Buy',
              content: <BuyForm />,
            },
            {
              title: 'Sell',
              content: <SellForm />,
            },
          ]}
          className="max-w-xl mx-auto"
        />
      </Container>
    </section>
  );
};

export { ExchangePage };
