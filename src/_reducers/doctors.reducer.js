import { doctorsContants } from "../_constants";

export const doctors = (state= {}, action) => {
  switch (action.type) {
    case doctorsContants.GET_SPECIALIZATIONS_REQUEST:
      return { };
    case doctorsContants.GET_SPECIALIZATIONS_SUCCESS:
      return {
        specializations: action.specializations,
      };
    case doctorsContants.GET_SPECIALIZATIONS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}