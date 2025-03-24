import { API_IS_AUTHENTICATED } from "../constants/api-is-authenticated";
import { ROOT_API } from "../constants/api-root";
import apiClient from "./api-client";

export async function IsAuthenticated() {
  try {
    const response = await apiClient.get(`${ROOT_API}/${API_IS_AUTHENTICATED}`);
    return response;
  } catch (error) {
    return error.response;
  }
}
