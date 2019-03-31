import { config } from "../config.js";
import { authHeader } from "../_helpers/index.js";

export const userService = {
  login,
  logout,
  register,
  getById,
  updateUser,
  changePassword,
};

function login(email, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/api/v1/users/login`, options)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function register(user) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/api/v1/users`, options)
    .then(handleResponse);
}

function getById(id) {
  const options = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/users/${id}`, options)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function updateUser(patientToUpdate) {
  const options = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(patientToUpdate),
  };

  return fetch(`${config.apiUrl}/api/v1/users/${patientToUpdate.id}`, options)
      .then(handleResponse);
}

function changePassword(oldPassword, newPassword, userId) {
  const options = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify({ oldPassword, newPassword }),
  };

  return fetch(`${config.apiUrl}/api/v1/users/${userId}/password`, options)
      .then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true)
      }
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }
    return data;
  })
}

