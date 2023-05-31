import axios from "axios";

const WebpageService = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

WebpageService.interceptors.request.use(
  (config) => {
    let token = import.meta.env.VITE_TOKEN_API;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default WebpageService;
