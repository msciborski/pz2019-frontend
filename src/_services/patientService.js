import { authHeader } from "../_helpers";
import { config } from "../config.js";
import { userService } from "./userService";

export const patientService = {
  addDocumentationForPatient,
  getPatientDocumentation,
  addDoctorRating,
  addVisit,
};

function addDocumentationForPatient(files, patientId, doctorId) {
  const formData = new FormData();
  files.forEach(file => formData.append('file[]', file));

  const options = {
    method: 'POST',
    headers: {
      ...authHeader(),
    },
    body: formData,
  };

  return fetch(`${config.apiUrl}/api/v1/doctors/${doctorId}/patients/${patientId}/documentation`, options)
    .then(handleResponse);
}

function getPatientDocumentation(patientId) {
  const options = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/users/${patientId}/documentation`, options)
    .then(handleResponse);
}

function addDoctorRating(patientId, doctorId, rating, comment = '') {
  const options = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ value: rating, comment }),
  };

  return fetch(`${config.apiUrl}/api/v1/patients/${patientId}/doctors/${doctorId}/ratings`, options)
    .then(handleResponse);
}

function addVisit(patientId, doctorId, visitEpoch) {
  const options = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ doctorId, start: visitEpoch }),
  };

  return fetch(`${config.apiUrl}/api/v1/patients/${patientId}/appointments`, options)
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
