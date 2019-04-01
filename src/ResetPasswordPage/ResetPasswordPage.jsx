import React, { Component } from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import { InputWithLabel } from "../_components/InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import queryString from "querystring";

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

    let params = queryString.parse(this.props.location.search);
    const { newPassword } = this.state;
    const { resetPassword } = this.props;


    if (newPassword !== '') {
       resetPassword(1, newPassword, params['?token']);
    }
  }

  render() {
    const { classes } = this.props;
    const { newPassword } = this.state;
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
            validators={['required']}
            errorMessages={['This field is required', 'Password is not valid']}
            margin="normal"
            autoComplete="Password"
            hasAutoFocus={true}
            isFullWidth={true}
            type="password"
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
    resetPassword: (userId = 1, newPassword, resetPasswordToken) => dispatch(userActions.resetPassword(userId, newPassword, resetPasswordToken)),
  };
}

const connectedResetPasswordPage = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
const styledConnectedResetPasswordPage = withStyles(styles)(connectedResetPasswordPage);

export { styledConnectedResetPasswordPage as ResetPasswordPage };