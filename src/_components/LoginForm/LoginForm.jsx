import React from "react";
import { Paper, Typography, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { InputWithLabel } from "../InputWithLabel";

const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
  }
}
const LoginForm = (props) => {

  const { handleChange, handleSubmit, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        Sign In
    </Typography>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          margin="normal"
          isRequired={true}
          label="Email Address"
          name="email"
          handleChange={handleChange}
          autoComplete="email address"
          isFullWidth={true}
          hasAutoFocus={true}
        />
        <InputWithLabel
          margin="normal"
          isRequired={true}
          label="Password"
          name="password"
          handleChange={handleChange}
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
      </form>
    </Paper>
  );
}

const styledLoginForm = withStyles(styles)(LoginForm);
export { styledLoginForm as LoginForm };
