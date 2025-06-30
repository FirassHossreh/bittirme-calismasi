import apiClient from "../api-client";
export async function createApplicationService(data) {
  try {
    const response = await apiClient.post(
      `/api/v1/kindergarten/authorization/create-child-registration-application`,
      data
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
