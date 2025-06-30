import apiClient from "../api-client";
export async function loginService(data) {
  try {
    const response = await apiClient.post(
      `/api/v1/kindergarten/auth/parent-login`,
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
