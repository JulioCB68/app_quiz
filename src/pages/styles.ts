import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  display: flex;
`;

export const QuestionArea = styled.div`
  width: 40%;

  padding: 0 0 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    width: 70%;
    text-align: center;
    color: #eeeeee;
    margin: 1rem 0 0;
  }
`;

export const AwnserArea = styled.div`
  width: 60%;
  background-color: #e9e9e9;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

  color: ${(props) => {
    if (props.isAnswered) {
      if (props.userAnswer === props.children) {
        return '#ffffff';
      }
    }
    return 'initial';
  }};

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
      return 'background-color: var(--dark); color: #ffffff;';
    }};
  }

  transition:
    background-color 0.3s,
    color 0.3s;
`;
