// materialInputsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  OptionOne: {
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
    buildingArea: 0,
  },
  OptionTwo: {
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
    buildingArea: 0,
  },
  OptionThree: {
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
    buildingArea: 0,
  },
};

export const materialInputsSlice = createSlice({
  name: "materialInputs",
  initialState,
  reducers: {
    updateMaterialInputs: (state, action) => {
      const { option, materialType, inputs } = action.payload;
      state[option][materialType].inputs = { ...inputs };
    },
    markMaterialAsSaved: (state, action) => {
      const { option, materialType } = action.payload;
      state[option][materialType].isSaved = true;
    },
    updateBuildingArea: (state, action) => {
      // Updating building area
      const { option, area } = action.payload;
      state[option].buildingArea = area;
    },
  },
});

export const { updateMaterialInputs, markMaterialAsSaved, updateBuildingArea } =
  materialInputsSlice.actions;

export default materialInputsSlice.reducer;
