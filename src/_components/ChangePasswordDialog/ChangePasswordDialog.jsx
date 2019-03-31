import React from "react";
import { Component } from "react";
import { userActions } from "../../_actions";
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent, Button, Slide } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import { InputWithLabel } from "../InputWithLabel";
import { connect } from "react-redux";

const Transition = props => (<Slide direction="up" {...props} />);

class ChangePasswordDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
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
    const { authUser, changePassword, handleClose } = this.props;

    changePassword(oldPassword, newPassword, authUser.id);
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;
    const { oldPassword, newPassword } = this.state;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="change-password"
        aria-describedby="change-password-description"
      >
        <ValidatorForm onSubmit={this.handleSubmit}>
          <DialogTitle id="edit-basic-info-title">
            {"Edit"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {"Change password"}
            </DialogContentText>
            <InputWithLabel
              label="Old password"
              onChange={this.handleChange}
              value={oldPassword}
              name="oldPassword"
              margin="normal"
              autoComplete="Old password"
              isFullWidth={true}
              type="password"
            />
            <InputWithLabel
              label="New password"
              onChange={this.handleChange}
              value={newPassword}
              name="newPassword"
              margin="normal"
              autoComplete="New password"
              isFullWidth={true}
              type="password"
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Cancel
                </Button>
            <Button
              color="primary"
              type="submit"
            >
              Change Password
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    )
  }
}


const mapStateToProps = state => {
  const { authentication } = state;
  return {
    authUser: authentication.user.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changePassword: (oldPassword, newPassword, userId) => dispatch(userActions.changePassword(oldPassword, newPassword, userId)),
  };
}

const connectedChangePasswordDialog = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordDialog);

export { connectedChangePasswordDialog as ChangePasswordDialog };