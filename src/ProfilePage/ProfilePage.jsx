import React from "react";
import { Component } from "react";
import { userActions, doctorsActions } from "../_actions";
import { connect } from "react-redux";
import { Typography, Button, Grid, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/styles";
import { PatientBasicInfo } from "../_components/PatientBasicInfo";
import LocalHospital from "@material-ui/icons/LocalHospital";
import { MedicalInformation } from "../_components/MedicalInformation";
import { BasicPatientInfoEdit } from "../_components/BasicPatientInfoEdit"
import { DoctorBasicInfo } from "../_components/DoctorBasicInfo";
import { BasicDoctorInfoEdit } from "../_components/BasicDoctorInfoEdit/BasicDoctorInfoEdit";
import { UploadDocumentationSection } from "../_components/UploadDocumentationSection";
import { ChangePasswordDialog } from "../_components/ChangePasswordDialog/ChangePasswordDialog";
import { DocumentationList } from "../_components/DocumentationList";

const styles = {
  root: {
    maxWidth: '1500px !important',
    margin: '20px 0 20px 0 !important',
  },
  documentationExpansion: {
    flexDirection: 'column',
  },
  paper: {
    margin: '20px 0 20px 0',
  },
  nameHeader: {
    margin: '20px 0 20px 0',
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '20px',
    width: '200px !important',
    height: '200px !important',
    fontSize: '5.25rem !important',
  },
  hospitalIcon: {
    width: '8rem !important',
    height: '8rem !important',
  },
  editButton: {
    width: '80%',
  },
}

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBasicOpen: false,
      editMedicalInformationOpen: false,
      changePasswordOpen: false,
    };
  }

  componentDidMount() {
    const { getUser, getSpecializations } = this.props;
    const { id } = this.props.match.params;
    getSpecializations();
    getUser(id);
  }

  handleEditChange = event => {
    const { name, value } = event.target;
    const { basicEditField } = this.props;
    this.setState({
      ...basicEditField,
      [name]: value,
    });
  }

  handleEditBasicOpen = () => this.setState({ editBasicOpen: true });
  handleEditBasicClose = () => this.setState({ editBasicOpen: false });


  handleEditMedicalInformationOpen = () => {
    this.setState({ editMedicalInformationOpen: true });
  }

  handleChangePasswordOpen = () => {
    this.setState({ changePasswordOpen: true });
  }
  handleChangePasswordClose = () => {
    this.setState({ changePasswordOpen: false });
  }

  render() {
    const { user, classes, authUser } = this.props;
    const { editBasicOpen, editMedicalInformationOpen, changePasswordOpen } = this.state;
    const { id } = this.props.match.params;


    const { userType, medicalInformation } = { ...user }

    return (
      <Grid item xs={12} className={classes.root}>
        {
          user &&
          <div>
            <div>
            <Typography variant="h3" className={classes.nameHeader}>{user.name} {user.surname}</Typography>
            </div>
            <Paper className={classes.paper}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Basic information</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container>
                    <Grid item lg={2} sm={6}>
                      {
                        user.avatarUrl ?
                          <div className={classes.avatarSection}>
                            <Avatar src={user.avatarUrl} className={classes.avatar} />
                            <Button color="primary" onClick={this.handleEditBasicOpen} className={classes.editButton}>Edit</Button>
                            {
                              authUser.id == id &&
                              <Button color="primary" onClick={this.handleChangePasswordOpen} className={classes.editButton}>Change Password</Button>
                            }
                          </div>
                          :
                          <div className={classes.avatarSection}>
                            <Avatar className={classes.avatar}>{user.name[0]}{user.surname[0]}</Avatar>
                            <Button className={classes.editButton} color="primary" onClick={this.handleEditBasicOpen}>Edit</Button>
                            {
                              authUser.id == id &&
                              <Button color="primary" onClick={this.handleChangePasswordOpen} className={classes.editButton}>Change Password</Button>
                            }
                          </div>
                      }
                    </Grid>
                    <Grid item lg={9} sm={6}>
                      {
                        user.userType === 'patient' ?
                          <PatientBasicInfo />
                          :
                          <DoctorBasicInfo />
                      }
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              {
                userType === 'patient' &&
                <>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Medical information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={2}>
                          <div className={classes.avatarSection}>
                            <Avatar className={classes.avatar}>
                              <LocalHospital className={classes.hospitalIcon} />
                            </Avatar>
                            {
                              authUser.userType === 'doctor' &&
                              <Button
                                className={classes.editButton}
                                color="primary"
                                open={editMedicalInformationOpen}
                                onClick={this.handleEditMedicalInformationOpen}
                              >
                                Edit
                              </Button>
                            }
                          </div>
                        </Grid>
                        <Grid item xs>
                          <MedicalInformation medicalInformation={medicalInformation} />
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Medical documentation</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.documentationExpansion}>
                      <UploadDocumentationSection />
                      <DocumentationList />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </>
              }
            </Paper>
            {
              user.userType === 'patient' ?
                <BasicPatientInfoEdit
                  open={editBasicOpen}
                  handleClose={this.handleEditBasicClose}
                />
                :
                <BasicDoctorInfoEdit
                  open={editBasicOpen}
                  handleClose={this.handleEditBasicClose}
                />
            }
            <ChangePasswordDialog
              open={changePasswordOpen}
              handleClose={this.handleChangePasswordClose}
            />
          </div>
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { authentication } = state;
  const { user } = state.users;
  return {
    user,
    authUser: authentication.user.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(userActions.getById(id)),
    getSpecializations: () => dispatch(doctorsActions.getSpecializations()),
  };
}

const connectedProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
const styledConnectedProfilePage = withStyles(styles)(connectedProfilePage);
export { styledConnectedProfilePage as ProfilePage }

