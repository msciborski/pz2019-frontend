
const BasicSteps = [
	{
		id: '1',
		message: 'How may I help you?',
		trigger: '2',
	},
	{
		id: '2',
		options: [
			{ value: 1, label: "I'd like to make an appointment.", trigger: 'make-appointment' },
			{ value: 2, label: 'What kind of doctor do I need?', trigger: 'help-find-doctor' },
		],
	},
]

export { BasicSteps };