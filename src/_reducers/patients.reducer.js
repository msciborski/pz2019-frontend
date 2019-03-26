import { patientConstants } from "../_constants";

export const patients = (state = {}, action) => {
    switch (action.type) {
        case patientConstants.UPDATE_PATIENT_REQUEST: 
            return {
                updatingPatient: true,
            };
        case patientConstants.UPDATE_PATIENT_SUCCESS: 
            return { };
        case patientConstants.UPDATE_PATIENT_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
};