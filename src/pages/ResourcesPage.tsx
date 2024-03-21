import { Hero, HeroVariant } from 'components/Hero';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Hero
        variant={HeroVariant.simple}
        title={'Unlock the Potential'}
        subtitle={
          'Discover a wealth of information about blockchain, NFTs, and cryptocurrency mining.'
        }
        backgroundImageUrl={'assets/bg-hero-resources.png'}
      />
    </>
  );
};

export { ResourcesPage };
