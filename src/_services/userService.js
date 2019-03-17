import { config } from "../config.js";
import { authHeader } from "../_helpers/index.js";

export const userService = {
  login,
  logout,
  register,
  getById,
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
    mode: 'no-cors',
    body: JSON.stringify(user),
  };
  return fetch(`${config.apiUrl}/api/v1/users`, options);
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

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true)
      }
      console.log('data:', data);
      const error = (data && data.error.message) || response.statusText;
      console.log('error:', error);
      return Promise.reject(error);
    }
    console.log(data);
    return data;
  })
}