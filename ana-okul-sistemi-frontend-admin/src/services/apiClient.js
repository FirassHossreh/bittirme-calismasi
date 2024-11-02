import axios from "axios";
import cookies from "universal-cookie";

const cookie = new cookies();
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
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
