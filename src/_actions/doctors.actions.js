import { doctorsContants } from "../_constants";
import { doctorsService } from "../_services";
import { alertActions } from "../_actions";

export const doctorsActions = {
  getSpecializations,
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
