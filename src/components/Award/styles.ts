import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

export const AwardContainer = styled.div<{ none?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    filter: grayscale(${(props) => (props.none ? '100%' : '0%')});
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 4rem;
    padding: 0 1rem 0 0;
  }

  h4 {
    font-size: 2rem;
  }

  img {
    width: 7rem;
    margin: 2rem 0 0;
  }
`;
