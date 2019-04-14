import { config } from "../config";
import { userService } from "./userService";
import { authHeader } from "../_helpers";

export const doctorsService = {
  getSpecializations,
  getDoctors,
  getDoctorRatings,
  getDoctorWorkingHoursInfo,
};

function getSpecializations() {
  return fetch(`${config.apiUrl}/api/v1/doctors/specializations`)
    .then(handleResponse);
}

function getDoctors() {
  const options = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/doctors`, options)
    .then(handleResponse);
}

function getDoctorRatings(doctorId) {
  const options = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/doctors/${doctorId}/ratings`)
    .then(handleResponse);
}

function getDoctorWorkingHoursInfo(doctorId) {
  const options = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/doctors/${doctorId}/working-hours`)
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