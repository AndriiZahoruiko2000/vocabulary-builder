import {
  GetWordsParams,
  GetWordsResponse,
  UserWordResponse,
} from "@/types/categories";
import { nextApi } from "./api";

export const getWords = async (params: GetWordsParams) => {
  const response = await nextApi.get<GetWordsResponse>("/words/all", {
    params,
  });
  return response.data;
};

export const getWordsOwn = async (params: GetWordsParams) => {
  const response = await nextApi.get<UserWordResponse>("/words/own", {
    params,
  });
  return response.data;
};
