import React, { Component } from "react";
import { Button, FormControl } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { patientActions } from "../../_actions";

const styles = theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    addButton: {
      margin: '20px 0 20px 0 !important',
      width: '20%',
    },
    dropzone: {
      border: '1px solid red',
    }
  }
};

class UploadDocumentationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  handleChange = (files) => {
    this.setState({ files: files });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user, authUser, addDocumentation } = this.props;
    const { files } = this.state;

    addDocumentation(files, user.id, authUser.id);
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.root}>
        <DropzoneArea
          onChange={this.handleChange}
          className={classes.dropzone}
          acceptedFiles={['image/*, application/pdf']}
        />
        <Button color="primary" type="submit" className={classes.addButton} onClick={this.handleSubmit}>Add documentation</Button>
      </FormControl>
    )
  }
}

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = state.users;

  return {
    user,
    authUser: authentication.user.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDocumentation: (files, patientId, doctorId) => dispatch(patientActions.addPatientDocumentation(files, patientId, doctorId)),
  }
}

const connectedUploadDocumentationSection = connect(mapStateToProps, mapDispatchToProps)(UploadDocumentationSection);
const styledConnectedUploadDocumentationSection = withStyles(styles)(connectedUploadDocumentationSection);

export { styledConnectedUploadDocumentationSection as UploadDocumentationSection };