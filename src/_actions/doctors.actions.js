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

  function request(specizalizations) { return { type: doctorsContants.GET_SPECIALIZATIONS_REQUEST, specizalizations } };
  function success(specizalizations) { return { type: doctorsContants.GET_SPECIALIZATIONS_SUCCESS, specizalizations } };
  function failure(error) { return { type: doctorsContants.GET_SPECIALIZATIONS_FAILURE, error } };
}
