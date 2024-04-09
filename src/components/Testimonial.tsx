import classNames from 'classnames';
import { RatingStars } from 'components/RatingStars';

interface TestimonialProps {
  profileImage: string;
  quotation: string;
  author: string;
  position: string;
  rating: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ profileImage, quotation, author, position, rating, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col bg-white border border-gray-200 shadow-md rounded-md p-6 max-w-xs lg:max-w-md',
        className
      )}>
      <RatingStars rating={rating} className="mb-4" />
      <p className="text-gray-700 mb-4">{quotation}</p>
      <div className="flex items-center gap-x-4 mt-auto">
        <img src={profileImage} alt={`${author}'s Profile`} className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-lg font-semibold mb-0">{author}</p>
          <p className="text-gray-500 mb-0">{position}</p>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
export type { TestimonialProps };
