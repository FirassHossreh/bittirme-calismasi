import apiClient from "../../../services/api-client";
import { APP_ROOT_API } from "../../../constants/api-root";
export async function getAllApplicationsService() {
  try {
    const response = await apiClient.get(
      `${APP_ROOT_API}/get-all-applications`,
      {
        usetoken: false,
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
