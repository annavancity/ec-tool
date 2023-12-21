const handleSaveInputs = (option, materialType, inputs, calculatedValues) => {
  // option should be 'OptionOne', 'OptionTwo', or 'OptionThree'
  // materialType should be 'concrete', 'wood', or 'steel'

  // Retrieve the existing data from localStorage for the specific option, or initialize if not present
  const existingOptionData = JSON.parse(localStorage.getItem(option)) || {};

  // Update the specific material's data in the existing option data
  existingOptionData[materialType] = {
    inputs,
    outputs: calculatedValues,
  };

  // Save the updated option data back to localStorage
  localStorage.setItem(option, JSON.stringify(existingOptionData));
};

export default handleSaveInputs;
