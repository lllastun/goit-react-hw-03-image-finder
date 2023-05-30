import React from 'react';
// import styled from 'styled-components';
import { StyleHeader, StyleForm } from 'ImageFinder.styled';

const SearchBar = ({ onSubmit }) => {
  const newSearh = e => {
    e.preventDefault();
    const form = e.target;
    onSubmit(form.search.value);
  };

  return (
    <StyleHeader>
      <StyleForm onSubmit={newSearh}>
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
