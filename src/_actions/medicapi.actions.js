import { medicApiConstants } from "../_constants";
import { medicApiService } from "../_services";

export const medicApiActions = {
	getSymptoms,
	getDiagnosis,
	getToken
};

function getSymptoms(token) {
	return dispatch => {
		dispatch(request([]));
		return medicApiService.getSymptoms(token)
			.then(symptoms => {
				dispatch(success(symptoms));
			}, error => {
				dispatch(failure(error));
			});
	};

	function request(symptoms) { return { type: medicApiConstants.GET_SYMPTOMS_REQUEST, symptoms } }
	function success(symptoms) { return { type: medicApiConstants.GET_SYMPTOMS_SUCCESS, symptoms } }
	function failure(error) { return { type: medicApiConstants.GET_SYMPTOMS_FAILURE, error } }
}

function getDiagnosis(token, gender, symptoms, year_of_birth) {
	return dispatch => {
		dispatch(request([]));
		return medicApiService.getDiagnosis(token, gender, symptoms, year_of_birth)
			.then(diagnosis => {
				dispatch(success(diagnosis.map(diag => diag.Issue.Name).join(', ')));
			}, error => {
				dispatch(failure(error));
			})
	};

	function request(diagnosis) { return { type: medicApiConstants.GET_DIAGNOSIS_REQUEST, diagnosis } }
	function success(diagnosis) { return { type: medicApiConstants.GET_DIAGNOSIS_SUCCESS, diagnosis } }
	function failure(error) { return { type: medicApiConstants.GET_DIAGNOSIS_FAILURE, error } }
}

function getToken() {
	return dispatch => {
		dispatch(request());
		return medicApiService.getToken()
			.then(token => {
				dispatch(success(token.Token));
			}, error => {
				dispatch(failure(error));
			})
	};

	function request() { return { type: medicApiConstants.GET_TOKEN_REQUEST } }
	function success(token) { return { type: medicApiConstants.GET_TOKEN_SUCCESS, token } }
	function failure(error) { return { type: medicApiConstants.GET_TOKEN_FAILURE, error } }
}