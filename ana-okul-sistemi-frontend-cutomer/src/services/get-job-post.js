import apiClient from "./api-client";
export async function getJobPostService(id) {
  try {
    console.log(typeof id);
    console.log(id);

    const response = await apiClient.get(
      `/api/v1/kindergarten/get-job-post/${id}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
