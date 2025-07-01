import apiClient from "../../../services/api-client";
import { APP_ROOT_API } from "../../../constants/api-root";
export async function rejectApplicationService(data, id) {
  try {
    const response = await apiClient.patch(
      `${APP_ROOT_API}/edit-application/${id}`,
      data,
      {
        usetoken: false,
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
