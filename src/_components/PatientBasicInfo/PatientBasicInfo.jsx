import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { GridTextWithLabel } from "../GridTextWithLabel";

const PatientBasicInfo = (props) => {
  const { user } = props;
  const { address } = user;

  return (
    <Grid container>
      <GridTextWithLabel
        label="Email"
        text={user.email}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Phone number"
        text={user.phoone}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Pesel"
        text={user.pesel}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Voivodeship"
        text={address.voivodeship}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Voivodeship"
        text={address.voivodeship}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="City"
        text={address.city}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Street"
        text={address.street}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Number"
        text={address.number}
        smSize={4}
        xsSize={6}
      />
      <GridTextWithLabel
        label="Zip code"
        text={address.zipCode}
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
  }
};

const connectedPatientBasicInfo = connect(mapStateToProps)(PatientBasicInfo);
export { connectedPatientBasicInfo as PatientBasicInfo };