import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";

const BasicUserInfo = (props) => {
  const { user } = {...props};
  const { address } = user;

  return (
    // Need to be refactored
    <Grid container>
      <Grid item sm={4} xs={6}>
        <Typography>Email</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{user.email}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>Phone number</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{user.phone}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      {
        user.userType !== 'doctor' &&
        <>
            <Grid item sm={4} xs={6}>
              <Typography>Pesel</Typography>
            </Grid>
            <Grid item sm={8} xs={6} >
              <Typography>{user.pesel}</Typography>
            </Grid>
            <Grid item sm={12}>
              <Divider light />
            </Grid>
        </>
      }
      <Grid item sm={4} xs={6}>
        <Typography>Voivodeship</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{address.voivodeship}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>City</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{address.city}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>Street</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{address.street}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>Number</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{address.number}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>Zip code</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{address.zipCode}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Divider light />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  const { user } = state.users;
  return {
    user,
  }
}

const connectedBasicUserInfo = connect(mapStateToProps)(BasicUserInfo);

export { connectedBasicUserInfo as BasicUserInfo };