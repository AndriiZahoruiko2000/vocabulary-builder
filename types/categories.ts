export interface SelectorItem {
  title: string;
  value: string;
}

export interface GetWordsParams {
  keyword?: string;
  category?: string;
  isIrregular?: boolean;
  page?: number;
  limit?: number;
}

export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

export interface UserWord {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner: string;
  progress: number;
}

export interface GetWordsResponse {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface UserWordResponse {
  results: UserWord[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface WordStatisticsResponse {
  totalCount: number;
}

export interface CreateWordBody {
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}
