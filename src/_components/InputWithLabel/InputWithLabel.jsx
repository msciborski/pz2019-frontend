import React from "react";
// import { FormControl, Input, InputLabel } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";

export const InputWithLabel = (props) => {
  const {
    margin,
    label,
    name,
    autoComplete,
    onChange,
    hasAutoFocus,
    type,
    value,
    validators,
    errorMessages,
    isFullWidth,
    classFormControl,
    classInputLabel,
    classInput,
  } = props;
  return (
    <TextValidator
      label={label}
      onChange={onChange}
      value={value}
      type={type || 'text'}
      name={name}
      validators={validators}
      errorMessages={errorMessages}
      margin={margin}
      autoComplete={autoComplete}
      autoFocus={hasAutoFocus}
      fullWidth={isFullWidth}
    />
    // <FormControl margin={margin} required={isRequired} fullWidth={isFullWidth} >
    //   <InputLabel htmlFor={name}>{label}</InputLabel>
    //   <Input type={type || 'text'} id={name} name={name} autoComplete={autoComplete} autoFocus={hasAutoFocus} onChange={onChange} />
    // </FormControl>
  )
}