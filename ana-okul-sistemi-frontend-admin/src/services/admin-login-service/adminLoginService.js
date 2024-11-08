import apiClient from "../apiClient";

export default async function adminLoginService(data) {
  try {
    const response = await apiClient.post(
      "/api/kindergarten/admin/login",
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
