import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import materialInputsReducer from "../features/materialInputsSlice";
import calculatedValuesReducer from "../features/calculatedValuesSlice";

export const store = configureStore({
  reducer: {
    materialInputs: materialInputsReducer,
    calculatedValues: calculatedValuesReducer,
    rootReducer: rootReducer,
  },
});

export default store;
