import { createContext, ReactNode, useState } from 'react';
import { QuizQuestion } from '../types/types';

interface QuizContextValue {
  quiz: QuizQuestion[];
  setQuiz: (quiz: QuizQuestion[]) => void;
  score: number;
  setScore: (score: number) => void;
  quizIsFinished: boolean;
  setQuizIsFinished: (value: boolean) => void;
}

const initialContextValue: QuizContextValue = {
  quiz: [],
  setQuiz: () => {},
  score: 0,
  setScore: () => {},
  quizIsFinished: false,
  setQuizIsFinished: () => {},
};

export const QuizContext = createContext<QuizContextValue>(initialContextValue);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState<number>(0);
  const [quizIsFinished, setQuizIsFinished] = useState<boolean>(false);

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        score,
        setScore,
        quizIsFinished,
        setQuizIsFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
