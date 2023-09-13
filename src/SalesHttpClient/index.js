import axios from "axios";

export const salesHttpClient = axios.create();

salesHttpClient.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "//localhost:3001";
