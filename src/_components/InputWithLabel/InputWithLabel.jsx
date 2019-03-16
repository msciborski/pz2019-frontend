import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

export const InputWithLabel = (props) => {
  const {
    margin,
    label,
    name,
    autoComplete,
    onChange,
    hasAutoFocus,
    isFullWidth,
    isRequired,
    type,
    classFormControl,
    classInputLabel,
    classInput,
  } = props;
  console.log(type);
  return (
    <FormControl margin={margin} required={isRequired} fullWidth={isFullWidth} >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input type={type || 'text'} id={name} name={name} autoComplete={autoComplete} autoFocus={hasAutoFocus} onChange={onChange} />
    </FormControl>
  )
}