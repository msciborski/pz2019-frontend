
import React, { Component } from 'react';


class MedicalAppointmentSummary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			doctorFirstName: '',
			doctorLastName: '',
			patientFirstName: '',
			patientLastName: '',
			day: '',
			time: '',
			reason: ''
		};
	}

	componentWillMount() {
		const { steps } = this.props;
		const { doctorFirstName, doctorLastName, patientFirstName, patientLastName, day, time, reason }  = steps;

		this.setState({ doctorFirstName, doctorLastName, patientFirstName, patientLastName, day, time, reason } );
}

	render() {
		const { doctorFirstName, doctorLastName, patientFirstName, patientLastName, day, time, reason } = this.state;
		return (
			<div style={{ width: '100%' }}>
				<h4>Summary</h4>
				<table>
					<tbody>
					<tr>
						<td>Doctor's first name</td>
						<td>{doctorFirstName.value}</td>
					</tr>
					<tr>
						<td>Doctor's last name</td>
						<td>{doctorLastName.value}</td>
					</tr>
					<tr>
						<td>Patient's first name</td>
						<td>{patientFirstName.value}</td>
					</tr>
					<tr>
						<td>Patient's last name</td>
						<td>{patientLastName.value}</td>
					</tr>
					<tr>
						<td>Day</td>
						<td>{day.value}</td>
					</tr>
					<tr>
						<td>Time</td>
						<td>{time.value}</td>
					</tr>
					<tr>
						<td>Reason</td>
						<td>{reason.value}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export { MedicalAppointmentSummary };

