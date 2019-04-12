import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Grid, Paper, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

const styles = {
  root: {
    maxWidth: "1500px !important",
    margin: "20px 0 20px 0 !important"
  }
};

class VisitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null
    };
  }

  handleChangeDate = date => {
    console.log("Date", date);
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <Grid item xs={12} className={classes.root}>
        <div>
          <Typography variant="h3">Visits</Typography>
          <Paper>
            <Typography variant="h4">Choose date:</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <InlineDatePicker
                label="Visit Date"
                value={selectedDate && new Date()}
                onChange={this.handleChangeDate}
                onlyCalendar
                disablePast
              />
            </MuiPickersUtilsProvider>
          </Paper>
        </div>
      </Grid>
    );
  }
}

const styledVisitPage = withStyles(styles)(VisitPage);
export { styledVisitPage as VisitPage };
