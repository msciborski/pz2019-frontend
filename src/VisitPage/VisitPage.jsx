  import React, { Component } from "react";
  import { withStyles } from "@material-ui/styles";
  import { connect } from "react-redux";
  import { Grid, Paper, Typography, FormControl, InputLabel, Select } from "@material-ui/core";
  import DateFnsUtils from "@date-io/date-fns";
  import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
  import { doctorsActions, userActions, patientActions } from "../_actions";
  import { visitHelper } from "../_helpers";
  import { AvailableVisits } from "../_components/AvailableVisits";

  const styles = {
    root: {
      maxWidth: "1500px !important",
      margin: "20px 0 20px 0 !important"
    },
    selectForm: {
      display: 'flex',
      justifyContent: 'center',
    },
    datePicker: {
      margin: '10px 10px 10px 20px !important',
    },
    doctorSelect: {
      margin: '10px 20px 10px 10px !important',
    }
  };

  class VisitPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        selectedDate: new Date(),
        selectedDoctorId: null,
      };
    }

    componentDidMount() {
      const { getDoctors } = this.props;
      getDoctors();
    }

    componentDidUpdate(prevProps, prevState) {
      const { selectedDate, selectedDoctorId } = this.state;
      const { getDoctorWorkingHours, getDoctorVisits } = this.props

      if ((selectedDate && selectedDoctorId) && (prevState.selectedDate !== selectedDate || prevState.selectedDoctorId !== selectedDoctorId)) {
        getDoctorWorkingHours(selectedDoctorId);
        getDoctorVisits(selectedDoctorId);
      }
    }

    handleChangeDate = date => {
      this.setState({ selectedDate: date });
    };

    handleDoctorChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleVisitClick = epochDate => {
      const { authUser, addVisit } = this.props;
      const { selectedDoctorId } = this.state;

      console.log(selectedDoctorId);
      console.log(authUser);
      if (authUser && selectedDoctorId) {
        addVisit(authUser.id, selectedDoctorId, epochDate);
      }
    }

    renderSelect = () => {
      const { doctors, classes } = this.props;
      const { selectedDoctorId } = this.state;



      return (
        doctors &&
        <FormControl className={classes.doctorSelect}>
          <InputLabel htmlFor="doctor-select">Doctor</InputLabel>
          <Select
            value={selectedDoctorId}
            onChange={this.handleDoctorChange}
            inputProps={{ name: 'selectedDoctorId', id: 'doctor-select' }}
          >
            {doctors.map(doctor => <option value={doctor.id}>{`${doctor.name} ${doctor.surname}`}</option>)}
          </Select>
        </FormControl>
      )
    }

    render() {
      const { classes, workingHours, visits } = this.props;
      const { selectedDate, selectedDoctorId } = this.state;
      let availableVisits;
      if (workingHours && visits) {
        availableVisits = visitHelper.getAvailableVisitsForDate(selectedDate, workingHours, visits);

      }

      return (
        <Grid item xs={12} className={classes.root}>
          <div>
            <Typography variant="h3">Visits</Typography>
            <Paper>
              <Grid container >
                <Grid item xs={12} className={classes.selectForm}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <InlineDatePicker
                      label="Visit Date"
                      value={selectedDate}
                      onChange={this.handleChangeDate}
                      onlyCalendar
                      disablePast
                      className={classes.datePicker}
                    />
                  </MuiPickersUtilsProvider>
                  {this.renderSelect()}
                </Grid>
                {
                  selectedDate && selectedDoctorId &&
                    <>
                      <Grid item xs={12}>
                        <Typography variant="h4">Doctor's visits</Typography>
                      </Grid>
                    </>
                }
                <Grid item xs={12}>
                {
                  availableVisits && visits &&
                    <AvailableVisits visits={availableVisits} onClick={this.handleVisitClick} />
                }
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      );
    }
  }

  const mapStateToProps = state => {
    const { authentication, doctors, users } = state;
    return {
      authUser: authentication.user.user,
      doctors: doctors.doctors,
      workingHours: doctors.workingHours,
      visits: users.visits
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getDoctors: () => dispatch(doctorsActions.getDoctors()),
      getDoctorWorkingHours: (doctorId) => dispatch(doctorsActions.getDoctorWorkingHours(doctorId)),
      getDoctorVisits: (doctorId) => dispatch(userActions.getUserVisits(doctorId)),
      addVisit: (patientId, doctorId, visit) => dispatch(patientActions.addVisit(patientId, doctorId, visit)),
    }
  }

  const connectedVisitPage = connect(mapStateToProps, mapDispatchToProps)(VisitPage);
  const connectedStyledVisitPage = withStyles(styles)(connectedVisitPage);
  export { connectedStyledVisitPage as VisitPage };
