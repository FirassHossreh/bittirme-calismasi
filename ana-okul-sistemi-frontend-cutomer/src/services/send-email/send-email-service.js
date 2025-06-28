import apiClient from "../api-client";
export async function sendEmailService(data) {
  try {
    const response = await apiClient.post(
      `/api/v1/kindergarten/customer-contact`,
      data
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
