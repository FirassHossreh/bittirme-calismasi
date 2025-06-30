import apiClient from "../api-client";
export async function getApplicationService() {
  try {
    const response = await apiClient.get(
      `/api/v1/kindergarten/authorization/get-one-child-registration-application`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
