import { patientConstants } from "../_constants";

export const patients = (state = {}, action) => {
    switch (action.type) {
        case patientConstants.ADD_PATIENT_DOCUMENTATION_REQUEST:
            return {
                addingFiles: true,
            };
        case patientConstants.ADD_PATIENT_DOCUMENTATION_SUCCESS:
            return { };
        case patientConstants.ADD_PATIENT_DOCUMENTATION_FAILURE:
            return {
                error: action.error,
            };
        case patientConstants.GET_PATIENT_DOCUMENTATION_REQUEST:
            return {
              loadingPatientDocumentation: true,
              documentation: action.documentation,
            };
        case patientConstants.GET_PATIENT_DOCUMENTATION_SUCCESS:
            return {
              documentation: action.documentation,
            };
        case patientConstants.GET_PATIENT_DOCUMENTATION_FAILURE:
            return {
              error: action.error,
            };
        case patientConstants.ADD_DOCTOR_RATING_REQUEST:
            return { };
        case patientConstants.ADD_DOCTOR_RATING_SUCCESS:
            return { };
        case patientConstants.ADD_PATIENT_DOCUMENTATION_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
};