import styled from 'styled-components';
//62.59
//4.99
export const StyleHeader = styled.header`
  /* display: flex;
  background-color: blue;
  justify-content: center;
  align-items: center;
  min-height: 1.2em; */
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  button {
    cursor: pointer;
  }

  button:hover {
    background-color: #fff1e5;
  }
`;

export const StyleForm = styled.form`
  display: flex;
  gap: 2px;
`;
export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
