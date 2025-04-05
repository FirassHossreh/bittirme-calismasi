import { API_REMOVE_TOKEN } from "../constants/remove-token";
import { APP_ROOT_API } from "../constants/api-root";
import apiClient from "./api-client";

export async function removeToken() {
  try {
    const response = await apiClient.get(`${APP_ROOT_API}/${API_REMOVE_TOKEN}`);
    return response;
  } catch (error) {
    return error.response;
  }
}
