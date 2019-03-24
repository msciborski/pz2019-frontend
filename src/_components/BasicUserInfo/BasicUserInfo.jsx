import React from "react";
import { connect } from "react-redux";
import { BasicPatientInfoEdit } from "../BasicPatientInfoEdit";
import { BasicDoctorInfoEdit } from "../BasicDoctorInfoEdit";

const BasicUserInfo = (props) => {
  const { user } = { ...props };
  return (
    user.userType === 'patient' ?
      <BasicPatientInfoEdit />
    :
      <BasicDoctorInfoEdit />
  )
}

const mapStateToProps = state => {
  const { user } = state.users;
  return {
    user,
  }
}

const connectedBasicUserInfo = connect(mapStateToProps)(BasicUserInfo);

export { connectedBasicUserInfo as BasicUserInfo };