import apiClient from "./api-client";
import { APP_ROOT_API } from "../../../constants/api-root";
import { LOGIN_API } from "../constants/login-api";
export async function loginService(data) {
  try {
    const response = await apiClient.post(
      `${APP_ROOT_API}/${LOGIN_API}`,
      data,
      {
        usetoken: false,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
