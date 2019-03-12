import { userConstants } from "../constants";
import { userService} from "../services";
import { alertActions } from "../actions";

export const userActions = {
  login,
  register,
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    return userService.login(username, password)
      .then(user => {
        dispatch(success(user))
        //history
      }, error => {
        dispatch(failure(error.message));
        dispatch(alertActions.error(error.message));
      });
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    return userService.register(user)
      .then(() => {
        dispatch(success());
        //history
        dispatch(alertActions.success('Registratioon successful'));
      }, error => {
        dispatch(failure(error.message))
        dispatch(alertActions.failure(error.message));
      });
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } };
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } };
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }};

}