import { medicApiConstants } from "../_constants";

export const medicapi = (state= {}, action) => {
	switch (action.type) {
		case medicApiConstants.GET_DIAGNOSIS_REQUEST:
			return { ...state };
		case medicApiConstants.GET_DIAGNOSIS_SUCCESS:
			return {
				...state,
				diagnosis: action.diagnosis,
			};
		case medicApiConstants.GET_DIAGNOSIS_FAILURE:
			return {
				error: action.error,
			};
		case medicApiConstants.GET_SYMPTOMS_REQUEST:
			return { ...state };
		case medicApiConstants.GET_SYMPTOMS_SUCCESS:
			return {
				...state,
				symptoms: action.symptoms,
			};
		case medicApiConstants.GET_SYMPTOMS_FAILURE:
			return {
				error: action.error,
			};
		case medicApiConstants.GET_TOKEN_REQUEST:
			return { ...state };
		case medicApiConstants.GET_TOKEN_SUCCESS:
			return {
				...state,
				token: action.token,
			};
		case medicApiConstants.GET_TOKEN_FAILURE:
			return {
				error: action.error,
			};
		default:
			return state;
	}
}