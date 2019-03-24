import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { users } from "./users.reducer";
import { doctors } from "./doctors.reducer";

const rootReducer = combineReducers({
  registration,
  authentication,
  users,
  alert,
  doctors,
});

export default rootReducer;