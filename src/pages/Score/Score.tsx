import { ReactElement, useContext } from 'react';

import { Container } from './styles';
import { QuizContext } from '../../context/QuizContext';
import { Award } from '../../components/Award/Award';

export const ScorePage = () => {
  const { score, quiz } = useContext(QuizContext);
  const totalQuestions = quiz.length;

  function calculatePremium(
    hits: number,
    totalQuestions: number,
  ): ReactElement {
    const percentageHits: number = (hits / totalQuestions) * 100;

    if (percentageHits >= 80) {
      return <Award gold totalQuestions={totalQuestions} score={score} />;
    } else if (percentageHits >= 60) {
      return <Award silver totalQuestions={totalQuestions} score={score} />;
    } else if (percentageHits >= 40) {
      return <Award bronze totalQuestions={totalQuestions} score={score} />;
    } else {
      return <Award none totalQuestions={totalQuestions} score={score} />;
    }
  }

  return <Container>{calculatePremium(score, totalQuestions)}</Container>;
};
