import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { InputWithLabel } from "../InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";
import { userActions} from "../../_actions";

const Transition = props => (<Slide direction="up" {...props} />);

class BasicPatientInfoEdit extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      userToUpdate: {
        voivodeship: user.address.voivodeship,
        city: user.address.city,
        street: user.address.street,
        number: user.address.number,
        zipCode: user.address.zipCode,
        phone: user.phone,
      },
    }
  }

  handleEditChange = event => {
    const { name, value } = event.target;
    const { userToUpdate } = this.state;

    this.setState({
      userToUpdate: {
        ...userToUpdate,
        [name]: value,
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { updateUser, user, handleClose } = this.props;
    const { userToUpdate } = this.state;

    updateUser({
      ...user,
      address: {
        voivodeship: userToUpdate.voivodeship,
        city: userToUpdate.city,
        street: userToUpdate.street,
        number: userToUpdate.number,
        zipCode: userToUpdate.zipCode
      },
      phone: userToUpdate.phone,
    });
    handleClose();
  }

  render() {
    const { open, handleClose, user } = this.props;
    const { userToUpdate } = this.state;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="edit-basic-info"
        aria-describedby="edit-basic-info-description"
      >
        <ValidatorForm onSubmit={this.handleSubmit}>
          <DialogTitle id="edit-basic-info-title">
            {"Edit"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Update user: ${user.name} ${user.surname}`}
            </DialogContentText>
            <InputWithLabel
              label="Voivodeship"
              onChange={this.handleEditChange}
              value={userToUpdate.voivodeship}
              name="voivodeship"
              margin="normal"
              autoComplete="voivodeship"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Street"
              onChange={this.handleEditChange}
              value={userToUpdate.street}
              name="street"
              margin="normal"
              autoComplete="street"
              isFullWidth={true}
            />
            <InputWithLabel
              label="City"
              onChange={this.handleEditChange}
              value={userToUpdate.city}
              name="city"
              margin="normal"
              autoComplete="city"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Number"
              onChange={this.handleEditChange}
              value={userToUpdate.number}
              name="number"
              margin="normal"
              autoComplete="number"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Zip Code"
              onChange={this.handleEditChange}
              value={userToUpdate.zipCode}
              name="zipCode"
              margin="normal"
              autoComplete="zipCode"
              isFullWidth={true}
            />
            <InputWithLabel
              label="Phone"
              onChange={this.handleEditChange}
              value={userToUpdate.phone}
              name="phone"
              margin="normal"
              autoComplete="phone"
              isFullWidth={true}
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
              Save
          </Button>
          </DialogActions>
        </ValidatorForm>
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

const mapDispatchToProps = dispatch => {
  return {
    updateUser: updateUser => dispatch(userActions.updateUser(updateUser)),
  };
}

const connectedBasicUserInfoEdit = connect(mapStateToProps, mapDispatchToProps)(BasicPatientInfoEdit);
export { connectedBasicUserInfoEdit as BasicPatientInfoEdit };