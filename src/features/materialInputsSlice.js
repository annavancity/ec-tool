// materialInputsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const materialInputsSlice = createSlice({
  name: "materialInputs",
  initialState: {
    concrete: {
      concHoriz: 0,
      concVert: 0,
      concFound: 0,
      concRebar: 0,
      concCustom: 0,
    },
    steel: {
      steelHotRolled: 0,
      steelHSS: 0,
      steelOWSJ: 0,
      steelPlate: 0,
      steelDeck: 0,
      steelCustom: 0,
    },
    wood: {
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
  },
  reducers: {
    updateConcreteInputs: (state, action) => {
      state.concrete = { ...state.concrete, ...action.payload };
    },
    updateSteelInputs: (state, action) => {
      state.steel = { ...state.steel, ...action.payload };
    },
    updateWoodInputs: (state, action) => {
      state.wood = { ...state.wood, ...action.payload };
    },
  },
});

export const { updateConcreteInputs, updateSteelInputs, updateWoodInputs } =
  materialInputsSlice.actions;
export default materialInputsSlice.reducer;
