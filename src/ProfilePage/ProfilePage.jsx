import React from "react";
import { Component } from "react";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { Typography, Divider, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

class ProfilePage extends Component {
  componentDidMount() {
    const { getUser, id } = this.props;
    getUser(id);

  }
  render() {
    console.log(this.props);
    const { user } = this.props;
    console.log(user);
    return (
      <Grid item xs={12}>
      {
        user &&

        <div>
          <Typography variant="h2">{user.surname}, {user.name}</Typography>
          <Divider />
        </div>

      }
      </Grid>

    );
  }
}

const mapStateToProps = state => {
  const { authentication } = state;
  console.log(authentication);
  const { user } = state.users;
  return {
    user,
    id: authentication.user.user.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(userActions.getById(id)),
  };
}

const connectedProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage }

