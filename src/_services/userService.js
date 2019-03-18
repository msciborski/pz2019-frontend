import { config } from "../config.js";
import { authHeader } from "../_helpers/index.js";

export const userService = {
  login,
  logout,
  register,
  getById,
  updateUser,
};

const userAddress = {
  voivodeship: '',
  city: '',
  street: '',
  number: '',
  zipCode: '',
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
      user.address = {
        ...userAddress,
        ...user.address,
      }
      return user;
    });
}

function updateUser(updatedUser) {
  const options = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(updateUser),
  };

  return fetch(`${config.apiUrl}/api/v1/users/${updatedUser.id}`, options)
    .then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log('Response ok:', response.ok);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true)
      }
      const error = (data && data.message) || response.statusText;
      console.log('Register error:', error);
      return Promise.reject(error);
    }
    return data;
  })
}