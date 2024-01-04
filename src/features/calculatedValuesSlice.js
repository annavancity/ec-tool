import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OptionOne: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
  },
  OptionTwo: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
  },
  OptionThree: {
    concrete: {},
    steel: {},
    wood: {},
    totals: {},
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
  },
});

export const { setCalculatedValues } = calculatedValuesSlice.actions;
export default calculatedValuesSlice.reducer;
