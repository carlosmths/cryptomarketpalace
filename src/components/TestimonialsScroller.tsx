import { Testimonial, TestimonialProps } from 'components/Testimonial';
import Image1 from 'assets/face-1.jpg';
import Image2 from 'assets/face-2.jpg';
import Image3 from 'assets/face-3.jpg';
import Image4 from 'assets/face-4.jpg';
import Image5 from 'assets/face-5.jpg';
import Image6 from 'assets/face-6.jpg';
import { AutoScroller } from 'components/AutoScroller';
import { v4 as uuidv4 } from 'uuid';

const TestimonialsScroller: React.FC = () => {
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
        key={uuidv4()}
        author={testimonial.author}
        position={testimonial.position}
        profileImage={testimonial.profileImage}
        rating={testimonial.rating}
        quotation={testimonial.quotation}
        className="mx-2"
      />
    ));
  };

  return <AutoScroller className="full-width" elements={renderTestimonials()} />;
};

export { TestimonialsScroller };
