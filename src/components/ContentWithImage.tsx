import classNames from 'classnames';
import { Container } from 'components/Container';

enum ImagePosition {
  default = 'default',
  reverse = 'reverse',
}

interface ContentWithimageProps {
  subHeading?: string;
  title: string;
  text: string;
  imagePath: string;
  imageAlt: string;
  imagePosition?: ImagePosition;
  children?: React.ReactNode;
  className?: string;
}

const ContentWithImage: React.FC<ContentWithimageProps> = ({
  subHeading,
  title,
  text,
  imagePath,
  imageAlt,
  imagePosition = ImagePosition.default,
  children,
  className,
}) => {
  return (
    <Container
      className={classNames(
        'flex flex-col gap-x-24',
        imagePosition === ImagePosition.default
          ? 'flex-col lg:flex-row'
          : 'flex-col-reverse lg:flex-row-reverse',
        className
      )}
    >
      <div className="left-content flex flex-col justify-center lg:w-6/12">
        {subHeading && <p className="font-semibold mb-4">{subHeading}</p>}
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
      <div className="right-content lg:w-6/12">
        <img src={imagePath} alt={imageAlt} />
      </div>
    </Container>
  );
};

export { ContentWithImage, ImagePosition };
