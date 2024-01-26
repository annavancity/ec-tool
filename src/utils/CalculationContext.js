import { createContext, useState } from "react";

export const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [inputsChanged, setInputsChanged] = useState({
    OptionOne: false,
    OptionTwo: false,
    OptionThree: false,
  });

  const markInputsChanged = (option, changed) => {
    setInputsChanged({ ...inputsChanged, [option]: changed });
  };

  return (
    <CalculationContext.Provider value={{ inputsChanged, markInputsChanged }}>
      {children}
    </CalculationContext.Provider>
  );
};
