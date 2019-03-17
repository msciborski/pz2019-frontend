import React from "react";
import { Component } from "react";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { Typography, Button, Grid, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/styles";
import { BasicUserInfo } from "../_components/BasicUserInfo";
import LocalHospital from "@material-ui/icons/LocalHospital";
import { MedicalInformation } from "../_components/MedicalInformation";

const styles = {
  root: {
    maxWidth: '1500px !important',
    margin: '20px 0 20px 0 !important',
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
    width: '8rem',
    height: '8rem',
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
    };
  }

  componentDidMount() {
    const { getUser, id } = this.props;
    getUser(id);

  }

  handleEditBasicClick = () => {
    this.setState({ editBasicOpen: true });
  }

  handleEditMedicalInformationOpen = () => {
    this.setState({ editMedicalInformationOpen: true });
  }

  render() {
    const { user, classes } = this.props;
    console.log('Profile user:')
    const { userType, medicalInformation } = {...user}
    console.log(user);
    // const isDoctor = user.userType === 'doctor';
      return (
        <Grid item xs={12} className={classes.root}>
          {
            user &&
            <div>
              <Typography variant="h3" className={classes.nameHeader}>{user.name} {user.surname}</Typography>
              <Paper className={classes.paper}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Basic information</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container>
                      <Grid item xs={2}>
                        {
                          user.avatarUrl ?
                            <div className={classes.avatarSection}>
                              <Avatar src={user.avatarUrl} className={classes.avatar} />
                              <Button color="primary" className={classes.editButton}>Edit</Button>
                            </div>
                            :
                            <div className={classes.avatarSection}>
                              <Avatar className={classes.avatar}>{user.name[0]}{user.surname[0]}</Avatar>
                              <Button className={classes.editButton} color="primary" onClick={this.handleEditBasicClick}>Edit</Button>
                            </div>
                        }
                      </Grid>
                      <Grid item xs>
                        <BasicUserInfo user={user} />
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                {
                  user.userType === 'patient' &&
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
                            <Button className={classes.editButton} color="primary" onClick={this.handleEditMedicalInformationOpen}>Edit</Button>
                          </div>
                        </Grid>
                        <Grid item xs>
                          <MedicalInformation medicalInformation={medicalInformation} />
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                }
              </Paper>
            </div>
          }
        </Grid>
      );
    }
}

const mapStateToProps = state => {
  const { authentication } = state;
  console.log(authentication);
  const { user } = state.users;
  return {
    user,
    id: authentication.user.user.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(userActions.getById(id)),
  };
}

const connectedProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
const styledConnectedProfilePage = withStyles(styles)(connectedProfilePage);
export { styledConnectedProfilePage as ProfilePage }

