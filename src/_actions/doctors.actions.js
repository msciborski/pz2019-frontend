import { doctorsContants } from "../_constants";
import { doctorsService } from "../_services";
import { alertActions } from "../_actions";
import { fail } from "assert";

export const doctorsActions = {
  getSpecializations,
  getDoctors,
  getDoctorRatings,
  addPrescription,
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

function getDoctorRatings(doctorId) {
  return dispatch => {
    dispatch(request());
    
    return doctorsService.getDoctorRatings(doctorId)
      .then(ratings => {
        dispatch(success(ratings));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: doctorsContants.GET_DOCTORS_RATING_REQUEST } };
  function success(ratings) { return { type: doctorsContants.GET_DOCTORS_RATING_SUCCESS, ratings } };
  function failure(error) { return { type: doctorsContants.GET_DOCTORS_RATING_FAILURE, error } };
}

function addPrescription(prescription) {
  return dispatch => {
    dispatch(request());

    return doctorsService.addPrescription(prescription)
      .then(() => {
        dispatch(success());
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: doctorsContants.ADD_PRESCRIPTION_REQUEST } };
  function success() { return { type: doctorsContants.ADD_PRESCRIPTION_SUCCESS } };
  function failure(error) { return { type: doctorsContants.ADD_PRESCRIPTION_FAILURE, error }};
}