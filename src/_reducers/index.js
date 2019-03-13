import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";

const rootReducer = combineReducers({
  registration,
  authentication,
});

export default rootReducer;