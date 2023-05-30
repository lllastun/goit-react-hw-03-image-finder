import { StyledLi } from 'ImageFinder.styled';
import { Image } from 'components/Image/Image';
import React from 'react';

const ImageGalleryItem = ({ image, getCurrentImages }) => {
  // const { previewURL, tags } = image;
  return (
    <StyledLi
      onClick={() => getCurrentImages(image.largeImageURL)}
      className="gallery-item"
    >
      {/* {console.log(image.largeImageURL)} */}
      <Image
        image={image}
        // onClick={() => getCurrentImages(image.largeImageURL)}
        // onClick={console.log(image.largeImageURL)}
      />
    </StyledLi>
  );
};

export default ImageGalleryItem;
