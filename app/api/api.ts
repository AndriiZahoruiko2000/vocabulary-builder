import { SERVER_BASE_URL } from "@/helpers/constants";
import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{error:string}>;

export const globalApi = axios.create({
    baseURL: SERVER_BASE_URL,
    withCredentials: true
})