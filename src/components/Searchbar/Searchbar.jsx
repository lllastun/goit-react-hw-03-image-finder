import React from 'react';
// import styled from 'styled-components';
import { StyleHeader, StyleForm } from 'ImageFinder.styled';

const SearchBar = ({ onChangeQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    onChangeQuery(form.search.value);
  };

  return (
    <StyleHeader>
      <StyleForm onSubmit={onSubmit}>
        <button>
          <span>Search</span>
        </button>

        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyleForm>
    </StyleHeader>
  );
};

export default SearchBar;
