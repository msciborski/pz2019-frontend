import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { InputWithLabel } from "../InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";

const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
    width: '50%',
    minWidth: '250px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  }
}
const LoginForm = (props) => {

  const { handleChange, handleSubmit, email, password, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        Sign In
    </Typography>
      <ValidatorForm onSubmit={handleSubmit} className={classes.form}  >
        <InputWithLabel
          label="Email Address"
          onChange={handleChange}
          value={email}
          name="email"
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
          margin="normal"
          autoComplete="email address"
          hasAutoFocus={true}
          isFullWidth={true}
        />
        <InputWithLabel
          label="Password"
          onChange={handleChange}
          value={password}
          name="password"
          validators={['required']}
          errorMessages={['This field is required']}
          margin="normal"
          type="password"
          autoComplete="current-password"
          isFullWidth={true}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </ValidatorForm>
    </Paper>
  );
}

const styledLoginForm = withStyles(styles)(LoginForm);
export { styledLoginForm as LoginForm };
