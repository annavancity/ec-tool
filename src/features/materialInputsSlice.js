// materialInputsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { updateMaterialInputs, markMaterialAsSaved } =
  materialInputsSlice.actions;

export default materialInputsSlice.reducer;
