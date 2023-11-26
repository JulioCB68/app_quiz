import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  color: #ffffff;
`;

export const Container = styled.div`
  width: 100%;
  background-color: var(--dark);
  min-height: calc(100vh - 81px);
`;

export const Contet = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
