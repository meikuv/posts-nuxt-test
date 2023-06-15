import axios from "axios";
const BASE_URL = "https://api.nuxtjs.dev";

const postRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // Cookie
  timeout: 20000,
});

postRequest.interceptors.request.use((config) => {
  return config;
});

export default postRequest;
