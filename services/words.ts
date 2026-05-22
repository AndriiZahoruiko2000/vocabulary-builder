import {
  CreateWordBody,
  DeleteResponse,
  GetWordsParams,
  GetWordsResponse,
  UserWord,
  UserWordResponse,
  WordStatisticsResponse,
} from "@/types/categories";
import { nextApi } from "./api";

export const getWords = async (params?: GetWordsParams) => {
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

export const getWordsStatistics = async () => {
  const response =
    await nextApi.get<WordStatisticsResponse>("/words/statistics");
  return response.data;
};

export const createWord = async (body: CreateWordBody) => {
  const response = await nextApi.post<UserWord>("/words/create", body);
  return response.data;
};

export const editWord = async (id: string, body: CreateWordBody) => {
  const response = await nextApi.patch<UserWord>(`/words/edit/${id}`, body);
  return response.data;
};

export const deleteWord = async (id: string) => {
  const response = await nextApi.delete<DeleteResponse>(`/words/delete/${id}`);
  return response.data;
};

export const addWord = async (id: string) => {
  const response = await nextApi.post<UserWord>(`/words/add/${id}`);
  return response.data;
};
