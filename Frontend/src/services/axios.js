import axios from "axios";

export const axiosAPI = axios.create({
  baseURL: "http://localhost:3001",
});
