import { ThreeDots } from 'react-loader-spinner';
import React from 'react';
import { LoaderWrap } from 'ImageFinder.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0e1bd6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader;
