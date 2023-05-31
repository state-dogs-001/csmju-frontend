import axios from "axios";

const AuthService = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default AuthService;
