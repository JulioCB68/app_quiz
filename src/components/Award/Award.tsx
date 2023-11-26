import { useContext } from 'react';

import Trophy from '../../assets/images/trophy.png';
import Gold from '../../assets/images/gold.png';
import Silver from '../../assets/images/silver.png';
import Bronze from '../../assets/images/bronze.png';

import { Container, AwardContainer, Content } from './styles';
import { QuizContext } from '../../context/QuizContext';

interface IAwardProps {
  gold?: boolean;
  silver?: boolean;
  bronze?: boolean;
  none?: boolean;

  totalQuestions: number;
  score: number;
}

export const Award = ({
  gold,
  silver,
  bronze,
  none,
  totalQuestions,
  score,
}: IAwardProps) => {
  const { setQuiz, setScore, setQuizIsFinished } = useContext(QuizContext);

  const restartQuiz = () => {
    setQuiz([]);
    setScore(0);
    setQuizIsFinished(false);
  };

  return (
    <Container>
      {gold && (
        <AwardContainer>
          <img src={Trophy} alt="Gold Award" />
          <Content>
            <div>
              <h1>Parabéns!</h1>
              <h4>
                Voce acertou {score}/{totalQuestions}
              </h4>
            </div>
            <img src={Gold} alt="Gold Award" />
          </Content>
        </AwardContainer>
      )}

      {silver && (
        <AwardContainer>
          <img src={Trophy} alt="Gold Award" />
          <Content>
            <div>
              <h1>Muito bom!</h1>
              <h4>
                Voce acertou {score}/{totalQuestions}
              </h4>
            </div>
            <img src={Silver} alt="Gold Award" />
          </Content>
        </AwardContainer>
      )}

      {bronze && (
        <AwardContainer>
          <img src={Trophy} alt="Gold Award" />
          <Content>
            <div>
              <h1>Quase lá!</h1>
              <h4>
                Voce acertou {score}/{totalQuestions}
              </h4>
            </div>
            <img src={Bronze} alt="Gold Award" />
          </Content>
        </AwardContainer>
      )}

      {none && (
        <AwardContainer none={true}>
          <img src={Trophy} alt="Gold Award" />
          <Content>
            <div>
              <h1>Tente novamente!</h1>
              <h4>
                Voce acertou {score}/{totalQuestions}
              </h4>
            </div>
          </Content>
        </AwardContainer>
      )}

      <button onClick={restartQuiz}>Restart</button>
    </Container>
  );
};
