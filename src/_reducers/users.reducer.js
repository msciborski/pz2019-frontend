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
    default:
      return state;
  }
};