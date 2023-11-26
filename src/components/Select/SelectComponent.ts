import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 20rem;
  margin: 0 2rem;
`;

export const SelectedLabel = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  padding: 1rem 0.625rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;

  background-color: #f5f5f5;
  color: #000000;

  p {
    white-space: nowrap;
    text-transform: uppercase;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 0.5rem 0 0;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 25rem;
  overflow-y: auto;
  border-radius: 0.5rem;
`;

export const DropdownItem = styled.div`
  padding: 0.625rem;
  margin: 0;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #f0f0f0;
  }
`;
