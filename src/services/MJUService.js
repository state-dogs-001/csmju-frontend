import axios from "axios";

const MJUService = axios.create({
  baseURL: import.meta.env.VITE_MJU_API,

  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default MJUService;
