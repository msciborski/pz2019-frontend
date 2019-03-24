import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { InputWithLabel } from "../InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";
import { patientActions } from "../../_actions";

const Transition = props => (<Slide direction="up" {...props} />);

class BasicDoctorInfoEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleEditChange = event => {
    const { name, value } = event.target;
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { open, handleClose, user } = this.props;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
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
    updatePatient: updatedPatient => dispatch(patientActions.updatePatient(updatedPatient)),
  };
}

const connectedBasicUserInfoEdit = connect(mapStateToProps, mapDispatchToProps)(BasicDoctorInfoEdit);
export { connectedBasicUserInfoEdit as BasicDoctorInfoEdit };