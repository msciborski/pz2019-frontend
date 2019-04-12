import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { NavBar } from "../_components/NavBar";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { RandomPage } from "../RandomPage";
import { Route, Switch } from "react-router-dom";
import { ProfilePage } from "../ProfilePage";
import { ResetPasswordPage } from "../ResetPasswordPage";
import { withStyles } from "@material-ui/styles";
import { Alert } from "../_components/Alert";
import { alertActions } from "../_actions";
import { AccountActivationPage } from "../AccountActivationPage";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { Snackbar } from "@material-ui/core";
import { Menu } from "../_components/Menu";
import { DoctorListPage } from "../DoctorListPage";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { ResetPasswordRequestPage } from "../ResetPasswordRequestPage/ResetPasswordRequestPage";
import { ChatBotWidget } from "../_components/ChatBot";

const styles = {
  root: {
    justifyContent: 'center',
  },
}


const theme = createMuiTheme();

class App extends Component {
  constructor(props) {
    super(props);

    const { clear } = this.props;
    history.listen((location, action) => {
      clear();
    });

    this.state = {
      alertOpen: false,
      menuOpen: false,
    };

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.alert.type) {
      this.setState({ alertOpen: true });
    }
  }

  handleAlertClose = () => this.setState(prevState => ({ alertOpen: !prevState.alertOpen }));
  toggleMenu = () => this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));

  render() {
    const { classes, alert } = { ...this.props };
    const { type, message } = { ...alert };
    let { alertOpen, menuOpen } = this.state;


    return (
      <ThemeProvider theme={theme}>
        <div>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <NavBar toggleMenu={this.toggleMenu} />
            </Grid>
            <Switch>
              <Route exact path="/" component={RandomPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/profile/:id" component={ProfilePage} />
              <Route path="/doctors" component={DoctorListPage} />
              <Route path="/resetPasword/request" component={ResetPasswordRequestPage} />
              <Route path="/resetPassword" component={ResetPasswordPage}/>
              <Route path="/activateUser" component={AccountActivationPage} />
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
                variant={type}
                onClose={this.handleAlertClose}
                message={message}
              />
            </Snackbar>
          }
          <Menu open={menuOpen} toggleDrawer={this.toggleMenu} />
          <ChatBotWidget/>
        </div>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const { alert } = state;
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