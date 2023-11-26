import { useContext } from 'react';

import { useQuery } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getCategorys, getQuestions } from '../../services/quiz';
import { QuizContext } from '../../context/QuizContext';
import { amountOptions, difficultyOptions, typesOptions } from './options';
import { SelectComponent } from '../Select/SelectComponents';

import { Container, Content } from './styles';
import { FormData } from '../../types/types';

export const Filters = () => {
  const { setQuiz } = useContext(QuizContext);

  const { data: categorys } = useQuery('categorys', getCategorys, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { register, setValue, handleSubmit, getValues } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async () => {
    const { amount, categorys, difficulty, type } = getValues();
    try {
      const data = await getQuestions({ amount, categorys, difficulty, type });
      setQuiz(data);
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
    }
  };

  return (
    <Container>
      <Content>
        {categorys && (
          <SelectComponent
            options={categorys}
            {...register('categorys')}
            onChange={(value: string | number) =>
              setValue('categorys', String(value))
            }
            placeholder="Select category"
          />
        )}

        <SelectComponent
          options={difficultyOptions}
          {...register('difficulty')}
          onChange={(value: string | number) =>
            setValue('difficulty', String(value))
          }
          placeholder="Select difficulty"
        />

        <SelectComponent
          options={typesOptions}
          {...register('type')}
          onChange={(value: string | number) => setValue('type', String(value))}
          placeholder="Select type"
        />

        <SelectComponent
          options={amountOptions}
          {...register('amount')}
          onChange={(value: string | number) =>
            setValue('amount', String(value))
          }
          placeholder="Select quantity"
        />
      </Content>
      <button type="submit" onClick={() => handleSubmit(onSubmit)()}>
        Render
      </button>
    </Container>
  );
};
