import { doctorsContants } from "../_constants";
import { doctorsService } from "../_services";
import { alertActions } from "../_actions";

export const doctorsActions = {
  getSpecializations,
  getDoctors,
};

function getSpecializations() {
  return dispatch => {
    dispatch(request([]));
    return doctorsService.getSpecializations()
      .then(specizalizations => {
        dispatch(success(specizalizations));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error))
      });
  }

  function request(specializations) { return { type: doctorsContants.GET_SPECIALIZATIONS_REQUEST, specializations } };
  function success(specializations) { return { type: doctorsContants.GET_SPECIALIZATIONS_SUCCESS, specializations } };
  function failure(error) { return { type: doctorsContants.GET_SPECIALIZATIONS_FAILURE, error } };
}

function getDoctors() {
  return dispatch => {
    dispatch(request());
    return doctorsService.getDoctors()
      .then(doctors => {
        dispatch(success(doctors));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: doctorsContants.GET_DOCTORS_REQUEST } };
  function success(doctors) { return { type: doctorsContants.GET_DOCTORS_SUCCESS, doctors } };
  function failure(error) { return { type: doctorsContants.GET_DOCTORS_FAILURE, error } };
}
