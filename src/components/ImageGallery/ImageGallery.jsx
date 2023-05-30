import { StyledUl } from 'ImageFinder.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ images, getCurrentImages }) => {
  return (
    <StyledUl className="gallery">
      {images?.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          getCurrentImages={getCurrentImages}
        />
      ))}
    </StyledUl>
  );
};

export default ImageGallery;
