import apiClient from "../api-client";
export async function isAuthenticatedService() {
  try {
    const response = await apiClient.get(
      `/api/v1/kindergarten/auth/is-authenticated-new`,
      {
        usetoken: false,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
