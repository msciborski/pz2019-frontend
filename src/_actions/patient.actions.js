import { patientConstants } from "../_constants";
import { patientService } from "../_services";
import { alertActions } from "../_actions";


export const patientActions = {
  addPatientDocumentation
};

function addPatientDocumentation(files, patientId, doctorId) {
  return dispatch => {
    dispatch(request());
    patientService.addDocumentationForPatient(files, patientId, doctorId)
      .then(() => {
        dispatch(success());
        dispatch(alertActions.success('Docummentation has been added successfully.'));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_REQUEST } };
  function success() { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_SUCCESS } };
  function failure(error) { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_FAILURE, error } };

}


