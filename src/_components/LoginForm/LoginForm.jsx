import React from "react";
import { Paper, Typography, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="password" id="password" name="password" autoComplete="current-password" onChange={handleChange} />
        </FormControl>
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
