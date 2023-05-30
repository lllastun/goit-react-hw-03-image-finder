import React from 'react';
// import { flex } from 'styled-system';
import { LoadMoreButton } from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ handleClickMore }) => {
  return (
    <LoadMoreButton onClick={() => handleClickMore()}>Load more</LoadMoreButton>
  );
};

export default Button;

Button.propTypes = {
  handleClickMore: PropTypes.func.isRequired,
};
