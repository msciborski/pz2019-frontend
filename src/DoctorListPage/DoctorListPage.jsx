import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { doctorsActions } from "../_actions";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Paper, Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  root: {
    maxWidth: '1500px !important',
    margin: '20px 0 20px 0 !important',
  },
  row: {
    textDecoration: 'none',
  },
};

class DoctorListPage extends Component {
    componentDidMount() {
        const { getDoctors } = this.props;
        getDoctors();
    }

    render() {
        const { doctors, classes } = this.props;
        console.log('Doctors', doctors);

        return (
            <Grid item xs={12} className={classes.root}>
                {
                    doctors &&
                        <div>
                            <Typography variant="h3">Doctors</Typography>
                            <Paper>
                              <Table>
                                <TableHead>
                                  <TableCell>Doctor</TableCell>
                                  <TableCell>Specializations</TableCell>
                                </TableHead>
                                <TableBody>
                                  {doctors.map(doctor => (
                                    <TableRow id={doctor.id} component={Link} to={`/profile/${doctor.id}`} className={classes.row} hover>
                                      <TableCell>{`${doctor.name} ${doctor.surname}`}</TableCell>
                                      <TableCell>{doctor.specializations.map(spec => spec.name).join(', ')}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
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
const styledConnectedDoctorListPage = withStyles(styles)(connectedDoctorListPage);
export { styledConnectedDoctorListPage as DoctorListPage };