import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";

class RandomPage extends Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
  }
  handleRatingClick = (value) => {
    console.log('Value:', value);
    this.setState({ value })
  }
  render() {
    const { value } = this.state;
    return (
      <Grid item xs={12}>
      </Grid>
    )
  }
}

export { RandomPage };



