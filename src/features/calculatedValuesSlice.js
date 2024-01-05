import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OptionOne: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
    isCalculated: false,
  },
  OptionTwo: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
    isCalculated: false,
  },
  OptionThree: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
    isCalculated: false,
  },
};

export const calculatedValuesSlice = createSlice({
  name: "calculatedValues",
  initialState,
  reducers: {
    setCalculatedValues: (state, action) => {
      const { option, values } = action.payload;
      state[option] = values;
    },
    markOptionAsCalculated: (state, action) => {
      const { option } = action.payload;
      state[option].isCalculated = true;
    },
  },
});

export const { setCalculatedValues, markOptionAsCalculated } =
  calculatedValuesSlice.actions;
export default calculatedValuesSlice.reducer;
