import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";

const rootReducer = combineReducers({
  registration,
  authentication,
  users,
});

export default rootReducer;