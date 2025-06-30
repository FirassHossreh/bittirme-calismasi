import apiClient from "../api-client";
export async function removeTokenService() {
  try {
    const response = await apiClient.get(
      `/api/v1/kindergarten/auth/remove-token`,
      {
        usetoken: false,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
