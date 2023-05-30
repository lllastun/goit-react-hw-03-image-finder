import React from 'react';
// import { flex } from 'styled-system';
import { LoadMoreButton } from './Button.style';

const Button = ({ handleClickMore }) => {
  return (
    <LoadMoreButton onClick={() => handleClickMore()}>Load more</LoadMoreButton>
  );
};

export default Button;
