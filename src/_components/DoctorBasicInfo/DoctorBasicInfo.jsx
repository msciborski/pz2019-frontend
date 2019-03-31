import React from "react";
import { connect } from "react-redux";
import { Grid, Typography, Divider } from "@material-ui/core";
import { GridTextWithLabel } from "../GridTextWithLabel";

const DoctorBasicInfo = (props) => {
  const { user } = props;

  return (
    <Grid container>
      <GridTextWithLabel
        label="Email"
        text={user.email}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Specializations"
        text={user.specializations.join(',')}
        smSize={4}
        xsSize={6}
      />
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
