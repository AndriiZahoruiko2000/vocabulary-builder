import axios from "axios";

export const nextApi = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
  withCredentials: true,
});
