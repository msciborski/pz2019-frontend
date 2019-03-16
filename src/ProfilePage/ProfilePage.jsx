import React from "react";
import { Component } from "react";
import { userActions } from "../_actions";
import { connect } from "react-redux";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUser, id } = this.props;
    getUser(id);
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = state.users;
  return {
    user,
    id: authentication.user.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(userActions.getById(id)),
  };
}

const connectedProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

