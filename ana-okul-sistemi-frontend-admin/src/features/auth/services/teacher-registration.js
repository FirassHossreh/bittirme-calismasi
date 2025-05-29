import apiClient from "../../../services/api-client";
import { APP_ROOT_API } from "../../../constants/api-root";
import { TEACHER_REGISTRATION_API } from "../constants/teacher-registration";
export async function teacherRegistrationService(data) {
  try {
    const response = await apiClient.post(
      `${APP_ROOT_API}/${TEACHER_REGISTRATION_API}`,
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
