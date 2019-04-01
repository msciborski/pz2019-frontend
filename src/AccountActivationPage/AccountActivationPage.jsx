import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { userActions } from "../_actions";

class AccountActivationPage extends Component {
  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    const { token } = params;
    const { activateUser } = this.props;

    activateUser(token);
  }

  render() {
    const { userActivated } = this.props;
    return (
      userActivated &&
        <div>You have been activated.</div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return {
    userActivated: users.userActivated,
  };
}

const mapDispatchToProps = dispatch => {
  return{
    activateUser: (activateToken) => dispatch(userActions.activateUser(activateToken)),
  };
}

const connectAccountActivationPage = connect(mapStateToProps, mapDispatchToProps)(AccountActivationPage);
export { connectAccountActivationPage as AccountActivationPage };
