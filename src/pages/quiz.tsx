import { useContext, useEffect, useState } from 'react';

import { QuizContext } from '../context/QuizContext';
import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';

import { Container, QuestionArea, AwnserArea, Question } from './styles';

export const QuizPage = () => {
  const { quiz, score, setScore, setQuizIsFinished } = useContext(QuizContext);

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
      if (currentQuestionIndex === quiz.length - 1) {
        if (answer === quiz[currentQuestionIndex].correct_answer) {
          setScore(score + 1);
        }
        setQuizIsFinished(true);
      } else {
        if (answer === quiz[currentQuestionIndex].correct_answer) {
          setScore(score + 1);
        }
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
    if (quiz?.length && currentQuestionIndex < quiz.length) {
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

  const [usedHelp, setUsedHelp] = useState(false);

  const handleHelp = () => {
    if (!usedHelp) {
      const question = quiz[currentQuestionIndex];
      const incorrectOptions = question.incorrect_answers.slice();
      const correctAnswer = question.correct_answer;

      let count = 0;
      let updatedOptions = incorrectOptions.filter((option) => {
        if (count < 2 && option !== correctAnswer) {
          count++;
          return false;
        }
        return true;
      });

      setOptions([correctAnswer, ...updatedOptions]);
      setUsedHelp(true);
    }
  };

  return (
    <Container>
      <QuestionArea>
        <h1>{decodeHtmlEntities(quiz[currentQuestionIndex].question)}</h1>
        <h1>
          {currentQuestionIndex + 1}/{quiz.length}
        </h1>
        <button onClick={handleHelp} disabled={usedHelp}>
          Ajuda (Elimine duas opções)
        </button>
      </QuestionArea>
      <AwnserArea>
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
      </AwnserArea>
    </Container>
  );
};
