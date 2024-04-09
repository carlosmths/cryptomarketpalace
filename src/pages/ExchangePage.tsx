import { Button, ButtonVariant } from 'components/Button';
import { BuySellForm, BuySellType } from 'components/BuySellForm';
import { Container } from 'components/Container';
import { StepsList } from 'components/StepsList';
import { Tabs } from 'components/Tabs';
import { TwoColumnContainer } from 'components/TwoColumnContainer';

const ExchangePage: React.FC = () => {
  return (
    <>
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
      <section>
        <TwoColumnContainer
          leftCol={
            <>
              <p className="subheading">Simplified</p>
              <h2>Easy Steps to Buy and Sell Cryptocurrencies</h2>
              <div className="flex">
                <Button href="#">Get Started</Button>
                <Button href="#" variant={ButtonVariant.next}>
                  Learn More
                </Button>
              </div>
            </>
          }
          rightCol={
            <StepsList
              steps={[
                {
                  title: 'Create account',
                  text: 'Create an account and verify your identity securely.',
                },
                {
                  title: 'Deposit funds',
                  text: 'Deposit funds into your account using various payment methods.',
                },
                {
                  title: 'Choose cryptocurrency',
                  text: 'Browse the available cryptocurrencies and choose the ones you want to buy or sell.',
                },
                {
                  title: 'Trade',
                  text: 'Execute your trades and manage your portfolio with ease.',
                },
              ]}
            />
          }
        />
      </section>
    </>
  );
};

export { ExchangePage };
