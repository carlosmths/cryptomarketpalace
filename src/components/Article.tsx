import classNames from 'classnames';
import { Button, ButtonVariant } from 'components/Button';
import { Image } from 'components/Image';

enum ArticleLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

interface ArticleProps {
  image: string;
  imageAlt: string;
  category: string;
  minutesToRead: number;
  title: string;
  summary?: string;
  readMoreLink: string;
  layout?: ArticleLayout;
}

const Article: React.FC<ArticleProps> = ({
  image,
  imageAlt,
  category,
  minutesToRead,
  title,
  summary,
  readMoreLink,
  layout = ArticleLayout.vertical,
}) => {
  const isHorizontal = layout === ArticleLayout.horizontal;
  return (
    <a
      href={readMoreLink}
      target="_blank"
      className={classNames(
        'article flex flex-col flex-1 border shadow-lg bg-gray-200  hover:bg-gray-50 hover:shadow-xl hover:transition-transform rounded-lg overflow-hidden',
        isHorizontal && 'lg:flex-row'
      )}>
      <Image src={image} alt={imageAlt} className={classNames(isHorizontal && 'lg:w-5/12', 'object-cover')} />
      <div className="article-description flex flex-col flex-1 p-4">
        <div className="flex items-center gap-x-4">
          <span className="p-1 bg-gray-300">{category}</span>
          <span>{minutesToRead} minute read</span>
        </div>
        <h5 className="mb-2">{title}</h5>
        <p>{summary}</p>
        <Button variant={ButtonVariant.next} href={readMoreLink} className="!p-0 mt-auto w-max" target="_blank">
          Read more
        </Button>
      </div>
    </a>
  );
};

export { Article, ArticleLayout };
