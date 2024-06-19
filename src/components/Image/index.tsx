import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
};

export default Image;
