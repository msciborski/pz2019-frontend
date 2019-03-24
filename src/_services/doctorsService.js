import { config } from "../config";
import { userService } from "./userService";

export const doctorsService = {
  getSpecializations,
};

function getSpecializations() {
  return fetch(`${config.apiUrl}/api/v1/doctors/specializations`)
    .then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    console.log('Text:', text);
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        window.location.reload(true)
      }
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }
    return data;
  })
}