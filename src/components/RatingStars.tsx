import Star from 'assets/star.svg?react';
import HalfStar from 'assets/half-star.svg?react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface RatingStarsProps {
  rating: number;
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, className }) => {
  const renderStar = (index: number) => {
    const starIdx = index + 1;
    if (rating > index && rating < starIdx) {
      return <HalfStar key={uuidv4()} className="h-full" />;
    }
    return (
      <Star key={uuidv4()} className={classNames('h-full', starIdx <= rating ? 'text-yellow-400' : 'text-gray-400')} />
    );
  };

  return (
    <div className={classNames('flex items-center h-5', className)}>
      {[...Array(5)].map((_, index) => renderStar(index))}
    </div>
  );
};

export { RatingStars };
