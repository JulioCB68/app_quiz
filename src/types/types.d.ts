export interface QuizQuestion {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizResponse {
  response_code: number;
  results: QuizQuestion[];
}

export interface IOptions {
  value: number | string;
  label: string;
}

export interface QuestionsParams {
  amount: string;
  categorys: string;
  difficulty: string;
  type: string;
}

export interface FormData {
  categorys: string;
  difficulty: string;
  type: string;
  amount: string;
}
