import React, { Component } from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import { InputWithLabel } from "../_components/InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";

const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
    width: '50%',
    minWidth: '250px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  resetForm: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '85vh',
    alignItems: 'center',
  },
}

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { newPassword } = this.state;
    const { resetPasswordRequest } = this.props;

    // if (newPassword !== '') {
    //   resetPassword(newPassword);
    // }
  }

  render() {
    const { classes } = this.props;
    const { newPassword } = this.props;
    return (
      <Grid item xs={12} className={classes.resetForm}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Forgot password:
        </Typography>
        <ValidatorForm onSubmit={this.handleSubmit} className={classes.form}  >
          <InputWithLabel
            label="New Password"
            onChange={this.handleChange}
            value={newPassword}
            name="newPassword"
            validators={['required', 'isEmail']}
            errorMessages={['This field is required', 'Email is not valid']}
            margin="normal"
            autoComplete="email address"
            hasAutoFocus={true}
            isFullWidth={true}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Reset Password
        </Button>
        </ValidatorForm>
      </Paper>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {};
}
const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (newPassword, resetPasswordToken) => dispatch(userActions.resetPassword(1, newPassword, resetPasswordToken)),
  };
}

const connectedResetPasswordPage = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
const styledConnectedResetPasswordPage = withStyles(styles)(connectedResetPasswordPage);

export { styledConnectedResetPasswordPage as ResetPasswordPage };