import React from 'react';
import css from './Image.module.css';

export const Image = ({ image: { previewURL, tags, largeImageURL } }) => {
  // const {  } = image;

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
