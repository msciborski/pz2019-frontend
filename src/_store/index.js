import { createStore } from "redux";
import rootReducer from "../reducers";
const initialState = {
  profileMenu: {
    anchorEl: null,
  },
}
const store = createStore(rootReducer, initialState);

export default store;
