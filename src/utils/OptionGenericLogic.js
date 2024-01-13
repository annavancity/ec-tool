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
  updateBuildingArea,
} from "../features/materialInputsSlice";
import calculateValues from "../utils/calculateValues";
import {
  setCalculatedValues,
  markOptionAsCalculated,
} from "../features/calculatedValuesSlice";
import ModalDescription from "./ModalDescription";
import CustomPieChart from "../components/CustomPieChart";

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
  const buildingArea = useSelector(
    (state) => state.materialInputs[option].buildingArea
  );

  // Function to handle building area change
  const handleBuildingAreaChange = (e) => {
    const newArea = e.target.value;
    dispatch(updateBuildingArea({ option, area: newArea }));
  };

  // Effect to save building area to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`${option}BuildingArea`, buildingArea);
  }, [buildingArea, option]);

  useEffect(() => {
    // Load building area from local storage
    const savedArea = localStorage.getItem(`${option}BuildingArea`);
    dispatch(updateBuildingArea({ option, area: savedArea }));
  }, [option, dispatch]);

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
    <div className="wrapper">
      <div className="container">
        <div className="container-description">
          <button className="btn" onClick={openModalDescription}>
            Set / Modify Description
          </button>
          {description && <h3 className="description-text">{description}</h3>}
        </div>
        <div className="container-area">
          <div className="value-row">
            <label className="menu-text-large">Building area:</label>
            <input
              type="number"
              value={buildingArea || ""}
              onChange={handleBuildingAreaChange}
              name="area"
              placeholder="area"
            />
            <p className="menu-text-large conv">
              m<sup>2</sup>
            </p>
            <span className="error-message"></span>
          </div>
        </div>

        <ModalDescription
          isOpen={isModalDescriptionOpen}
          handleClose={closeModalDescription}
          handleSubmit={handleSaveDescription}
          defaultDescription={description}
        />
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
        <div className="optionResults">
          <div>
            {selectedComponent === "concrete" && <Concrete option={option} />}
            {selectedComponent === "wood" && <Wood option={option} />}
            {selectedComponent === "steel" && <Steel option={option} />}
          </div>
          {showResults && (
            <div className="optionResults">
              {/* <div className="total-values">
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
              </div>
            </div> */}

              {showResults &&
                calculatedValues.concrete &&
                calculatedValues.steel &&
                calculatedValues.wood && (
                  <div className="chart-container">
                    <CustomPieChart
                      concretePercentage={
                        calculatedValues.concrete?.concGWPTotal || 0
                      }
                      steelPercentage={
                        calculatedValues.steel?.steelGWPTotal || 0
                      }
                      woodPercentage={calculatedValues.wood?.woodGWPTotal || 0}
                    />
                  </div>
                )}
            </div>
          )}
        </div>
        <div>
          <button className="btn" onClick={calculateResults}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionGenericLogic;
