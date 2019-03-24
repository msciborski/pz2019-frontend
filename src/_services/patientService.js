import { authHeader } from "../_helpers";
import { config } from "../config.js";
import { userService } from "./userService";

export const patientService = {
    updatePatient,
};

function updatePatient(patientToUpdate) {
    const options = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(patientToUpdate),
    };

    return fetch(`${config.apiUrl}/api/v1/patients/${patientToUpdate.id}`, options)
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
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
