import apiClient from "../api-client";
export async function getParentDataService() {
  try {
    const response = await apiClient.get(
      `/api/v1/kindergarten/authorization/get-parent-data`,
      {
        usetoken: false,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
