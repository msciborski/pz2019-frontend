import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, FormControl, Input, MenuItem, Chip } from "@material-ui/core";
import { doctorsActions } from "../../_actions";

const Transition = props => (<Slide direction="up" {...props} />);

const styles = {
  select: {
    minWidth: '250px',
    maxWidth: '550px',
  },
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

class BasicDoctorInfoEdit extends Component {
  constructor(props) {
    super(props);
    const { specializations } = { ...props.user };
    console.log('User specializations:', specializations);
    this.state = {
      specializations: !specializations ? [] : specializations.map(spec => spec.name),
    };
  }

  componentDidMount() {
    const { getSpecializations } = this.props;
    getSpecializations();
  }

  handleChange = event => {
    this.setState({ specializations: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { open, handleClose, user, specializations, classes } = this.props;
    console.log('State:', this.state.specializations);
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="edit-basic-info"
        aria-describedby="edit-basic-info-description"
        className={classes.root}
      >
        <FormControl onSubmit={handleClose.submit}>
          <DialogTitle id="edit-basic-info-title">
            {"Edit"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Update user: ${user.name} ${user.surname}`}
            </DialogContentText>
            {/* <Select
              multiple
              value={this.state.specializations}
              onChange={this.handleChange}
              name="specializations"
              input={<Input id="select-multiple" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    console.log('Value:', value),
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              fullWidth
              className={classes.select}
            >
              {specializations.map(spec => (console.log('spec', spec), <MenuItem key={spec.name} value={spec.name}> {spec.name} </MenuItem>)) }
            </Select> */}
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
        </FormControl>
      </Dialog>
    )
  }


}

const mapStateToProps = state => {
  const { user } = state.users;
  const { specializations} = state.doctors;
  return {
    user,
    specializations: specializations,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getSpecializations: () => dispatch(doctorsActions.getSpecializations()),
  }
}

const connectedBasicDoctorInfoEdit = connect(mapStateToProps, mapDispatchToProps)(BasicDoctorInfoEdit);
const styledConnectedBasicDoctorInfoEdit = withStyles(styles)(connectedBasicDoctorInfoEdit);
export { styledConnectedBasicDoctorInfoEdit as BasicDoctorInfoEdit };