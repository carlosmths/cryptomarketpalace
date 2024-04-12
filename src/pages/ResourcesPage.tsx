import { Article, ArticleLayout } from 'components/Article';
import { Hero, HeroVariant } from 'components/Hero';
import BgHeroResourcesImg from 'assets/bg-hero-resources.png';
import CryptoTradingImg from 'assets/crypto-trading.png';
import RiseOfDefiImg from 'assets/rise-of-defi.png';
import GetStartedWithCryptoImg from 'assets/get-started-with-crypto.jpg';
import UnderstandingNftsImg from 'assets/understanding-nfts.jpg';
import BasicsOfCryptominingImg from 'assets/basics-of-cryptomining.jpg';
import FutureOfBlockchainImg from 'assets/future-of-blockchain.jpg';
import FutureOfCryptoExchangesImg from 'assets/the-future-of-crypto-exchanges.jpg';
import FutureOfNftsInArtImg from 'assets/future-nfts-art.webp';
import BlockchainOnScmImg from 'assets/blockchain-on-scm.png';
import EnvironmentalImpactCryptominingImg from 'assets/environmental-impact-cryptomining.webp';
import RiseOfStablecoins from 'assets/rise-of-stablecoins.jpeg';
import { ColumnControl } from 'components/ColumnControl';
import { Container } from 'components/Container';
import { ContentWithImage } from 'components/ContentWithImage';
import { Button, ButtonVariant } from 'components/Button';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Hero
        variant={HeroVariant.simple}
        title={'Unlock the Potential'}
        subtitle={'Discover a wealth of information about blockchain, NFTs, and cryptocurrency mining.'}
        backgroundImageUrl={BgHeroResourcesImg}
      />
      <section>
        <Container className="border-b">
          <p className="subheading">Insights</p>
          <h2>Discover the Best Resources</h2>
          <p>Explore our curated collection of recommended resources.</p>
          <h5>Featured Articles</h5>
          <ColumnControl
            columns={[
              [
                <Article
                  image={RiseOfDefiImg}
                  category="Blockchain"
                  imageAlt="Blockchain"
                  minutesToRead={5}
                  title="The Rise of Decentralized Finance (DeFi)"
                  readMoreLink="https://coinmarketcap.com/community/articles/64098b298ad5f32ca85e02bc/"
                  summary="Learn about the latest advancements in blockchain technology."
                />,
                <div className="flex flex-col gap-y-8 lg:gap-y-4">
                  <Article
                    image={GetStartedWithCryptoImg}
                    category="Blockchain"
                    imageAlt="Blockchain"
                    minutesToRead={8}
                    title="How to Get Started with Cryptocurrency"
                    readMoreLink="https://www.bankrate.com/investing/how-to-invest-in-cryptocurrency-beginners-guide/"
                    layout={ArticleLayout.horizontal}
                  />
                  <Article
                    image={UnderstandingNftsImg}
                    category="Cryptocurrency"
                    imageAlt="Cryptocurrency"
                    minutesToRead={30}
                    title="Understanding Non-Fungible Tokens (NFTs)"
                    readMoreLink="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-nft"
                    layout={ArticleLayout.horizontal}
                  />
                  <Article
                    image={BasicsOfCryptominingImg}
                    category="NFTs"
                    imageAlt="NFTs"
                    minutesToRead={3}
                    title="The Basics of Cryptomining"
                    readMoreLink="https://www.coinbase.com/learn/crypto-basics/what-is-mining"
                    layout={ArticleLayout.horizontal}
                  />
                </div>,
              ],
            ]}
          />
        </Container>
      </section>
      <section>
        <Container className="border-b">
          <h5>Latest Articles</h5>
          <ColumnControl
            columns={[
              [
                <Article
                  image={FutureOfBlockchainImg}
                  category="Blockchain"
                  imageAlt="Blockchain"
                  minutesToRead={6}
                  title="The Future of Blockchain Technology"
                  readMoreLink="https://www.ibm.com/blog/the-future-of-blockchain/"
                  summary="Learn about the latest advancements in blockchain technology."
                />,
                <Article
                  image={FutureOfCryptoExchangesImg}
                  category="Cryptocurrencies"
                  imageAlt="Cryptocurrency exchanges"
                  minutesToRead={5}
                  title="The Future of Cryptocurrency Exchanges"
                  readMoreLink="https://www.forbes.com/advisor/investing/cryptocurrency/crypto-market-outlook-forecast/"
                  summary="Discover the latest innovations and trends in cryptocurrency exchanges."
                />,
                <Article
                  image={BlockchainOnScmImg}
                  category="Blockchain"
                  imageAlt="blockchain"
                  minutesToRead={7}
                  title="The Impact of Blockchain on Supply Chain Management"
                  readMoreLink="https://www.paltron.com/insights-en/the-role-of-blockchain-in-supply-chain-management-scm"
                  summary="Explore how blockchain technology is revolutionizing supply chain management."
                />,
              ],
              [
                <Article
                  image={FutureOfNftsInArtImg}
                  category="NFTs"
                  imageAlt="NFTS in Art"
                  minutesToRead={5}
                  title="The Future of NFTs in the Art World"
                  readMoreLink="https://brightnode.io/are-nfts-the-future-of-art/"
                  summary="Learn about the potential of NFTs to transform the art industry."
                />,
                <Article
                  image={EnvironmentalImpactCryptominingImg}
                  category="Cryptomining"
                  imageAlt="Cryptomining"
                  minutesToRead={6}
                  title="The Environmental Impact of Cryptomining"
                  readMoreLink="https://www.pcmag.com/how-to/what-is-the-environmental-impact-of-cryptocurrency"
                  summary="Discover the environmental implications of cryptomining and potential solutions."
                />,
                <Article
                  image={RiseOfStablecoins}
                  category="Blockchain"
                  imageAlt="blockchain"
                  minutesToRead={5}
                  title="The Rise of Stablecoins in the Cryptocurrency Market"
                  readMoreLink="https://www.financemagnates.com/cryptocurrency/education-centre/the-rise-of-stablecoins-a-more-stable-alternative-to-traditional-crypto/"
                  summary="Learn about the growing popularity and stability of stablecoins in the crypto market."
                />,
              ],
            ]}
          />
        </Container>
      </section>
      <section>
        <Container>
          <ContentWithImage
            imagePath={CryptoTradingImg}
            imageAlt="Man looking at trading chart"
            subHeading="Discover"
            title="Exploring the Latest Cryptocurrency Trends"
            text="Stay up-to-date with the ever-changing world of cryptocurrencies and explore the latest trends and technologies that are shaping the industry.">
            <div className="flex gap-x-6 mb-4">
              <div>
                <h6>Latest Trends</h6>
                <p>Stay informed about the newest developments in the cryptocurrency market and technology.</p>
              </div>
              <div>
                <h6>Cutting-Edge Technologies</h6>
                <p>Discover the innovative technologies that are revolutionizing the cryptocurrency landscape.</p>
              </div>
            </div>
            <div className="flex">
              <Button href="#">Get Started</Button>
              <Button href="#" variant={ButtonVariant.next}>
                Learn More
              </Button>
            </div>
          </ContentWithImage>
        </Container>
      </section>
    </>
  );
};

export { ResourcesPage };
