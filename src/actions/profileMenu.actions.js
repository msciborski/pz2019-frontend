import { profileMenuConstants } from "../constants";

const open = (payload) => {
  return {
    type: profileMenuConstants.OPEN,
    payload,
  };
};

const close = () => {
  return {
    type: profileMenuConstants.CLOSE,
    payload: { anchorEl: null },
  };
};

export const profileMenuActions = {
  open,
  close,
};

