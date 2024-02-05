import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { CalculationContext } from "../utils/CalculationContext";
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
import StackedBarChart from "../components/charts/StackedBarChart";
import CustomPieChartPercentage from "../components/charts/CustomPieChartPercentage";
import { initialState } from "../features/materialInputsSlice";
import handleSaveInputs from "../utils/handleSaveInputs";

const OptionGenericLogic = ({ option }) => {
  //Define state for each material
  const [localConcreteInputs, setLocalConcreteInputs] = useState({});
  const [localSteelInputs, setLocalSteelInputs] = useState({});
  const [localWoodInputs, setLocalWoodInputs] = useState({});
  const { inputsChanged, markInputsChanged } = useContext(CalculationContext);
  const [showRecalculateMessage, setShowRecalculateMessage] = useState(false);
  const [showResults, setShowResults] = useState(false); // state for showing totals and piechart after calculate button clicked
  const dispatch = useDispatch();

  const savedDescription = localStorage.getItem(`${option}Description`) || ""; // Initialize description state with value from local storage
  const [description, setDescription] = useState(savedDescription);

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

  // Save all inputs at once
  const saveAllInputs = () => {
    // Dispatch the updateMaterialInputs action for each material type
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "concrete",
        inputs: localConcreteInputs,
      })
    );
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "steel",
        inputs: localSteelInputs,
      })
    );
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "wood",
        inputs: localWoodInputs,
      })
    );

    // Save to local storage
    handleSaveInputs(option, "concrete", { inputs: localConcreteInputs });
    handleSaveInputs(option, "steel", { inputs: localSteelInputs });
    handleSaveInputs(option, "wood", { inputs: localWoodInputs });

    // Mark as saved in Redux state for each material type
    dispatch(markMaterialAsSaved({ option, materialType: "concrete" }));
    dispatch(markMaterialAsSaved({ option, materialType: "steel" }));
    dispatch(markMaterialAsSaved({ option, materialType: "wood" }));

    markInputsChanged(option, true); //after saving inputs mark them as changed
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(option));
    if (savedData) {
      if (savedData.concrete) {
        setLocalConcreteInputs(savedData.concrete.inputs); //dispatch update for concrete
      }
      if (savedData.steel) {
        setLocalSteelInputs(savedData.steel.inputs); //dispatch update for steel
      }
      if (savedData.wood) {
        setLocalWoodInputs(savedData.wood.inputs); //dispatch update for wood
      }
    } else {
      // Reset local state if not saved
      setLocalConcreteInputs(initialState[option].concrete.inputs);
      setLocalSteelInputs(initialState[option].steel.inputs);
      setLocalWoodInputs(initialState[option].wood.inputs);
    }
  }, [option, dispatch]);

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

  // Function to handle description change
  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
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

  useEffect(() => {
    // Assuming calculatedValues has a property to indicate if calculation is done
    if (calculatedValues.isCalculated) {
      setShowResults(true);
    }
  }, [calculatedValues.isCalculated]);

  const areAllMaterialsSaved = () => {
    return (
      materialInputs.concrete.isSaved &&
      materialInputs.steel.isSaved &&
      materialInputs.wood.isSaved
    );
  };

  useEffect(() => {
    // Check for changes in inputs after the first calculation
    const calculationDone = localStorage.getItem(`${option}CalculationDone`);
    if (inputsChanged[option] && calculationDone) {
      setShowRecalculateMessage(true);
    }
  }, [inputsChanged, option]);

  const calculateResults = () => {
    if (areAllMaterialsSaved()) {
      const calculatedResults = calculateValues(materialInputs);
      dispatch(setCalculatedValues({ option, values: calculatedResults }));
      dispatch(markOptionAsCalculated({ option })); // Mark the option as calculated

      // Mark as calculation done for the first time
      localStorage.setItem(`${option}CalculationDone`, "true");

      setShowResults(true);

      markInputsChanged(option, false); // Reset flag in context
      setShowRecalculateMessage(false);
    } else {
      alert("Please save all material inputs before calculating.");
    }
  };

  //Function to reset only current option
  const resetCurrentOptionInputs = () => {
    localStorage.removeItem(`${option}BuildingArea`);
    localStorage.removeItem(`${option}Description`);
    localStorage.removeItem(option);

    dispatch(resetCalculatedValues({ option })); // Dispatch reset action for current option
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "concrete",
        inputs: initialState[option].concrete.inputs,
      })
    );
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "steel",
        inputs: initialState[option].steel.inputs,
      })
    );
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "wood",
        inputs: initialState[option].wood.inputs,
      })
    );

    setBuildingArea(null);
    setDescription("");
    setShowResults(false);

    // window.location.reload();
  };

  //Function to reset all inputs at once
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
    // Navigate to the default page after the reload
    window.location.href = "/option_one";
  };

  // Function to check if all inputs are zeros
  const areAllInputsZeros = () => {
    const materials = ["concrete", "steel", "wood"];
    return materials.every((material) =>
      Object.values(materialInputs[material].inputs).every(
        (value) => value === 0
      )
    );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="options-page-top">
          <div className="options-reset">
            <button className="btn-reset" onClick={resetCurrentOptionInputs}>
              Reset{" "}
              {option
                .replace("Option", "Scheme ")
                .replace("One", "1")
                .replace("Two", "2")
                .replace("Three", "3")}
            </button>
            <button className="btn-reset" onClick={resetAllInputs}>
              Reset All Schemes
            </button>
          </div>
          <div className="container-disclamer">
            <div>
              <p className="menu-text-medium">
                The EC Carbon Tool is a web-based application designed for
                environmental impact assessment in schematic design stages of
                projects.
              </p>
              <p className="menu-text-small">
                Note: Provided embodied carbon and material quantity data are
                informative only, and shall not be used for any other purposes,
                including but not limited to costing exercises, tender bidding,
                embodied carbon reporting, etc.
              </p>
              <p className="menu-text-small">
                By using this application, you are agreeing to our{" "}
                <a
                  href="https://www.fastepp.com/terms-conditions/"
                  class="header-link"
                >
                  Terms and Conditions.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container-area">
          <div className="value-row">
            <label className="menu-text-large label-area-fixed">
              Description:
            </label>
            <input
              className="input-area-fixed"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              placeholder="Enter description"
              maxLength="30"
            />
          </div>
        </div>

        <div className="container-area">
          <div className="value-row">
            <label className="menu-text-large label-area-fixed">
              Building area:
            </label>
            <input
              className="input-area-fixed"
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
      </div>
      <div className="container">
        <div className="select-material">
          <div className="option-material">
            <button className="material-button">
              <img className="material-image" src={concrete} alt="concrete" />
              <h4 className="icon-text">CONCRETE</h4>
            </button>
            <Concrete
              option={option}
              localInputs={localConcreteInputs}
              setLocalInputs={setLocalConcreteInputs}
            />
          </div>
          <div>
            <button className="material-button">
              <img className="material-image" src={wood} alt="wood" />
              <h4 className="icon-text">WOOD</h4>
            </button>
            <Wood
              option={option}
              localInputs={localWoodInputs}
              setLocalInputs={setLocalWoodInputs}
            />
          </div>
          <div>
            <button className="material-button">
              <img className="material-image" src={steel} alt="steel" />
              <h4 className="icon-text">STEEL</h4>
            </button>
            <Steel
              option={option}
              localInputs={localSteelInputs}
              setLocalInputs={setLocalSteelInputs}
            />
          </div>
          {showResults && (
            <div className="optionResults-charts">
              {!areAllInputsZeros() &&
                showResults &&
                calculatedValues.concrete &&
                calculatedValues.steel &&
                calculatedValues.wood && (
                  <div className="chart-container">
                    <div className="chart-title  pie-options">
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

                      <h2 className="chart-description">
                        Percentage of total GWP
                      </h2>
                    </div>

                    <div className="chart-title">
                      <StackedBarChart
                        concretePercentage={
                          calculatedValues.concrete?.concGWPTotal || 0
                        }
                        steelPercentage={
                          calculatedValues.steel?.steelGWPTotal || 0
                        }
                        woodPercentage={
                          calculatedValues.wood?.woodGWPTotal || 0
                        }
                      />
                      <h2 className="chart-description">Total GWP</h2>
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
        <div className="optionResults"></div>

        <div>
          <button className="btn operations" onClick={saveAllInputs}>
            Save inputs
          </button>
          <button className="btn operations" onClick={calculateResults}>
            Calculate
          </button>
        </div>
        {showRecalculateMessage && (
          <div className="error-message">
            Calculations and charts are out-of-date.
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionGenericLogic;
