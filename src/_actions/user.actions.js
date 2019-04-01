import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "../_actions";
import { history } from "../_helpers";

export const userActions = {
  login,
  register,
  logout,
  getById,
  updateUser,
  changePassword,
  resetPasswordRequest,
  resetPassword,
  activateUser,
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    return userService.login(email, password)
      .then(user => {
        dispatch(success(user))
        history.push('/profile/' + user.user.id);
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      });
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getById(id) {
  return dispatch => {
    dispatch(request({ id }));
    userService.getById(id)
      .then(user => {
        dispatch(success(user));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request(user) { return { type: userConstants.GET_REQUEST, user } };
  function success(user) { return { type: userConstants.GET_SUCCESS, user } };
  function failure(error) { return { type: userConstants.GET_FAILURE, error } };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    return userService.register(user)
      .then(() => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registratioon successful'));
      }, error => {
        dispatch(failure(error))
        dispatch(alertActions.error(error));
      });
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } };
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } };
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } };
}

function updateUser(updatePatient) {
  return dispatch => {
    dispatch(request());

    return userService.updateUser(updatePatient)
      .then(() => {
        dispatch(userActions.getById(updatePatient.id));
        dispatch(success());
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: userConstants.UPDATE_USER_REQUEST } };
  function success() { return { type: userConstants.UPDATE_USER_SUCCESS } };
  function failure(error) { return { type: userConstants.UPDATE_USER_FAILURE, error }};
}

function changePassword(oldPassword, newPassword, userId) {
  return dispatch => {
    dispatch(request());

    return userService.changePassword(oldPassword, newPassword, userId)
      .then(() => {
        dispatch(success());
        dispatch(userActions.getById(userId));
        dispatch(alertActions.success('Password changed successfully.'));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: userConstants.CHANGE_PASSWORD_REQUEST } };
  function success() { return { type: userConstants.CHANGE_PASSWORD_SUCCESS} };
  function failure(error) { return { type: userConstants.CHANGE_PASSWORD_FAILURE, error }};
}

function resetPasswordRequest(email) {
  return dispatch => {
    dispatch(request());
    return userService.resetPasswordRequest(email)
      .then(() => {
        dispatch(success());
        dispatch(alertActions.success('Email with changing your password has been sent.'));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: userConstants.RESET_PASSWORD_REQUEST_REQUEST } };
  function success() { return { type: userConstants.RESET_PASSWORD_REQUEST_SUCCESS } };
  function failure(error) { return { type: userConstants.RESET_PASSWORD_REQUEST_FAILURE, error } };
}

function resetPassword(userId, newPassword, resetPasswordToken) {
  console.log('R:', resetPasswordToken)
  return dispatch => {
    dispatch(request());

    return userService.resetPassword(userId, newPassword, resetPasswordToken)
      .then(() => {
        dispatch(success());
        dispatch(alertActions.success('Your password has been changed.'));
        history.push('/login');
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.failure(error));
      })
  }

  function request() { return { type: userConstants.RESET_PASSWORD_REQUEST } };
  function success() { return { type: userConstants.RESET_PASSWORD_SUCCESS } };
  function failure(error) { return { type: userConstants.RESET_PASSWORD_FAILURE, error } };
}

function activateUser(activateToken) {
  return dispatch => {
    dispatch(request());

    return userService.activateUser(activateToken)
      .then(() => {
        dispatch(success());
        dispatch(alertActions.success('User has been activated.'));
        history.push('/login');
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: userConstants.USER_ACTIVATE_REQUEST } };
  function success() { return { type: userConstants.USER_ACTIVATE_SUCCESS } };
  function failure(error) { return { type: userConstants.USER_ACTIVATE_FAILURE, error} }
}