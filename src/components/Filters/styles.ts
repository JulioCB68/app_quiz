import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 81px);

  button {
    width: 20rem;
    background-color: #2ea44f;
    color: #ffffff;
    border: none;
    padding: 1rem 0.625rem;
    margin: 3rem 0 0;
    cursor: pointer;
    text-align: center;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
