import React, { Component } from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import { InputWithLabel } from "../_components/InputWithLabel";
import { ValidatorForm } from "react-material-ui-form-validator";
import { doctorsActions } from "../_actions";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import queryString from "querystring";

const styles = {
  paper: {
    padding: '10px 10px 10px 10px',
    width: '50%',
    minWidth: '250px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '85vh',
    alignItems: 'center',
  },
}

class AddPrescriptionPage extends Component {
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
  
      addPrescription(patientId, authUser.id,{
          patient: {
              additionalRights: true,
              nfzBranch: "05",
          },
          prescriptionData: [
              {
                  drug: "Trexan 10mg",
                  dosage: "1 raz na dobę 1 tabl. przez 3 m-ce",
                  remission: "B"
              },
              {
                  drug: "Mercaptopurinum 50mg",
                  dosage: "2 razy na dobę 1 tabl. przez 3 m-ce",
                  remission: "B"
              }
          ],
          "realizationDateFromToday": true
      });
      handleClose();
    }

  render() {
    const { open, handleClose } = this.props;
    const { patientId, drug, dosage, remission } = this.state;
    return (
        <Grid item xs={12} className={styles.form}>
        <Paper className={styles.paper}>
          <Typography component="h1" variant="h5" align="center">
            Add prescription:
          </Typography>
          <ValidatorForm onSubmit={this.handleSubmit} className={styles.form}  >
            <InputWithLabel
              label="Patient ID"
              onChange={this.handleChange}
              value={patientId}
              name="patientId"
              validators={['required']}
              errorMessages={['This field is required', 'text is not valid']}
              margin="normal"
              autoComplete="Patient ID"
              hasAutoFocus={true}
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Drug"
              onChange={this.handleChange}
              value={drug}
              name="drug"
              validators={['required']}
              errorMessages={['This field is required', 'text is not valid']}
              margin="normal"
              autoComplete="Drug"
              hasAutoFocus={true}
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Dosage"
              onChange={this.handleChange}
              value={dosage}
              name="dosage"
              validators={['required']}
              errorMessages={['This field is required', 'text is not valid']}
              margin="normal"
              autoComplete="text"
              hasAutoFocus={true}
              isFullWidth={true}
              type="text"
            />
            <InputWithLabel
              label="Remission"
              onChange={this.handleChange}
              value={remission}
              name="remission"
              validators={['required']}
              errorMessages={['This field is required', 'text is not valid']}
              margin="normal"
              autoComplete="remission"
              hasAutoFocus={true}
              isFullWidth={true}
              type="text"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
          </Button>
          </ValidatorForm>
        </Paper>
        </Grid>
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
      addPrescription: (doctorId, patientId, prescription) => dispatch(doctorsActions.addPrescription(doctorId, patientId, prescription)),
    };
  }
  
  const connectedAddPrescriptionPage = connect(mapStateToProps, mapDispatchToProps)(AddPrescriptionPage);
  
  export { connectedAddPrescriptionPage as AddPrescriptionPage };