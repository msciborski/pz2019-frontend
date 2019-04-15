import { patientConstants } from "../_constants";
import { patientService } from "../_services";
import { alertActions, userActions } from "../_actions";


export const patientActions = {
  addPatientDocumentation,
  getPatientDocumentation,
  addDoctorRating,
  addVisit,
};

function addDoctorRating(patientId, doctorId, rating, comment = '') {
  return dispatch => {
    dispatch(request());
    patientService.addDoctorRating(patientId, doctorId, rating, comment)
      .then(() => {
        dispatch(success());
        dispatch(userActions.getById(doctorId));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }
  function request() { return { type: patientConstants.ADD_DOCTOR_RATING_REQUEST } };
  function success() { return { type: patientConstants.ADD_DOCTOR_RATING_SUCCESS } };
  function failure(error) { return { type: patientConstants.ADD_DOCTOR_RATING_FAILURE, error } }; 
}

function addPatientDocumentation(files, patientId, doctorId) {
  return dispatch => {
    dispatch(request());
    patientService.addDocumentationForPatient(files, patientId, doctorId)
      .then(() => {
        dispatch(success());
        dispatch(alertActions.success('Docummentation has been added successfully.'));
        dispatch(getPatientDocumentation(patientId));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_REQUEST } };
  function success() { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_SUCCESS } };
  function failure(error) { return { type: patientConstants.ADD_PATIENT_DOCUMENTATION_FAILURE, error } };
}

function getPatientDocumentation(patientId) {
  return dispatch => {
    dispatch(request([]));
    return patientService.getPatientDocumentation(patientId)
      .then(documentation => {
        dispatch(success(documentation));
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request(documentation) { return { type: patientConstants.GET_PATIENT_DOCUMENTATION_REQUEST, documentation } };
  function success(documentation) { return { type: patientConstants.GET_PATIENT_DOCUMENTATION_SUCCESS, documentation } };
  function failure(error) { return { type: patientConstants.GET_PATIENT_DOCUMENTATION_FAILURE, error } };
}

function addVisit(patientId, doctorId, visitEpoch) {
  return dispatch => {
    dispatch(request());

    return patientService.addVisit(patientId, doctorId, visitEpoch)
      .then(() => {
        dispatch(success());
        dispatch(userActions.getUserVisits(patientId));
        
      }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      })
  }

  function request() { return { type: patientConstants.ADD_VISIT_REQUEST } };
  function success() { return { type: patientConstants.ADD_VISIT_SUCCESS } };
  function failure(error) { return { type: patientConstants.ADD_DOCTOR_RATING_FAILURE, error } }; 
}


