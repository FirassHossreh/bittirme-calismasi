import apiClient from "../../../services/apiClient";
import { ROOT_API } from "../../../constants/api-root";
import { ADMIN_LOGIN_API } from "../constants/admin-login-api";
export default async function adminLoginService(data) {
  try {
    const response = await apiClient.post(
      `${ROOT_API}/${ADMIN_LOGIN_API}`,
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
