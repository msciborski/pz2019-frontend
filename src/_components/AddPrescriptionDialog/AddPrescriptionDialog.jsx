import React from "react";
import { Component } from "react";
import { doctorsActions } from "../../_actions";
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent, Button, Slide } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import { InputWithLabel } from "../InputWithLabel";
import { connect } from "react-redux";

const Transition = props => (<Slide direction="up" {...props} />);

class AddPrescriptionDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: '',
      drug: '',
      dosage: '',
      remission: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { patientId, drug, dosage, remission } = this.state;
    const { authUser, addPrescription, handleClose } = this.props;

    addPrescription(patientId, drug, dosage, remission, authUser.id);
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;
    const { patientId, drug, dosage, remission } = this.state;

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="add-prescription"
        aria-describedby="add-prescription-description"
      >
        <ValidatorForm onSubmit={this.handleSubmit}>
          <DialogTitle id="add-prescription-title">
            {"Add prescription"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {"Add prescription"}
            </DialogContentText>
            <InputWithLabel
              label="Patient ID"
              onChange={this.handleChange}
              value={patientId}
              name="patientId"
              margin="normal"
              autoComplete="Patient ID"
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Drug"
              onChange={this.handleChange}
              value={drug}
              name="drug"
              margin="normal"
              autoComplete="Drug"
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Dosage"
              onChange={this.handleChange}
              value={dosage}
              name="dosage"
              margin="normal"
              autoComplete="Dosage"
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Remission"
              onChange={this.handleChange}
              value={remission}
              name="remission"
              margin="normal"
              autoComplete="Remission"
              isFullWidth={true}
              type="text"
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
              Add prescription
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
      //todo
    changePassword: (userId, drug, dosage, remission) => dispatch(doctorsActions.addPrescription(prescription)),
  };
}

const connectedAddPrescriptionDialog = connect(mapStateToProps, mapDispatchToProps)(AddPrescriptionDialog);

export { connectedAddPrescriptionDialog as AddPrescriptionDialog };