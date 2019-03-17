import React from "react";
import { Component } from "react";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { Typography, Button, Grid, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/styles";
import { BasicUserInfo } from "../_components/BasicUserInfo";
import LocalHospital from "@material-ui/icons/LocalHospital";
const styles = {
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
    width: 200,
    height: 200,
    fontSize: '5.25rem',
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
  componentDidMount() {
    const { getUser, id } = this.props;
    getUser(id);

  }
  render() {
    const { user, classes } = this.props;
    console.log(user);
    // const isDoctor = user.type === 'doctor';

    return (
      <Grid item xs={12}>
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
                            <Button className={classes.editButton} color="primary">Edit</Button>
                          </div>
                      }
                    </Grid>
                    <Grid item xs>
                      <BasicUserInfo user={user} />
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
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
                        <Button className={classes.editButton} color="primary">Edit</Button>
                      </div>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
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

