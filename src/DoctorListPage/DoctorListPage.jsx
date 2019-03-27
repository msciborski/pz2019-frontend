import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { doctorsActions } from "../_actions";
import { Grid, Typography, Paper } from "@material-ui/core";

class DoctorListPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getDoctors } = this.props;
        getDoctors();
    }

    render() {
        const { doctors } = this.props;
        console.log('Doctors', doctors);

        return (
            <Grid item xs={12}>
                {
                    doctors &&
                        <div>
                            <Typography variant="h3">Doctors</Typography>
                            <Paper>
                                    
                            </Paper>
                        </div>
                }
            </Grid>
        );
    }

}

const mapStateToProps = state => {
    const { doctors } = state;
    return {
        doctors: doctors.doctors,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctors: () => dispatch(doctorsActions.getDoctors()),
    };
}

const connectedDoctorListPage = connect(mapStateToProps, mapDispatchToProps)(DoctorListPage);
export { connectedDoctorListPage as DoctorListPage };