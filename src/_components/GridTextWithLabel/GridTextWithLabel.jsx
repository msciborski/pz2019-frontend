import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

const GridTextWithLabel = props => {
  const { label, text } = props;
  let { smSize, xsSize } = props;

  if (smSize > 12) {
    smSize = 12;
  }

  if (xsSize > 12) {
    xsSize = 12;
  }

  const smTextSize = (12 - smSize) === 0 ? 12 : 12 - smSize;
  const xsTextSize = (12 - xsSize) === 0 ? 12 : 12 - xsSize;

  return (
    <>
      <Grid item sm={smSize} xs={xsSize}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item sm={smTextSize} xs={xsTextSize}>
        <Typography>{text}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider light />
      </Grid>
    </>
  )
}

export { GridTextWithLabel };