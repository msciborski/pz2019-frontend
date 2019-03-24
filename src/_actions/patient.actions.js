import { patientConstants } from "../_constants";
import { patientService, userService } from "../_services";
import { alertActions } from "../_actions";

export const patientActions = {
    updatePatient,
};

function updatePatient(updatePatient) {
    return dispatch => {
      dispatch(request());
  
      return patientService.updatePatient(updatePatient)
        .then(() => {
          userService.getById(updatePatient.id);
          dispatch(success());
        }, error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        })
    }
  
    function request() { return { type: patientConstants.UPDATE_PATIENT_REQUEST } };
    function success() { return { type: patientConstants.UPDATE_PATIENT_SUCCESS } };
    function failure(error) { return { type: patientConstants.UPDATE_PATIENT_FAILURE, error }};
  }
