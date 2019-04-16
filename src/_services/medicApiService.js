import { config } from "../config.js";
import { userService } from "./userService";
import credentials from "../credentials";

const lang = 'en-gb';
const format = 'json';

// const CryptoJS = require("crypto-js");

export const medicApiService = {
	getSymptoms,
	getDiagnosis,
	getToken
};

function getSymptoms(token) {
	const options = {
		method: 'GET'
	};
	return fetch(`${config.apiMedicUrl}/symptoms?language=${lang}&format=${format}&token=${token}`, options)
		.then(handleResponse);
}

function getDiagnosis(token, gender, symptoms, year_of_birth) {
	const options = {
		method: 'GET'
	};
	return fetch(`${config.apiMedicUrl}/diagnosis?language=${lang}&format=${format}&symptoms=[${symptoms}]
	&gender=${gender}&year_of_birth=${year_of_birth}&token=${token}`, options)
		.then(handleResponse);
}

function getToken() {
	const options = {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + credentials.username + ':' + 'JmHSmJ2Pqiw4BmhAz736zg=='
		}
	};
	// const computedHash = CryptoJS.HmacMD5(`${config.apiMedicAuthHost}/login`, credentials.password);
	// const computedHashString = computedHash.toString(CryptoJS.enc.Base64);
	return fetch(`${config.apiMedicAuthHost}/login`, options).then(handleResponse);
};


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				userService.logout();
				window.location.reload(true)
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	})
}