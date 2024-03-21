import { ContentWithImage, ImagePosition } from 'components/ContentWithImage';
import { Hero } from 'components/Hero';

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
        subHeading="Revolution"
        title="Unlock the Power of Web3 Integration"
        text="Experience a seamless and secure cryptocurrency exchange platform
          powered by Web3 technology. Buy, sell, and trade cryptocurrencies with
          ease."
        imagePath="assets/web3.png"
        imageAlt="Web 1.0, Web 2.0, and Web 3.0"
      >
        <ul>
          <li>Instant Transactions</li>
          <li>Secure Wallet Integration</li>
          <li>Real-Time Market Data</li>
        </ul>
      </ContentWithImage>
      <ContentWithImage
        title="Experience the Future of Cryptocurrency Trading with Our Secure and Diverse Exchange"
        text="Our cryptocurrency exchange offers top-notch security, a wide range of cryptocurrencies, and competitive fees, 
          providing you with a seamless trading experience. Join us today and unlock the potential of digital assets!"
        imagePath="assets/crypto-trading.png"
        imageAlt="Fake market prices chart"
        imagePosition={ImagePosition.reverse}
        className="bg-indigo-50"
      ></ContentWithImage>
    </>
  );
};

export { HomePage };
