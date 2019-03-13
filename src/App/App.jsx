import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { NavBar } from "../components/NavBar";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { RandomPage } from "../RandomPage";
import { Route, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Grid container >
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Switch>
          <Route exact path="/" component={RandomPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Grid>
    )
  }
}

export { App };