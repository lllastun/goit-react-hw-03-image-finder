import React from 'react';
import css from './Image.module.css';
import PropTypes from 'prop-types';

export const Image = ({ image: { tags, largeImageURL } }) => {
  return (
    <img
      className={css.image}
      src={largeImageURL}
      alt={tags}
      loading="lazy"
      width="260px"
    />
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
