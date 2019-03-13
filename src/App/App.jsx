import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { NavBar } from "../NavBar/NavBar";

const styles = {
  root: {
    dispaly: 'flex',
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;



    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styledConnectedApp = withStyles(styles)(App);
export { styledConnectedApp as App };



