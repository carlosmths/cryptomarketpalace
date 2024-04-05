import { BuySellForm, BuySellType } from 'components/BuySellForm';
import { Container } from 'components/Container';
import { Tabs } from 'components/Tabs';

const ExchangePage: React.FC = () => {
  return (
    <section>
      <Container>
        <Tabs
          tabs={[
            {
              title: 'Buy',
              content: <BuySellForm key="buy-form" type={BuySellType.buy} />,
            },
            {
              title: 'Sell',
              content: <BuySellForm key="sell-form" type={BuySellType.sell} />,
            },
          ]}
          className="max-w-xl mx-auto"
        />
      </Container>
    </section>
  );
};

export { ExchangePage };
