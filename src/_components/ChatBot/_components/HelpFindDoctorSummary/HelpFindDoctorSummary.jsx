
import React, { Component } from 'react';
import { medicApiActions } from "../../../../_actions";
import { connect } from "react-redux";



class HelpFindDoctorSummary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			yearOfBirth: '',
			gender: '',
			selectedSymptoms: '',
		};
	}

	componentDidMount() {
		const { getToken } = this.props;
		getToken();
	}

	componentWillMount() {
		const { steps } = this.props;
		const { yearOfBirth, gender, selectedSymptoms } = steps;

		this.setState({ yearOfBirth, gender, selectedSymptoms } );
	}

	componentDidUpdate(prevProps) {
		const { getDiagnosis, getSymptoms, symptoms, token } = this.props;

		if (prevProps.token !== token || prevProps.symptoms !== symptoms) {
			if (token) {
				getSymptoms(token);
			}
			if (symptoms) {
				getDiagnosis(token, this.state.gender.value, this.state.selectedSymptoms.value, this.state.yearOfBirth.value);
			}
		}
	}

	render() {
		const { diagnosis } = this.props;
		const { selectedSymptoms } = this.state;

		return (
			diagnosis ?
				<div style={{ width: '100%' }}>
					<h4>Summary</h4>
					<table>
						<tbody>
						<tr>
							<td>Symptoms</td>
							<td>{selectedSymptoms.value}</td>
						</tr>
						<tr>
							<td>Diagnosis</td>
							<td>{diagnosis}</td>
						</tr>
						</tbody>
					</table>
				</div>
				:
				<></>
		);
	}
}

const mapStateToProps = state => {
	const { medicapi } = state;

	return {
		token: medicapi.token,
		symptoms: medicapi.symptoms,
		diagnosis: medicapi.diagnosis
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getToken: () => dispatch(medicApiActions.getToken()),
		getSymptoms: (token) => dispatch(medicApiActions.getSymptoms(token)),
		getDiagnosis: (token, gender, symptoms, yearOfBirth) => dispatch(medicApiActions.getDiagnosis(token, gender, symptoms, yearOfBirth))
	};
};

const connectedHelpFindDoctorSummary = connect(mapStateToProps, mapDispatchToProps)(HelpFindDoctorSummary);
export { connectedHelpFindDoctorSummary as HelpFindDoctorSummary };

// export { HelpFindDoctorSummary };

