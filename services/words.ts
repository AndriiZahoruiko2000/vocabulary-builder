import { GetWordsParams, GetWordsResponse } from "@/types/categories";
import { nextApi } from "./api";

export const getWords = async (params: GetWordsParams) => {
  const response = await nextApi.get<GetWordsResponse>("/words/all");
  return response.data;
};
