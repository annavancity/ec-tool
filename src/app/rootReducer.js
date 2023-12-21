import { combineReducers } from "@reduxjs/toolkit";
import optionOneReducer from "../features/optionOneSlice";

const rootReducer = combineReducers({
  optionOne: optionOneReducer,
});

export default rootReducer;
