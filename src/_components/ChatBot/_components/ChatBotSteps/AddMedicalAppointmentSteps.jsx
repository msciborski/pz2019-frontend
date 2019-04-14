import { MedicalAppointmentSummary } from "../MedicalAppointmentSummary";
import React from 'react';


const AddMedicalAppointmentSteps = [
	{
		id: 'make-appointment',
		message: "What is the doctor's first name?",
		trigger: 'doctorFirstName',
	},
	{
		id: 'doctorFirstName',
		user: true,
		trigger: '4',
	},
	{
		id: '4',
		message: "What is the doctor's last name?",
		trigger: 'doctorLastName',
	},
	{
		id: 'doctorLastName',
		user: true,
		trigger: '5',
	},
	{
		id: '5',
		message: 'Have you been in to see Doctor {previousValue} before?',
		trigger: '6'
	},
	{
		id: '6',
		options: [
			{ value: 1, label: 'Yes', trigger: '7' },
			{ value: 2, label: 'No', trigger: '7' },
		],
	},
	{
		id: '7',
		message: 'Fine, what is your first name?',
		trigger: 'patientFirstName',

	},
	{
		id: 'patientFirstName',
		user: true,
		trigger: '8',
	},
	{
		id: '8',
		message: 'What is your last name?',
		trigger: 'patientLastName',
	},
	{
		id: 'patientLastName',
		user: true,
		trigger: '9',
	},
	{
		id: '9',
		message: "What's the reason for your making an appointment?",
		trigger: 'reason',
	},
	{
		id: 'reason',
		user: true,
		trigger: '10',
	},
	{
		id: '10',
		message: 'Do you need urgent care?',
		trigger: '11',
	},
	{
		id: '11',
		options: [
			{ value: 1, label: 'Yes', trigger: '12' },
			{ value: 2, label: 'No', trigger: '12' },
		],
	},
	{
		id: '12',
		message: 'Which day is good for you?',
		trigger: 'day',
	},
	{
		id: 'day',
		options: [
			{ value: 'Monday', label: 'Monday', trigger: '13' },
			{ value: 'Tuesday', label: 'Tuesday', trigger: '13' },
			{ value: 'Wednesday', label: 'Wednesday', trigger: '13' },
			{ value: 'Thursday', label: 'Thursday', trigger: '13' },
			{ value: 'Friday', label: 'Friday', trigger: '13' },
		],
	},
	{
		id: '13',
		message: 'What time is good for you?',
		trigger: 'time',
	},
	{
		id: 'time',
		options: [
			{ value: '9am', label: '9am', trigger: '14' },
			{ value: '10am', label: '10am', trigger: '14' },
			{ value: '1pm', label: '1pm', trigger: '14' },
		],
	},
	{
		id: '14',
		message: 'Great! Check out your summary. ',
		trigger: 'appointment-summary',

	},
	{
		id: 'appointment-summary',
		component: <MedicalAppointmentSummary/>,
		asMessage: true,
		trigger: 'update-appointment',
	},
	{
		id: 'update-appointment',
		message: 'Would you like to update some field?',
		trigger: 'update-appointment-question',
	},
	{
		id: 'update-appointment-question',
		options: [
			{ value: 'yes', label: 'Yes', trigger: 'update-appointment-yes' },
			{ value: 'no', label: 'No', trigger: 'end-appointment-message' },
		],
	},
	{
		id: 'update-appointment-yes',
		message: 'What field would you like to update?',
		trigger: 'update-appointment-fields',
	},
	{
		id: 'update-appointment-fields',
		options: [
			{ value: 'doctorFirstName', label: "Doctor's first name", trigger: 'update-doctor-first-name'},
			{ value: 'doctorLastName', label: "Doctor's last name", trigger: 'update-doctor-last-name'},
			{ value: 'patientFirstName', label: "Patient's first name", trigger: 'update-patient-first-name' },
			{ value: 'patientLastName', label: "Patient's last name", trigger: 'update-patient-last-name' },
			{ value: 'day', label: 'Day', trigger: 'update-day' },
			{ value: 'time', label: 'Time', trigger: 'update-time' },
			{ value: 'reason', label: 'Reason', trigger: 'update-reason' },
		],
	},
	{
		id: 'update-doctor-first-name',
		update: 'doctorFirstName',
		trigger: '14',
	},
	{
		id: 'update-doctor-last-name',
		update: 'doctorLastName',
		trigger: '14',
	},
	{
		id: 'update-patient-first-name',
		update: 'patientFirstName',
		trigger: '14',
	},
	{
		id: 'update-patient-last-name',
		update: 'patientLastName',
		trigger: '14',
	},
	{
		id: 'update-day',
		update: 'day',
		trigger: '14',
	},
	{
		id: 'update-time',
		update: 'time',
		trigger: '14',
	},
	{
		id: 'update-reason',
		update: 'reason',
		trigger: '14',
	},
	{
		id: 'end-appointment-message',
		message: 'Thanks! Your data was submitted successfully!',
		trigger: '1',
	},
]

export { AddMedicalAppointmentSteps };