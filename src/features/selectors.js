export const selectMaterialInputs = (state, option, material) =>
  state.materialInputs[option]?.[material]?.inputs || {};

export const selectCalculatedValues = (state, option) =>
  state.calculatedValues[option] || {};
