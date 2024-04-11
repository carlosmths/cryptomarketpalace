import { ColumnControl } from 'components/ColumnControl';
import { Image } from 'components/Image';

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

  const rightCol = <Image className="rounded-2xl" src={imagePath} alt={imageAlt} />;
  const defaultImagePos = imagePosition === ImagePosition.default;

  return (
    <ColumnControl
      columns={defaultImagePos ? [[leftCol, rightCol]] : [[rightCol, leftCol]]}
      centerContent
      className={className}
    />
  );
};

export { ContentWithImage, ImagePosition };
