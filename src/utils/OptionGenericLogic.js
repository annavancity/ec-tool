import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import concrete from "../images/concrete.jpg";
import steel from "../images/steel.jpg";
import wood from "../images/wood.jpg";
import Concrete from "../components/materials/Concrete";
import Wood from "../components/materials/Wood";
import Steel from "../components/materials/Steel";
import calculateValues from "../utils/calculateValues";
import { setCalculatedValues } from "../features/calculatedValuesSlice";

const OptionGenericLogic = ({ option }) => {
  const dispatch = useDispatch();
  const [selectedComponent, setSelectedComponent] = useState("concrete");
  const materialInputs = useSelector((state) => state.materialInputs);
  const calculatedValues = useSelector(
    (state) => state.calculatedValues[option]
  );
  // Track if inputs for each material are saved
  const [isConcreteSaved, setIsConcreteSaved] = useState(false);
  const [isSteelSaved, setIsSteelSaved] = useState(false);
  const [isWoodSaved, setIsWoodSaved] = useState(false);

  useEffect(() => {
    setIsConcreteSaved(materialInputs.concrete.isSaved);
    setIsSteelSaved(materialInputs.steel.isSaved);
    setIsWoodSaved(materialInputs.wood.isSaved);
  }, [
    materialInputs.concrete.isSaved,
    materialInputs.steel.isSaved,
    materialInputs.wood.isSaved,
  ]);

  const calculateResults = () => {
    if (isConcreteSaved && isSteelSaved && isWoodSaved) {
      const updatedMaterialInputs = { ...materialInputs };
      const calculatedResults = calculateValues(updatedMaterialInputs);
      dispatch(setCalculatedValues({ option, values: calculatedResults }));
    } else {
      alert("Please save all material inputs before calculating.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="select-material">
          <button
            className="concrete-image"
            onClick={() => setSelectedComponent("concrete")}
          >
            <img className="material-image" src={concrete} alt="concrete" />
            <h4 className="icon-text">Concrete</h4>
          </button>
          <button
            className="wood-image"
            onClick={() => setSelectedComponent("wood")}
          >
            <img className="material-image" src={wood} alt="wood" />
            <h4 className="icon-text">Wood</h4>
          </button>
          <button
            className="steel-image"
            onClick={() => setSelectedComponent("steel")}
          >
            <img className="material-image" src={steel} alt="steel" />
            <h4 className="icon-text">Steel</h4>
          </button>
        </div>
        {selectedComponent === "concrete" && <Concrete option={option} />}
        {selectedComponent === "wood" && <Wood option={option} />}
        {selectedComponent === "steel" && <Steel option={option} />}
        {/* <ConcreteGeneric handleInputChange={handleInputChange} calculatedValues = {calculatedValues} />
                <SteelGeneric handleInputChange={handleInputChange} calculatedValues = {calculatedValues} />
                <WoodGeneric handleInputChange={handleInputChange} calculatedValues = {calculatedValues} /> */}

        <div>
          <button className="btn" onClick={calculateResults}>
            Calculate
          </button>
        </div>

        <div className="optionResults">
          <div className="value-row">
            <p className="menu-text-large">Concrete</p>
            <p className="menu-text-large">
              {calculatedValues.concrete?.concGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.concrete?.concPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Steel</p>
            <p className="menu-text-large">
              {calculatedValues.steel?.steelGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.steel?.steelPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Wood</p>
            <p className="menu-text-large">
              {calculatedValues.wood?.woodGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.wood?.woodPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Total</p>
            <p className="menu-text-large">
              {calculatedValues.totals?.GWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.totals?.PercentageTotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionGenericLogic;
