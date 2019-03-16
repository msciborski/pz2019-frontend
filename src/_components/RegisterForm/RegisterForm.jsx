import React from "react";
import { Paper, Typography, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { InputWithLabel } from "../InputWithLabel";

const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
    width: '40%',
  }
}

const RegisterForm = (props) => {
  const { handleChange, handleSubmit, isDoctor, classes} = props;
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Email Address"
          name="email"
          autoComplete="email"
          hasAutoFocus={true}
          onChange={handleChange}
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Name"
          name="name"
          autoComplete="name"
          onChange={handleChange}
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Surname"
          name="surname"
          autoComplete="surname"
          onChange={handleChange}
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Pesel"
          name="pesel"
          autoComplete="pesel"
          onChange={handleChange}
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Password"
          name="password"
          autoComplete="current-passsword"
          onChange={handleChange}
          type="password"
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          isFullWidth={true}
          label="Password Confirmation"
          name="passwordConfirmation"
          autoComplete="current-password"
          onChange={handleChange}
          type="password"
        />

        {
          isDoctor &&
            <InputWithLabel
              margin="normal"
              isRequired={true}
              isFullWidth={true}
              label="Doctor Token"
              name="doctorToken"
              autoComplete="current-password"
              onChange={handleChange}
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
      </form>
    </Paper>
  )

}
const styledRegisterForm = withStyles(styles)(RegisterForm);
export { styledRegisterForm as RegisterForm };