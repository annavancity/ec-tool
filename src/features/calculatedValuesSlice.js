import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OptionOne: {
    concrete: {},
    steel: {},
    wood: {},
  },
  OptionTwo: {
    concrete: {},
    steel: {},
    wood: {},
  },
  OptionThree: {
    concrete: {},
    steel: {},
    wood: {},
  },
};

export const calculatedValuesSlice = createSlice({
  name: "calculatedValues",
  initialState,
  reducers: {
    setCalculatedValues: (state, action) => {
      const { option, material, values } = action.payload;
      state[option][material] = values;
    },
  },
});

export const { setCalculatedValues } = calculatedValuesSlice.actions;
export default calculatedValuesSlice.reducer;
