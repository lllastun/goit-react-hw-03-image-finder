import React from 'react';
import styled from 'styled-components';
const StyleHeader = styled.header`
  display: flex;
  background-color: blue;
  justify-content: center;
`;
const Searchbar = () => {
  return (
    <header>
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
