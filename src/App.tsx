import { useContext } from 'react';

import { QuizContext } from './context/QuizContext.tsx';

import { Filters } from './components/Filters/Filter.tsx';
import { QuizPage } from './pages/quiz.tsx';
import { ScorePage } from './pages/Score/Score.tsx';

import { Header, Container, Contet } from './App.ts';
import './index.css';

function App() {
  const { quiz, quizIsFinished } = useContext(QuizContext);

  return (
    <Container>
      <Header>
        <h1>Welcome Quiz App</h1>
      </Header>
      <Contet>
        {quiz.length <= 0 && !quizIsFinished && <Filters />}
        {quiz.length > 0 && !quizIsFinished && <QuizPage />}
        {quizIsFinished && <ScorePage />}
      </Contet>
    </Container>
  );
}

export default App;
