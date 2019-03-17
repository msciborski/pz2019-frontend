import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { NavBar } from "../_components/NavBar";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { RandomPage } from "../RandomPage";
import { Route, Switch } from "react-router-dom";
import { ProfilePage } from "../ProfilePage";
import { withStyles } from "@material-ui/styles";
import { Alert } from "../_components/Alert";
import { alertActions } from "../_actions";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { Snackbar } from "@material-ui/core";

const styles = {
  root: {
    justifyContent: 'center',
  },
}
class App extends Component {
  constructor(props) {
    super(props);

    const { clear } = this.props;
    history.listen((location, action) => {
      clear();
    });

    this.state = {
      alertOpen: false,
    };

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.alert.type) {
      this.setState({ alertOpen: true });
    }
  }

  handleAlertClose = () => this.setState(prevState => ({alertOpen: !prevState.alertOpen}));

  render() {
    const { classes, alert } = {...this.props};
    const { type, message } = {...alert};
    let { alertOpen } = this.state;

    console.log('Render type:', type);
    console.log('AlertOpen:', alertOpen);

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Switch>
            <Route exact path="/" component={RandomPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </Grid>
        {
          type &&
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={alertOpen}
            autoHideDuration={6000}
            onClose={this.handleAlertClose}
          >
            <Alert
              variant={alert.type}
              onClose={this.handleAlertClose}
              message={alert.message}
            />
          </Snackbar>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Map', state);
  const { alert } = state;
  console.log('Map:', alert);
  return {
    alert,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(alertActions.clear()),
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
const styledConnectedApp = withStyles(styles)(connectedApp);
export { styledConnectedApp as App };