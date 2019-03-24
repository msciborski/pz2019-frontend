import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, FormControl, Input, MenuItem, Chip } from "@material-ui/core";

const Transition = props => (<Slide direction="up" {...props} />);

class BasicDoctorInfoEdit extends Component {
  constructor(props) {
    super(props);

    const { specializations } = { ...props.user }
    this.state = {
      specializations: [ specializations.map(spec => spec.name)],
    };
  }

  componentDidMount() {
  }

  handleChange = event => {
    console.log('Value', event.target.value)
    this.setState({ specializations: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { open, handleClose, user, specializations } = this.props;
    console.log('Props spec:', specializations)
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="edit-basic-info"
        aria-describedby="edit-basic-info-description"
      >
        <FormControl onSubmit={handleClose.submit}>
          <DialogTitle id="edit-basic-info-title">
            {"Edit"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Update user: ${user.name} ${user.surname}`}
            </DialogContentText>
            <Select
              multiple
              value={this.state.specializations}
              onChange={this.handleChange}
              name="specializations"
              input={<Input id="select-multiple" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {specializations.map(spec => (<MenuItem key={spec.name} value={spec.name}> {spec.name} </MenuItem>)) }
            </Select>
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
  console.log(state);
  return {
    user,
    specializations: specializations,
  };
}

const connectedBasicUserInfoEdit = connect(mapStateToProps)(BasicDoctorInfoEdit);
export { connectedBasicUserInfoEdit as BasicDoctorInfoEdit };