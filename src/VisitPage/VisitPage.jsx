import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Grid, Paper, Typography, FormControl, InputLabel, Select } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import { doctorsActions } from "../_actions";

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
      selectedDate: null,
      selectedDoctor: null,
    };
  }

  componentDidMount() {
    const { selectedDate, selectedDoctor} = this.state;
    const { getDoctors } = this.props;
    getDoctors();

    if(selectedDate && selectedDoctor) {
      
    }
  }

  handleChangeDate = date => {
    console.log("Date", date);
  };

  renderSelect = () => {
    const { doctors, classes } = this.props;
    const { selectedDoctor } = this.state;
    return (
      doctors &&
      <FormControl className={classes.doctorSelect}>
        <InputLabel htmlFor="doctor-select">Doctor</InputLabel>
        <Select
          value={selectedDoctor}
          inputProps={{ name: 'selectedDoctor', id: 'doctor-select' }}
        >
          {doctors.map(doctor => <option value={doctor.id}>{`${doctor.name} ${doctor.surname}`}</option>)}
        </Select>
      </FormControl>
    )
  }
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
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
                    value={selectedDate && new Date()}
                    onChange={this.handleChangeDate}
                    onlyCalendar
                    disablePast
                    className={classes.datePicker}
                  />
                </MuiPickersUtilsProvider>
                {this.renderSelect()}
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { authentication, doctors } = state;
  const { user } = authentication;
  return {
    authUser: user,
    doctors: doctors.doctors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDoctors: () => dispatch(doctorsActions.getDoctors()),
  }
}

const connectedVisitPage = connect(mapStateToProps, mapDispatchToProps)(VisitPage);
const connectedStyledVisitPage = withStyles(styles)(connectedVisitPage);
export { connectedStyledVisitPage as VisitPage };
