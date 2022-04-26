import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";
const API = axios.create({ baseURL });

API.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
