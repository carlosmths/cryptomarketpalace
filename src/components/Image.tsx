import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, fallbackSrc = '', className }) => {
  const [imgSrc, setImgSrc] = React.useState<string>(src || fallbackSrc);

  const onError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} onError={onError} className={className} />;
};

export { Image };
