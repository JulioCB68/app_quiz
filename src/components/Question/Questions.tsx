import { useContext, useEffect, useState } from 'react';

import { decodeHtmlEntities } from '../../utils/decodeHtmlEntities';
import { QuizContext } from '../../context/QuizContext';

import { Container, QuestionContainer, Question } from './styles';

export const Questions = () => {
  const { quiz } = useContext(QuizContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleNextQuestion = (answer: string) => {
    if (isAnswered) {
      return;
    }

    setUserAnswer(answer);
    setIsAnswered(true);

    setTimeout(() => {
      if (currentQuestionIndex < quiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
        setUserAnswer(null);
      }
    }, 800);
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (quiz?.length) {
      const question = quiz[currentQuestionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer,
      );
      setOptions(answers);
    }
  }, [quiz, currentQuestionIndex]);

  return (
    <Container>
      {quiz && quiz.length > 0 && currentQuestionIndex < quiz.length && (
        <QuestionContainer>
          <h1>{decodeHtmlEntities(quiz[currentQuestionIndex].question)}</h1>
          {options.map((item, index) => (
            <Question
              key={index}
              onClick={() => handleNextQuestion(item)}
              isCorrect={item === quiz[currentQuestionIndex].correct_answer}
              userAnswer={userAnswer}
              isAnswered={isAnswered}
            >
              {decodeHtmlEntities(item)}
            </Question>
          ))}
        </QuestionContainer>
      )}
    </Container>
  );
};
