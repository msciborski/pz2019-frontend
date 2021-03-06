import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { users } from "./users.reducer";
import { doctors } from "./doctors.reducer";
import { patients } from "./patients.reducer";
import { medicapi } from "./medicapi.reducer";


const rootReducer = combineReducers({
  registration,
  authentication,
  users,
  alert,
  doctors,
  patients,
  medicapi
});

export default rootReducer;