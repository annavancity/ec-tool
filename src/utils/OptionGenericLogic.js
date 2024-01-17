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
  resetCalculatedValues,
} from "../features/calculatedValuesSlice";
import ModalDescription from "./ModalDescription";
import StackedBarChart from "../components/StackedBarChart";
import CustomPieChartPercentage from "../components/CustomPieChartPercentage";
import { initialState } from "../features/materialInputsSlice";

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

  // Retrieve building area from local storage
  const savedBuildingArea = localStorage.getItem(`${option}BuildingArea`);

  // Initialize building area state. Use null if nothing in local storage.
  const [buildingArea, setBuildingArea] = useState(
    savedBuildingArea ? Number(savedBuildingArea) : null
  );

  // Function to handle building area change
  const handleBuildingAreaChange = (e) => {
    const newArea = e.target.value;
    setBuildingArea(newArea ? Number(newArea) : null);
  };

  // Effect to save building area to local storage whenever it changes
  useEffect(() => {
    if (buildingArea !== null) {
      localStorage.setItem(`${option}BuildingArea`, buildingArea);
    }
  }, [buildingArea, option]);

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

  const resetAllInputs = () => {
    const options = ["OptionOne", "OptionTwo", "OptionThree"];

    options.forEach((opt) => {
      localStorage.removeItem(`${opt}BuildingArea`);
      localStorage.removeItem(`${opt}Description`);
      localStorage.removeItem(opt);

      dispatch(resetCalculatedValues({ option: opt })); // Dispatch reset action
      dispatch(
        updateMaterialInputs({
          option: opt,
          materialType: "concrete",
          inputs: initialState[opt].concrete.inputs,
        })
      );
      dispatch(
        updateMaterialInputs({
          option: opt,
          materialType: "steel",
          inputs: initialState[opt].steel.inputs,
        })
      );
      dispatch(
        updateMaterialInputs({
          option: opt,
          materialType: "wood",
          inputs: initialState[opt].wood.inputs,
        })
      );
    });

    // Reset the local states for building area and description
    setBuildingArea(null);
    setDescription("");
    setShowResults(false);

    // Perform a hard reload of the page
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <button className="btn-reset" onClick={resetAllInputs}>
            Reset All Inputs
          </button>
        </div>
        <div className="container-description">
          <button className="btn" onClick={openModalDescription}>
            Set / Modify Description
          </button>
          {description && <h3 className="description-text">{description}</h3>}
        </div>

        <div className="container-area">
          <div className="value-row">
            <label className="menu-text-large">Description:</label>
            <input
              className="input-description"
              type="text"
              // value={buildingArea !== null ? buildingArea : ""}
              // onChange={handleBuildingAreaChange}
              name="description"
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="container-area">
          <div className="value-row">
            <label className="menu-text-large">Building area:</label>
            <input
              type="number"
              value={buildingArea !== null ? buildingArea : ""}
              onChange={handleBuildingAreaChange}
              name="area"
              placeholder="Enter area"
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
              {showResults &&
                calculatedValues.concrete &&
                calculatedValues.steel &&
                calculatedValues.wood && (
                  <div className="chart-container">
                    <CustomPieChartPercentage
                      concretePercentage={
                        calculatedValues.concrete?.concPercentageTotal || 0
                      }
                      steelPercentage={
                        calculatedValues.steel?.steelPercentageTotal || 0
                      }
                      woodPercentage={
                        calculatedValues.wood?.woodPercentageTotal || 0
                      }
                    />

                    <StackedBarChart
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
