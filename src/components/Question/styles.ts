import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 0;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`;

export const Question = styled.p<{
  isCorrect: boolean;
  userAnswer: string | null;
  isAnswered: boolean;
}>`
  border: 3px solid #000000;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  width: 50%;
  text-align: center;

  background-color: ${(props) => {
    if (props.isAnswered) {
      if (props.userAnswer === props.children) {
        return props.isCorrect ? 'green' : 'red';
      }
    }
    return 'initial';
  }};

  color: ${(props) => (props.isAnswered ? '#ffffff' : '#000000')};

  &:hover {
    ${(props) => {
      if (props.isAnswered) {
        if (props.userAnswer === props.children) {
          return props.isCorrect
            ? ' background-color: green'
            : ' background-color: red';
        }
        return;
      }
      return 'background-color: #6272a4';
    }};
  }

  transition:
    background-color 0.3s,
    color 0.3s;
`;
