import axios from "axios";
import cookies from "universal-cookie";
import { APP_DEVELOP_BASE_URL } from "../config/app-settings";

const cookie = new cookies();
const apiClient = axios.create({
  baseURL: APP_DEVELOP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
apiClient.interceptors.request.use(
  (config) => {
    const token = cookie.get("token");
    if (token && config.useToken === true) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
