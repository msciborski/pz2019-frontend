import React from "react";
import { Component } from "react";
import { userActions } from "../../_actions";

class ChangePasswordDialog extends Component {
    constructor (props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
        }
    }
}

handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name]: value,
    });
  }
handleSubmit = () => {
    const { oldPassword, newPassword } = this.state;
    const { userId, changePassword } = this.props;

    changePassword(oldPassword, newPassword, userId);
}

const mapStateToProps = state => {
    const { authentication } = state;
    return {
      userId: authentication.user.id,
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        changePassword: (oldPassword, newPassword, userId) => dispatch(userActions.changePassword(oldPassword, newPassword, userId)),        
    };
  }