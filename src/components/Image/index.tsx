import React, { useState } from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import placeHolderImage from "../../assets/img/1008163.png";

type Props = LazyLoadImageProps;

const Image = (props: Props) => {
  const [imageSrc, setImageSrc] = useState<string>(
    props.src || placeHolderImage
  );

  const handleError = () => setImageSrc(() => placeHolderImage);

  return (
    <LazyLoadImage
      {...props}
      src={imageSrc}
      placeholderSrc={placeHolderImage}
      onError={handleError}
    />
  );
};

export default Image;
