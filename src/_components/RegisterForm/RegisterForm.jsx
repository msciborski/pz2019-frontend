import React from "react";
import { Paper, Typography, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { InputWithLabel } from "../InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator"
const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
    width: '40%',
  }
}

const RegisterForm = (props) => {
  const { handleChange, handleSubmit, isDoctor, user, classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        Register
      </Typography>
      <ValidatorForm onSubmit={handleSubmit}>
        <InputWithLabel
          label="Email Address"
          onChange={handleChange}
          value={user.email}
          name="email"
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
          margin="normal"
          autoComplete="email address"
          hasAutoFocus={true}
          isFullWidth={true}
        />
        <InputWithLabel
          label="Name"
          onChange={handleChange}
          value={user.name}
          name="name"
          validators={['required', 'matchRegexp:^[A-Za-z]+$']}
          errorMessages={['This field is required', 'Name is not valid']}
          margin="normal"
          autoComplete="name"
          isFullWidth={true}
        />
        <InputWithLabel
          label="Surname"
          onChange={handleChange}
          value={user.surname}
          name="surname"
          validators={['required', 'matchRegexp:^[A-Za-z]+$']}
          errorMessages={['This field is required', 'Surname is not valid']}
          margin="normal"
          autoComplete="surname"
          isFullWidth={true}
        />
        <InputWithLabel
          label="Pesel"
          onChange={handleChange}
          value={user.pesel}
          name="pesel"
          validators={['required']}
          errorMessages={['This field is required']}
          margin="normal"
          autoComplete="pesel"
          isFullWidth={true}
        />
        <InputWithLabel
          label="Password"
          onChange={handleChange}
          value={user.password}
          name="password"
          validators={['required']}
          errorMessages={['This field is required']}
          margin="normal"
          autoComplete="current-password"
          type="password"
          isFullWidth={true}
        />
        <InputWithLabel
          label="Password Confirmation"
          onChange={handleChange}
          value={user.passwordConfirmation}
          name="passwordConfirmation"
          validators={['required']}
          errorMessages={['This field is required']}
          margin="normal"
          autoComplete="current-password"
          type="password"
          isFullWidth={true}
        />

        {
          isDoctor &&
          <InputWithLabel
            label="Doctor Token"
            onChange={handleChange}
            value={user.doctorToken}
            name="doctorToken"
            validators={['required']}
            errorMessages={['This field is required']}
            margin="normal"
            autoComplete="token"
            isFullWidth={true}
          />
        }

        <FormControlLabel
          control={
            <Checkbox
              checked={isDoctor}
              onChange={handleChange}
              name="isDoctor"
            />
          }
          label="Are you a doctor?"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Register
      </Button>
      </ValidatorForm>
    </Paper>
  )

}
const styledRegisterForm = withStyles(styles)(RegisterForm);
export { styledRegisterForm as RegisterForm };