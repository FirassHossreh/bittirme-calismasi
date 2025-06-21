import apiClient from "./api-client";
export async function getJobPostsService() {
  try {
    const response = await apiClient.get(`/api/v1/kindergarten/get-job-posts`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
