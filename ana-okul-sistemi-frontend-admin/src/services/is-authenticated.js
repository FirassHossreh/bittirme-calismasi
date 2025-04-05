import { API_IS_AUTHENTICATED } from "../constants/api-is-authenticated";
import { APP_ROOT_API } from "../constants/api-root";
import apiClient from "./api-client";

export async function IsAuthenticated() {
  try {
    const response = await apiClient.get(
      `${APP_ROOT_API}/${API_IS_AUTHENTICATED}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
