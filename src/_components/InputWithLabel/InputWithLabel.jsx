import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

export const InputWithLabel = (props) => {
  const {
    margin,
    label,
    name,
    autoComplete,
    handleChange,
    hasAutoFocus,
    isFullWidth,
    isRequired,
    classFormControl,
    classInputLabel,
    classInput,
  } = props;

  return (
    <FormControl margin={margin} required={isRequired} fullWidth={isFullWidth} >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={name} name={name} autoComplete={autoComplete} autoFocus={hasAutoFocus} onChange={handleChange} />
    </FormControl>
  )
}