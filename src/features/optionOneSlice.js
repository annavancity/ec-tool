import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: {},
  calculatedValues: {},
};

export const optionOneSlice = createSlice({
  name: "optionOne",
  initialState,
  reducers: {
    // Reducers for updating inputs and calculated values
  },
});

export const { actions } = optionOneSlice;
export default optionOneSlice.reducer;
