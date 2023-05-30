import { StyledUl } from 'ImageFinder.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  getCurrentImages: PropTypes.func.isRequired,
};
