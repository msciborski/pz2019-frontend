import React from "react";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { RegisterForm } from "../_components/RegisterForm";
import { Grid } from "@material-ui/core";
import { userActions } from "../_actions";

const styles = {
  registerForm: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '85vh',
    padding: '20px 0 0 20px',
    alignItems: 'center',
  },
}

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoctor: false,
      user: {
        email: '',
        name: '',
        surname: '',
        pesel: '',
        password: '',
        confirmationPassword: '',
        doctorToken: '',
      },
      submitted: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;

    if ( name === 'isDoctor') {
      this.setState({ isDoctor: event.target.checked });
    } else {
      this.setState({
        user: {
          ...user,
          [name]: value,
        }
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user, isDoctor } = this.state;
    const { register } = this.props;

    register({
      userType: isDoctor ? 'doctor' : 'patient',
      ...user,
    });

  }

  render() {
    const { classes } = this.props;
    const { isDoctor, user } = this.state;

    return (
      <Grid item xs={12} className={classes.registerForm}>
        <RegisterForm user={user} isDoctor={isDoctor} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { registering } = state.registration;
  return {
    registering,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(userActions.register(user)),
  };
}

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
const styledConnectedRegisterPage = withStyles(styles)(connectedRegisterPage);
export { styledConnectedRegisterPage as RegisterPage };