import React from "react";
import { connect } from "react-redux";
import { Grid, Typography, Divider } from "@material-ui/core";

const DoctorBasicInfo = (props) => {
  const { user } = props;

  return (
    <Grid container>
      <Grid item sm={4} xs={6}>
        <Typography>Email</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{user.email}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Typography>Specializations</Typography>
      </Grid>
      <Grid item sm={8} xs={6}>
        <Typography>{user.specializations.join(',')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  const { users } = state;
  return {
    user: users.user,
  };
}

const connectedDoctorBasicInfo = connect(mapStateToProps)(DoctorBasicInfo);
export { connectedDoctorBasicInfo as DoctorBasicInfo };
