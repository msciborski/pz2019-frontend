import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

export const MedicalInformation = (props) => {
  const { medicalInformation } = props;

  return (
    <Grid container>
    <Grid item xs={1}>
      <Typography>Blood type</Typography>
    </Grid>
    <Grid item xs={11}>
      <Typography>{medicalInformation.bloodType}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Divider light />
    </Grid>
    <Grid item xs={1}>
      <Typography>Height</Typography>
    </Grid>
    <Grid item xs={11}>
      <Typography>{medicalInformation.height}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Divider light />
    </Grid>
    <Grid item xs={1}>
      <Typography>Weight</Typography>
    </Grid>
    <Grid item xs={11}>
      <Typography>{medicalInformation.weight}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Divider light />
    </Grid>
  </Grid>
  )
}