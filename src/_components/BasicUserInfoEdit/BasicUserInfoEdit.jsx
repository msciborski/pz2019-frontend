import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { InputWithLabel } from "../InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";


const Transition = props => (<Slide direction="up" {...props} />);

class BasicUserInfoEdit extends Component {
  constructor(props) {
    super(props);
    const { user, open } = this.props;

    this.state = {
      ...user,
    }
  }

  handleEditChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.props,
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.setState({ open: false });
  }

  render() {
    const { user, open, handleClose } = this.props;
    const { address } = user;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="edit-basic-info"
        aria-describedby="edit-basic-info-description"
      >
        <DialogTitle id="edit-basic-info-title">
          {"Edit"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Update user: ${user.name} ${user.surname}`}
          </DialogContentText>
          <ValidatorForm onSubmit={this.handleSubmit}>
            <InputWithLabel
              label="Voivodeship"
              onChange={this.handleEditChange}
              value={address.voivodeship}
              name="voivodeship"
              validators={['required']}
              margin="normal"
              autoComplete="voivodeship"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Street"
              onChange={this.handleEditChange}
              value={address.street}
              name="street"
              validators={['required']}
              margin="normal"
              autoComplete="street"
              isFullWidth={true}
            />
            <InputWithLabel
              label="City"
              onChange={this.handleEditChange}
              value={address.city}
              name="city"
              validators={['required']}
              margin="normal"
              autoComplete="city"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Number"
              onChange={this.handleEditChange}
              value={address.number}
              name="number"
              validators={['required']}
              margin="normal"
              autoComplete="number"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Zip Code"
              onChange={this.handleEditChange}
              value={address.zipCode}
              name="zipCode"
              validators={['required']}
              margin="normal"
              autoComplete="zipCode"
              isFullWidth={true}
            />
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
            </Button>
          <Button color="primary">
            Subscribe
            </Button>
        </DialogActions>
      </Dialog>
    )
  }


}

const mapStateToProps = state => {
  const { user } = state.users;
  return {
    user,
  };
}

const connectedBasicUserInfoEdit = connect(mapStateToProps)(BasicUserInfoEdit);
export { connectedBasicUserInfoEdit as BasicUserInfoEdit };