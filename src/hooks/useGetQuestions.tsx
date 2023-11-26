import { useQuery } from 'react-query';
import { getQuestions } from '../services/quiz';
import { QuestionsParams } from '../types/types';

export const useGetQuestions = (options: QuestionsParams) => {
  return useQuery('questions', () => getQuestions({ ...options }), {
    retry: false,
    refetchOnWindowFocus: false,
  });
};
