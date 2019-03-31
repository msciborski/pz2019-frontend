import { userConstants } from "../_constants";

export const users = (state={}, action) => {
  switch (action.type) {
    case userConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_SUCCESS:
      return {
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
      return {};
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return { changingPassword: true};
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {};
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {};
    default:
      return state;
  }
};