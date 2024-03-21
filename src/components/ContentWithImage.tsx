import { TwoColumnContainer } from 'components/TwoColumnContainer';

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
  const leftCol = (
    <>
      {subHeading && <p className="subheading">{subHeading}</p>}
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </>
  );

  const rightCol = <img src={imagePath} alt={imageAlt} />;
  const defaultImaagePos = imagePosition === ImagePosition.default;

  return (
    <TwoColumnContainer
      leftCol={defaultImaagePos ? leftCol : rightCol}
      rightCol={defaultImaagePos ? rightCol : leftCol}
      centerContent
      className={className}
    />
  );
};

export { ContentWithImage, ImagePosition };
