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
    case doctorsContants.GET_DOCTORS_REQUEST:
      return { 
        loadingDoctors: true,
      };
    case doctorsContants.GET_DOCTORS_SUCCESS:
      return {
        doctors: action.doctors,
      };
    case doctorsContants.GET_DOCTORS_FAILURE:
      return {
        error: action.error,
      }
    case doctorsContants.GET_DOCTORS_RATING_REQUEST:
      return {
        loadingDoctors: true,
      };
    case doctorsContants.GET_DOCTORS_RATING_SUCCESS:
      return {
        ratings: action.ratings,
      };
    case doctorsContants.GET_DOCTORS_RATING_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}