import { profileMenuConstants } from "../constants";

export const profileMenu = (state = {}, action) => {
  switch (action.type) {
    case profileMenuConstants.OPEN:
      return {
        type: 'menu-open',
        anchorEl: action.payload
      };
    case profileMenuConstants.CLOSE:
      return {
        type: 'menu-close',
        anchorEl: null,
      };
    default:
      return state;
  };
};

