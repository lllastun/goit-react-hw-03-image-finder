import { StyledLi } from 'ImageFinder.styled';
import { Image } from 'components/Image/Image';
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, getCurrentImages }) => {
  return (
    <StyledLi
      onClick={() => getCurrentImages(image.largeImageURL)}
      className="gallery-item"
    >
      <Image image={image} />
    </StyledLi>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  getCurrentImages: PropTypes.func.isRequired,
};
