import apiClient from "../api-client";
export async function registerService(data) {
  try {
    const response = await apiClient.post(
      `/api/v1/kindergarten/auth/parent-register`,
      data,
      {
        usetoken: false,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
