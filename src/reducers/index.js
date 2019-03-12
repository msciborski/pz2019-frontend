import { combineReducers } from "redux";
import { profileMenu } from "./profileMenu.reducer";
import { registration } from "./registration.reducer";

const rootReducer = combineReducers({
  profileMenu,
  registration,
});

export default rootReducer;