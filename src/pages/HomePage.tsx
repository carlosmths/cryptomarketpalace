import { AutoScroller } from 'components/AutoScroller';
import { Container } from 'components/Container';
import { ContentWithImage, ImagePosition } from 'components/ContentWithImage';
import { FaqAccordion } from 'components/FaqAccordion';
import { Hero } from 'components/Hero';
import { Testimonial, TestimonialProps } from 'components/Testimonial';
import { TopCryptocurrencies } from 'components/TopCryptocurrencies';
import { TwoColumnContainer } from 'components/TwoColumnContainer';
import Image1 from 'assets/face-1.jpg';
import Image2 from 'assets/face-2.jpg';
import Image3 from 'assets/face-3.jpg';
import Image4 from 'assets/face-4.jpg';
import Image5 from 'assets/face-5.jpg';
import Image6 from 'assets/face-6.jpg';

const HomePage: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      author: 'Jane Smith',
      position: 'Senior Software Engineer, TechCorp Solutions',
      profileImage: Image1,
      rating: 5,
      quotation: "I've been using this exchange for years and it never disappoints.",
    },
    {
      author: 'John Doe',
      position: 'Financial Analyst, Alpha Investments Group',
      profileImage: Image2,
      rating: 5,
      quotation: "The user interface is sleek and intuitive. I've had a seamless experience every time.",
    },
    {
      author: 'Emily Johnson',
      position: 'Digital Marketing Specialist, Byte Marketing Agency',
      profileImage: Image3,
      rating: 4.8,
      quotation: "I appreciate the prompt customer support. Any issues I've had were resolved quickly and efficiently.",
    },
    {
      author: 'David Brown',
      position: 'Investment Strategist, Quantum Capital Management',
      profileImage: Image4,
      rating: 5,
      quotation:
        "Impressive range of cryptocurrencies available for trading. It's my go-to platform for diverse investment options.",
    },
    {
      author: 'Sarah Thompson',
      position: 'Blockchain Developer, CryptoTech Innovations',
      profileImage: Image5,
      rating: 4.9,
      quotation: 'As a developer, I value the reliability of the API. Integration with our systems has been seamless.',
    },
    {
      author: 'Michael Williams',
      position: 'Day Trader, Market Masters LLC',
      profileImage: Image6,
      rating: 4,
      quotation:
        "The platform's analytical tools have been invaluable in making informed trading decisions. Highly recommended!",
    },
  ];

  const renderTestimonials = (): React.ReactNode[] => {
    return testimonials.map((testimonial, index) => (
      <Testimonial
        key={`testimonial-${index}`}
        author={testimonial.author}
        position={testimonial.position}
        profileImage={testimonial.profileImage}
        rating={testimonial.rating}
        quotation={testimonial.quotation}
        className="mx-2"
      />
    ));
  };
  return (
    <>
      <Hero
        title="Trade Cryptocurrencies with Ease on Our Platform"
        subtitle="Buy and sell cryptocurrencies hassle-free with our user-friendly platform."
        backgroundImageUrl="assets/bg-hero-home.jpeg"
        primaryCta="Sign Up"
        secondaryCta="Learn More"
      />
      <section className="bg-arrow-right font-display">
        <TwoColumnContainer
          centerContent
          leftCol={
            <>
              <h2>Experience the Future of Cryptocurrency Trading with Our Secure and Diverse Exchange</h2>
              <p>
                Our cryptocurrency exchange offers top-notch security, a wide range of cryptocurrencies, and competitive
                fees, providing you with a seamless trading experience. Join us today and unlock the potential of
                digital assets!
              </p>
            </>
          }
          rightCol={
            <>
              <h3>Top 5 cryptocurrencies</h3>
              <TopCryptocurrencies limit={5} />
            </>
          }
        />
      </section>
      <section className="bg-indigo-50">
        <ContentWithImage
          subHeading="Revolution"
          title="Unlock the Power of Web3 Integration"
          text="Experience a seamless and secure cryptocurrency exchange platform
          powered by Web3 technology. Buy, sell, and trade cryptocurrencies with
          ease."
          imagePath="assets/web3.png"
          imageAlt="Web 1.0, Web 2.0, and Web 3.0"
          imagePosition={ImagePosition.reverse}>
          <ul className="mb-0">
            <li>Instant Transactions</li>
            <li>Secure Wallet Integration</li>
            <li>Real-Time Market Data</li>
          </ul>
        </ContentWithImage>
      </section>
      <section>
        <Container>
          <h3>Customer Reviews</h3>
          <p>Read what our users have to say</p>
          <AutoScroller className="full-width" elements={renderTestimonials()} />
        </Container>
      </section>
      <section>
        <Container>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about cryptocurrency trading on our exchange.</p>
          <FaqAccordion
            faqs={[
              {
                question: 'What is a cryptocurrency?',
                answer:
                  'A cryptocurrency is a digital or virtual form of currency secured by cryptography, making it nearly impossible to counterfeit or double-spend. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.',
              },
              {
                question: 'How do cryptocurrencies work?',
                answer:
                  'Cryptocurrencies operate on decentralized networks of computers, known as blockchain, which record and verify transactions. These transactions are secured using cryptographic techniques, ensuring the integrity and security of the network.',
              },
              {
                question: 'What is blockchain?',
                answer:
                  'Blockchain is a distributed ledger technology that records transactions across multiple computers in a way that is transparent, secure, and immutable. Each block in the chain contains a set of transactions, and once added, it cannot be altered retroactively without altering all subsequent blocks, making it tamper-resistant.',
              },
              {
                question: 'Is cryptocurrency investing risky?',
                answer:
                  "Like any investment, cryptocurrency investing carries risks. The value of cryptocurrencies can be highly volatile, and prices can fluctuate dramatically in a short period. It's essential to conduct thorough research, understand the risks involved, and only invest what you can afford to lose.",
              },
              {
                question: 'Are cryptocurrencies legal?',
                answer:
                  "The legality of cryptocurrencies varies by country and jurisdiction. While many countries have embraced cryptocurrencies and developed regulations to govern their use, others have imposed restrictions or outright bans. It's crucial to familiarize yourself with the legal landscape in your region before engaging in cryptocurrency activities.",
              },
              {
                question: 'Can I use cryptocurrencies for transactions',
                answer:
                  'Yes, many merchants and businesses accept cryptocurrencies as a form of payment. However, widespread adoption is still limited compared to traditional fiat currencies. Cryptocurrencies offer benefits such as lower transaction fees, faster settlement times, and increased privacy for transactions.',
              },
              {
                question: 'How can I ensure the security of my cryptocurrencies?',
                answer:
                  "To ensure the security of your cryptocurrencies, it's essential to follow best practices such as using secure wallets, enabling two-factor authentication, keeping your private keys safe, and being cautious of phishing scams and fraudulent schemes. Additionally, staying informed about security updates and advancements in the cryptocurrency space is crucial.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
};

export { HomePage };
