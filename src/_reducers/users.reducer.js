import { userConstants } from "../_constants";

export const users = (state={}, action) => {
  switch (action.type) {
    case userConstants.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.GET_SUCCESS:
      return {
        ...state,
        user: action.user,
      }
    case userConstants.GET_FAILURE:
      return {
        error: action.errr,
      };
    case userConstants.UPDATE_USER_REQUEST:
      return { updatingUser: true};
    case userConstants.UPDATE_USER_SUCCESS:
      return {};
    case userConstants.UPDATE_USER_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return { changingPassword: true};
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {};
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.RESET_PASSWORD_REQUEST_REQUEST:
      return {};
    case userConstants.RESET_PASSWORD_REQUEST_SUCCESS:
      return {};
    case userConstants.RESET_PASSWORD_REQUEST_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.RESET_PASSWORD_REQUEST:
      return {};
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {};
    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        error: action.error,
      }
    case userConstants.USER_ACTIVATE_REQUEST:
      return {};
    case userConstants.USER_ACTIVATE_SUCCESS:
      return {
        userActivated: true,
      };
    case userConstants.USER_ACTIVATE_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.GET_USER_VISITS_REQUEST:
      return {
        ...state,
        visits: action.visits,
      };
    case userConstants.GET_USER_VISITS_SUCCESS:
      return {
        ...state,
        visits: action.visits,
      };
    case userConstants.GET_USER_VISITS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};