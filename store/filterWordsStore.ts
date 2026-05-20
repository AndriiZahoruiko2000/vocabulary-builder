import { create } from "zustand";

interface WordsParams {
  keyword?: string;
  category?: string;
  isIrregular?: boolean;
  page?: number;
  limit?: number;
}

interface WordsStore {
  wordsParams: WordsParams;
  setWordsParams: (newWordsParams: WordsParams) => void;
}

export const useFilterWordsStore = create<WordsStore>()((setStore) => {
  return {
    wordsParams: {},
    setWordsParams: (newWordsParams) => {
      setStore((previousStore) => {
        return {
          wordsParams: { ...previousStore.wordsParams, ...newWordsParams },
        };
      });
    },
  };
});
