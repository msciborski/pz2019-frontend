import React, { Component } from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import { InputWithLabel } from "../_components/InputWithLabel";
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

class ResetPasswordRequestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email } = this.state;
    const { resetPasswordRequest } = this.props;

    if (email !== '') {
      resetPasswordRequest(email);
    }
  }

  render() {
    const { classes } = this.props;
    const { email } = this.props;
    return (
      <Grid item xs={12} className={classes.resetForm}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Forgot password:
        </Typography>
        <ValidatorForm onSubmit={this.handleSubmit} className={classes.form}  >
          <InputWithLabel
            label="Email Address"
            onChange={this.handleChange}
            value={email}
            name="email"
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
            Forgot Password
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
    resetPasswordRequest: (email) => dispatch(userActions.resetPasswordRequest(email)),
  };
}

const connectedResetPasswordRequestPage = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordRequestPage);
const styledConnectedResetPasswordRequestPage = withStyles(styles)(connectedResetPasswordRequestPage);

export { styledConnectedResetPasswordRequestPage as ResetPasswordRequestPage };