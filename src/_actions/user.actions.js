import { userConstants } from "../_constants";
import { userService} from "../_services";
import { alertActions } from "../_actions";
import { history } from "../_helpers";

export const userActions = {
  login,
  register,
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    return userService.login(email, password)
      .then(user => {
        dispatch(success(user))
        history.push('/register');
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
        history.push('/login');
        dispatch(alertActions.success('Registratioon successful'));
      }, error => {
        dispatch(failure(error.message))
        dispatch(alertActions.error(error.message));
      });
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } };
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } };
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }};

}