//not used for now

import { useState } from "react";

//creating a custom hook for input handling and error messaging
const useMaterialInput = (initialInputs, onInputChange) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValidNumber = /^-?\d*\.?\d*$/.test(value);
    const isNegativeOrInvalid = Number(value) < 0 || !isValidNumber;

    if (isNegativeOrInvalid) {
      setErrorMessages({
        ...errorMessages,
        [name]: "Enter a valid positive number.",
      });
    } else {
      let newErrorMessages = { ...errorMessages };
      delete newErrorMessages[name];
      setErrorMessages(newErrorMessages);
    }
    setInputs({ ...inputs, [name]: value });
    onInputChange();
  };

  return { inputs, setInputs, errorMessages, handleInputChange };
};

export { useMaterialInput };
