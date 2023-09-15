import axios from "axios";

export const salesHttpClient = axios.create();
export const defaultApiBaseUrl = "//localhost:3001";

salesHttpClient.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl;
