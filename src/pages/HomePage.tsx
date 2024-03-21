import { ContentWithImage, ImagePosition } from 'components/ContentWithImage';
import { Hero } from 'components/Hero';
import { StepsList } from 'components/StepsList';
import { TwoColumnContainer } from 'components/TwoColumnContainer';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Trade Cryptocurrencies with Ease on Our Platform"
        subtitle="Buy and sell cryptocurrencies hassle-free with our user-friendly platform."
        backgroundImageUrl="assets/bg-hero-home.jpeg"
        primaryCta="Sign Up"
        secondaryCta="Learn More"
      />
      <ContentWithImage
        title="Experience the Future of Cryptocurrency Trading with Our Secure and Diverse Exchange"
        text="Our cryptocurrency exchange offers top-notch security, a wide range of cryptocurrencies, and competitive fees, 
          providing you with a seamless trading experience. Join us today and unlock the potential of digital assets!"
        imagePath="assets/crypto-trading.png"
        imageAlt="Fake market prices chart"
      ></ContentWithImage>
      <ContentWithImage
        subHeading="Revolution"
        title="Unlock the Power of Web3 Integration"
        text="Experience a seamless and secure cryptocurrency exchange platform
          powered by Web3 technology. Buy, sell, and trade cryptocurrencies with
          ease."
        imagePath="assets/web3.png"
        imageAlt="Web 1.0, Web 2.0, and Web 3.0"
        className="bg-indigo-50"
        imagePosition={ImagePosition.reverse}
      >
        <ul className="mb-0">
          <li>Instant Transactions</li>
          <li>Secure Wallet Integration</li>
          <li>Real-Time Market Data</li>
        </ul>
      </ContentWithImage>
      <TwoColumnContainer
        leftCol={
          <>
            <p className="subheading">Simplified</p>
            <h2>Easy Steps to Buy and Sell Cryptocurrencies</h2>
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
    </>
  );
};

export { HomePage };
