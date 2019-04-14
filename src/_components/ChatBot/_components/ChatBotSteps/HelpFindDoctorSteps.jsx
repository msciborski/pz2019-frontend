import React from "react";
import {HelpFindDoctorSummary} from "../HelpFindDoctorSummary";

const HelpFindDoctorSteps = [
	{
		id: 'help-find-doctor',
		message: 'What is your year of birth?',
		trigger: 'yearOfBirth',
	},
	{
		id: 'yearOfBirth',
		user: true,
		trigger: '15',
		validator: (value) => {
			if (isNaN(value)) {
				return 'value must be a number';
			} else if (value < 1900) {
				return 'value must be positive';
			} else if (value > new Date().getFullYear()) {
				return `${value}? Come on!`;
			}
			return true;
		},
	},
	{
		id: '15',
		message: 'What is your gender?',
		trigger: 'gender',
	},
	{
		id: 'gender',
		options: [
			{ value: 'male', label: 'Male', trigger: '16' },
			{ value: 'female', label: 'Female', trigger: '16' },
		],
	},

	{
		id: '16',
		message: 'What symptoms do you have?',
		trigger: 'selectedSymptoms',
	},
	{
		id: 'selectedSymptoms',
		user: true,
		trigger: '17',
	},
	{
		id: '17',
		message: 'Great! Check out your summary. ',
		trigger: 'help-symptoms-summary',

	},
	{
		id: 'help-symptoms-summary',
		component: <HelpFindDoctorSummary/>,
		asMessage: true,
		trigger: 'update-symptoms-summary',
	},
	{
		id: 'update-symptoms-summary',
		message: 'Would you like to update some field?',
		trigger: 'update-symptoms-question',
	},
	{
		id: 'update-symptoms-question',
		options: [
			{ value: 'yes', label: 'Yes', trigger: 'update-symptoms-yes' },
			{ value: 'no', label: 'No', trigger: 'end-symptoms-message' },
		],
	},
	{
		id: 'update-symptoms-yes',
		message: 'What field would you like to update?',
		trigger: 'update-symptoms-fields',
	},
	{
		id: 'update-symptoms-fields',
		options: [
			{ value: 'yearOfBirth', label: "Year of birth", trigger: 'update-year-of-birth'},
			{ value: 'gender', label: "Gender", trigger: 'update-gender'},
			{ value: 'selectedSymptoms', label: "Symptoms", trigger: 'update-symptoms' },
		],
	},
	{
		id: 'update-year-of-birth',
		update: 'yearOfBirth',
		trigger: '17',
	},
	{
		id: 'update-gender',
		update: 'gender',
		trigger: '17',
	},
	{
		id: 'update-symptoms',
		update: 'selectedSymptoms',
		trigger: '17',
	},
	{
		id: 'end-symptoms-message',
		message: 'Thanks! Your data was submitted successfully!',
		trigger: '1',
	},
]

export { HelpFindDoctorSteps };