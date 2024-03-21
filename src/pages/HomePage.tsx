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
    </>
  );
};

export { HomePage };
