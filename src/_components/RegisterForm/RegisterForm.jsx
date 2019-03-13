import React from "react";
import { Paper, Typography, FormControl, InputLabel, Input, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" name="name" autoComplete="name" onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="surname">Surname</InputLabel>
          <Input id="surname" name="surname" autoComplete="surname" onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="pesel">Pesel</InputLabel>
          <Input id="pesel" name="pesel" autoComplete="pesel" onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" name="password" autoComplete="current-password" onChange={handleChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="passwordConfirmation">Password Confirmation</InputLabel>
          <Input id="passwordConfirmation" name="passwordConfirmation" autoComplete="current-password" onChange={handleChange} />
        </FormControl>
        {
          isDoctor &&
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="doctorToken">Doctor Token</InputLabel>
            <Input id="doctorToken" name="doctorToken" onChange={handleChange} />
          </FormControl>
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