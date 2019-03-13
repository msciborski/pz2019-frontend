import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { userActions } from "../_actions";
import { LoginForm } from "../components/LoginForm";
import { withStyles } from "@material-ui/styles";

const styles = {
  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '85vh',
    alignItems: 'center',
  },
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit pressed');
    const { login } = this.props;

    this.setState({ submitted: true });
    const { email, password } = this.state;
    console.log(`${email} ${password}`);

    if (email && password) {
      login(email, password);
    }
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Grid item xs={12} className={classes.loginForm}>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </Grid>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(userActions.login(username, password)),
  };
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
};

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
const styledConnectedLoginPage = withStyles(styles)(connectedLoginPage);
export { styledConnectedLoginPage as LoginPage };

