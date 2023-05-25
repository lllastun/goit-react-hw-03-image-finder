import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="gallery">
      {/* {images.map(image => (
        <ImageGalleryItem />
      ))} */}
    </ul>
  );
};

export default ImageGallery;
