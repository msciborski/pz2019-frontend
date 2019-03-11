import { combineReducers } from "redux";
import { profileMenu } from "./profileMenu.reducer";

const rootReducer = combineReducers({
  profileMenu,
});

export default rootReducer;