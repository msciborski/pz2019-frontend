
export const chatBotSteps = [
	{
		id: '1',
		message: 'How may I help you?',
		trigger: '2',
	},
	{
		id: '2',
		options: [
			{ value: 1, label: 'I\'d like to make an appointment.', trigger: '3' },
			{ value: 2, label: 'What kind of doctor do I need?', trigger: '17' },
		],
	},
	{
		id: '3',
		message: 'What is the doctor\'s name?',
		trigger: '4',
	},
	{
		id: '4',
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
			{ value: 2, label: 'No', trigger: '8' },
		],
	},
	{
		id: '7',
		message: 'Fine, what is your name?',
		trigger: '8',

	},
	{
		id: '8',
		user: true,
		trigger: '9',
	},
	{
		id: '9',
		message: 'What\'s the reason for your making an appointment?',
		trigger: '10',
	},
	{
		id: '10',
		user: true,
		trigger: '11',
	},
	{
		id: '11',
		message: 'Do you need urgent care?',
		trigger: '12',
	},
	{
		id: '12',
		options: [
			{ value: 1, label: 'Yes', trigger: '13' },
			{ value: 2, label: 'No', trigger: '14' },
		],
	},
	{
		id: '13',
		message: 'Which day is good for you?',
		trigger: '14',
	},
	{
		id: '14',
		options: [
			{ value: 1, label: 'Monday', trigger: '15' },
			{ value: 2, label: 'Tuesday', trigger: '15' },
			{ value: 2, label: 'Wednesday', trigger: '15' },
			{ value: 2, label: 'Thursday', trigger: '15' },
			{ value: 2, label: 'Friday', trigger: '15' },
		],
	},
	{
		id: '15',
		message: 'What time is good for you?',
		trigger: '16',
	},
	{
		id: '16',
		user: true,
		trigger: '17',
	},
	{
		id: '17',
		message: 'I\'ll pencil you in. We\'ll call you if there are any cancellations. ',
		trigger: '18',

	},
	{
		id: '18',
		message: 'Is there anything else I can help you with?',
		trigger: '19',
	},
	{
		id: '19',
		options: [
			{ value: 1, label: 'Yes', trigger: '2' },
			{ value: 2, label: 'No', trigger: '16' },
		],
	},
	{
		id: '16',
		user: true,
		end: true,
	},
	{
		id: '16',
		user: true,
		end: true,
	},
]
