import { combineReducers } from "redux";
import { profileMenu } from "./profileMenu.reducer";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";

const rootReducer = combineReducers({
  profileMenu,
  registration,
  authentication,
});

export default rootReducer;