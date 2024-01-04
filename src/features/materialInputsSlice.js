// materialInputsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const materialInputsSlice = createSlice({
  name: "materialInputs",
  initialState: {
    concrete: {
      inputs: {
        concHoriz: 0,
        concVert: 0,
        concFound: 0,
        concRebar: 0,
        concCustom: 0,
      },
      isSaved: false,
    },
    steel: {
      inputs: {
        steelHotRolled: 0,
        steelHSS: 0,
        steelOWSJ: 0,
        steelPlate: 0,
        steelDeck: 0,
        steelCustom: 0,
      },
      isSaved: false,
    },
    wood: {
      inputs: {
        woodCLT: 0,
        woodDltNlt: 0,
        woodMPP: 0,
        woodPlywood: 0,
        woodGlulam: 0,
        woodPslLslLvl: 0,
        woodTJI: 0,
        woodLumber: 0,
        woodCustom: 0,
      },
      isSaved: false,
    },
  },
  reducers: {
    updateConcreteInputs: (state, action) => {
      state.concrete.inputs = { ...state.concrete.inputs, ...action.payload };
    },
    markConcreteAsSaved: (state) => {
      state.concrete.isSaved = true;
    },
    updateSteelInputs: (state, action) => {
      state.steel.inputs = { ...state.steel.inputs, ...action.payload };
    },
    markSteelAsSaved: (state) => {
      state.steel.isSaved = true;
    },
    updateWoodInputs: (state, action) => {
      state.wood.inputs = { ...state.wood.inputs, ...action.payload };
    },
    markWoodAsSaved: (state) => {
      state.wood.isSaved = true;
    },
  },
});

export const {
  updateConcreteInputs,
  markConcreteAsSaved,
  updateSteelInputs,
  markSteelAsSaved,
  updateWoodInputs,
  markWoodAsSaved,
} = materialInputsSlice.actions;

export default materialInputsSlice.reducer;
