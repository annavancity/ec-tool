import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import concrete from "../images/concrete.jpg";
import steel from "../images/steel.jpg";
import wood from "../images/wood.jpg";
import Concrete from "../components/materials/Concrete";
import Wood from "../components/materials/Wood";
import Steel from "../components/materials/Steel";
import {
  updateMaterialInputs,
  markMaterialAsSaved,
} from "../features/materialInputsSlice";
import calculateValues from "../utils/calculateValues";
import {
  setCalculatedValues,
  markOptionAsCalculated,
} from "../features/calculatedValuesSlice";
import PieChart from "../components/PieChart";
import ModalDescription from "./ModalDescription";

const OptionGenericLogic = ({ option }) => {
  const [description, setDescription] = useState("");
  const [isModalDescriptionOpen, setIsModalDescriptionOpen] = useState(false);
  const [showResults, setShowResults] = useState(false); // state for showing totals and piechart after calculate button clicked
  const dispatch = useDispatch();
  const [selectedComponent, setSelectedComponent] = useState("concrete");
  const materialInputs = useSelector((state) => state.materialInputs[option]);
  const calculatedValues = useSelector(
    (state) => state.calculatedValues[option]
  );

  // Load the description from local storage
  useEffect(() => {
    const savedDescription = localStorage.getItem(`${option}Description`);
    if (savedDescription) {
      setDescription(savedDescription);
    }
  }, [option]);

  const openModalDescription = () => setIsModalDescriptionOpen(true);

  const closeModalDescription = () => setIsModalDescriptionOpen(false);

  const handleSaveDescription = (newDescription) => {
    setDescription(newDescription);
    localStorage.setItem(`${option}Description`, newDescription);
  };

  useEffect(() => {
    // Load saved inputs from local storage and update Redux store
    const savedData = JSON.parse(localStorage.getItem(option));
    if (savedData) {
      ["concrete", "steel", "wood"].forEach((material) => {
        if (savedData[material]) {
          dispatch(
            updateMaterialInputs({
              option,
              materialType: material,
              inputs: savedData[material].inputs,
            })
          );
          dispatch(markMaterialAsSaved({ option, materialType: material }));
        }
      });
    }
  }, [dispatch, option]);

  const areAllMaterialsSaved = () => {
    return (
      materialInputs.concrete.isSaved &&
      materialInputs.steel.isSaved &&
      materialInputs.wood.isSaved
    );
  };

  const calculateResults = () => {
    if (areAllMaterialsSaved()) {
      const calculatedResults = calculateValues(materialInputs);
      dispatch(setCalculatedValues({ option, values: calculatedResults }));
      dispatch(markOptionAsCalculated({ option })); // Mark the option as calculated
      setShowResults(true);
    } else {
      alert("Please save all material inputs before calculating.");
    }
  };

  return (
    <div>
      <div>
        {description && <h3 className="description-text">{description}</h3>}
        <ModalDescription
          isOpen={isModalDescriptionOpen}
          handleClose={closeModalDescription}
          handleSubmit={handleSaveDescription}
          defaultDescription={description}
        />
        <button className="btn" onClick={openModalDescription}>
          Set / Modify Description
        </button>
      </div>
      <div className="container">
        <div className="select-material">
          <button
            className="material-button"
            onClick={() => setSelectedComponent("concrete")}
          >
            <img
              className={`material-image ${
                selectedComponent === "concrete" ? "active" : ""
              }`}
              src={concrete}
              alt="concrete"
            />
            <div
              className={`overlay ${
                selectedComponent === "concrete" ? "active-bckg" : ""
              }`}
            ></div>
            <h4
              className={`icon-text ${
                selectedComponent === "concrete" ? "active-text" : ""
              }`}
            >
              CONCRETE
            </h4>
          </button>
          <button
            className="material-button"
            onClick={() => setSelectedComponent("wood")}
          >
            <img
              className={`material-image ${
                selectedComponent === "wood" ? "active" : ""
              }`}
              src={wood}
              alt="wood"
            />
            <div
              className={`overlay ${
                selectedComponent === "wood" ? "active-bckg" : ""
              }`}
            ></div>
            <h4
              className={`icon-text ${
                selectedComponent === "wood" ? "active-text" : ""
              }`}
            >
              WOOD
            </h4>
          </button>
          <button
            className="material-button"
            onClick={() => setSelectedComponent("steel")}
          >
            <img
              className={`material-image ${
                selectedComponent === "steel" ? "active" : ""
              }`}
              src={steel}
              alt="steel"
            />
            <div
              className={`overlay ${
                selectedComponent === "steel" ? "active-bckg" : ""
              }`}
            ></div>
            <h4
              className={`icon-text ${
                selectedComponent === "steel" ? "active-text" : ""
              }`}
            >
              STEEL
            </h4>
          </button>
        </div>
        {selectedComponent === "concrete" && <Concrete option={option} />}
        {selectedComponent === "wood" && <Wood option={option} />}
        {selectedComponent === "steel" && <Steel option={option} />}
        <div>
          <button className="btn" onClick={calculateResults}>
            Calculate
          </button>
        </div>

        {showResults && (
          <div className="optionResults">
            <div className="total-values">
              <div className="value-row">
                <p className="menu-text-large total-value-name">Concrete</p>
                <p className="menu-text-large total-value-name">
                  {calculatedValues.concrete?.concGWPTotal}
                </p>
                <p className="menu-text-large">
                  {calculatedValues.concrete?.concPercentageTotal}
                </p>
              </div>
              <div className="value-row">
                <p className="menu-text-large total-value-name">Steel</p>
                <p className="menu-text-large total-value-name">
                  {calculatedValues.steel?.steelGWPTotal}
                </p>
                <p className="menu-text-large">
                  {calculatedValues.steel?.steelPercentageTotal}
                </p>
              </div>
              <div className="value-row">
                <p className="menu-text-large total-value-name">Wood</p>
                <p className="menu-text-large total-value-name">
                  {calculatedValues.wood?.woodGWPTotal}
                </p>
                <p className="menu-text-large">
                  {calculatedValues.wood?.woodPercentageTotal}
                </p>
              </div>
              <div className="value-row">
                <p className="menu-text-large total-value-name">Total</p>
                <p className="menu-text-large total-value-name">
                  {calculatedValues.totals?.GWPTotal}
                </p>
                {/* <p className="menu-text-large">
        {calculatedValues.totals?.PercentageTotal}
      </p> */}
              </div>
            </div>

            <div className="chart-container">
              <PieChart
                concretePercentage={
                  calculatedValues.concrete?.concGWPTotal || 0
                }
                steelPercentage={calculatedValues.steel?.steelGWPTotal || 0}
                woodPercentage={calculatedValues.wood?.woodGWPTotal || 0}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionGenericLogic;
