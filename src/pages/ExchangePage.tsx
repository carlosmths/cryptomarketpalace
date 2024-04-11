import { Button, ButtonVariant } from 'components/Button';
import { BuySellForm, BuySellType } from 'components/BuySellForm';
import { ContactForm } from 'components/ContactForm';
import { Container } from 'components/Container';
import { FaqAccordion } from 'components/FaqAccordion';
import { StepsList } from 'components/StepsList';
import { Tabs } from 'components/Tabs';
import { ColumnControl } from 'components/ColumnControl';

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
      <section className="bg-indigo-50">
        <ColumnControl
          columns={[
            <>
              <p className="subheading">Simplified</p>
              <h2>Easy Steps to Buy and Sell Cryptocurrencies</h2>
              <div className="flex">
                <Button href="#">Get Started</Button>
                <Button href="#" variant={ButtonVariant.next}>
                  Learn More
                </Button>
              </div>
            </>,
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
            />,
          ]}
        />
      </section>
      <section>
        <Container>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about cryptocurrency trading on our exchange.</p>
          <FaqAccordion
            faqs={[
              {
                question: 'How to create an account?',
                answer:
                  "To create an account, simply click on the 'Sign Up' button on the top right corner of the page and follow the instructions.",
              },
              {
                question: 'How to deposit funds?',
                answer:
                  "To deposit funds, go to your account dashboard and click on the 'Deposit' button. Select the cryptocurrency you want to deposit and follow the provided instructions.",
              },
              {
                question: 'How to place a trade?',
                answer:
                  "To place a trade, navigate to the trading page, select the cryptocurrency pair you want to trade, enter the amount and price, and click on the 'Buy' or 'Sell' button.",
              },
              {
                question: 'How to withdraw funds?',
                answer:
                  "To withdraw funds, go to your account dashboard, click on the 'Withdraw' button, select the cryptocurrency and amount you want to withdraw, and follow the provided instructions.",
              },
              {
                question: 'What are the fees?',
                answer:
                  "Our fees vary depending on the type of trade and the volume. You can find detailed information about our fees on the 'Fees' page.",
              },
            ]}
          />
        </Container>
      </section>
      <section className="bg-teal-50">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <p className="subheading">Get Help</p>
            <h2>Contact Support</h2>
            <p>Have any question or need assistance? Contact us!</p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
};

export { ExchangePage };
