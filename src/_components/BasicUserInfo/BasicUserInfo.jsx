import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";

const BasicUserInfo = (props) => {
  const { user } = {...props};
  return (
    // Need to be refactored
    <Grid container>
      <Grid item xs={1}>
        <Typography>Email</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>{user.email}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>Pesel</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>{user.pesel}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>Voivodeship</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>Wielkopolska</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>City</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>Poznań</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>Street</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>Poznańska</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>Number</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>4A/6</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item xs={1}>
        <Typography>Zip code</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography>00-000</Typography>
      </Grid>
      <Grid item xs={12}>
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