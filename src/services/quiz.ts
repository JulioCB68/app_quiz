import { api } from './api.ts';

import { IOptions, QuizQuestion, QuestionsParams } from '../types/types';

export const getCategorys = async (): Promise<IOptions[]> => {
  const response = await api.get('api_category.php');
  const data = response.data.trivia_categories;

  const convertedData: IOptions[] = data.map((category: any) => ({
    value: category.id,
    label: category.name,
  }));

  return convertedData;
};

export const getQuestions = async ({
  amount,
  categorys,
  difficulty,
  type,
}: QuestionsParams): Promise<QuizQuestion[]> => {
  const response = await api.get(
    `api.php?amount=${amount}&category=${categorys}&difficulty=${difficulty}&type=${type}`,
  );

  const data = response.data.results;
  return data;
};
