import React from "react";
import { connect } from "react-redux";
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { InputWithLabel } from "../InputWithLabel";

const Transition = props => (<Slide direction="up" {...props} />);

const BasicUserInfoEdit = (props) => {
  const {
    user,
    open,
    toggleClose,
    onSaveButtonClick,
  } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleClose}
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
    </Dialog>
  )
}

const mapStateToProps = state => {
  const { user } = state.users;
  return {
    user,
  };
}

const connectedBasicUserInfoEdit = connect(mapStateToProps)(BasicUserInfoEdit);
export { connectedBasicUserInfoEdit as BasicUserInfoEdit };