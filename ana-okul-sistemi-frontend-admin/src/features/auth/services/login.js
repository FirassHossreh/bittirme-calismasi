import apiClient from "../../../services/api-client";
import { ROOT_API } from "../../../constants/api-root";
import { LOGIN_API } from "../constants/login-api";
export async function loginService(data) {
  try {
    const response = await apiClient.post(`${ROOT_API}/${LOGIN_API}`, data, {
      usetoken: false,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
