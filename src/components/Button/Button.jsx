import React from 'react';
// import { flex } from 'styled-system';
import { LoadMoreButton } from './Button.style';

const Button = ({ handleClickMore }) => {
  // console.log(handleClickMore);
  return (
    <div style={{ display: 'flex' }}>
      <LoadMoreButton onClick={() => handleClickMore()}>
        Load more
      </LoadMoreButton>
    </div>
  );
};

export default Button;
