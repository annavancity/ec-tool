import { useEffect, useState } from "react";
import calculateValues from "../../utils/calculateValues";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";

const Wood = ({ option }) => {
  const [woodCLT, setWoodCLT] = useState(0);
  const [woodDltNlt, setWoodDltNlt] = useState(0);
  const [woodMPP, setWoodMPP] = useState("");
  const [woodPlywood, setWoodPlywood] = useState(0);
  const [woodGlulam, setWoodGlulam] = useState(0);
  const [woodPslLslLvl, setWoodPslLslLvl] = useState(0);
  const [woodTJI, setWoodTJI] = useState(0);
  const [woodLumber, setWoodLumber] = useState(0);
  const [woodCustom, setWoodCustom] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculatedValues, setCalculatedValues] = useState({});

  const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateAndSave = () => {
    const inputs = {
      woodCLT,
      woodDltNlt,
      woodMPP,
      woodPlywood,
      woodGlulam,
      woodPslLslLvl,
      woodTJI,
      woodLumber,
      woodCustom,
    };

    const results = calculateValues(inputs);
    setCalculatedValues(results.outputs);

    handleSaveInputs(option, "wood", inputs, results.outputs);
  };

  useEffect(() => {
    calculateAndSave();
  }, [
    woodCLT,
    woodDltNlt,
    woodMPP,
    woodPlywood,
    woodGlulam,
    woodPslLslLvl,
    woodTJI,
    woodLumber,
    woodCustom,
  ]);

  return (
    <div className="wood-section">
      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - CLT (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodCLT}
          onChange={(event) => handleInputChange(event, setWoodCLT)}
          placeholder="wood-CLT value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodCLTGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodCLTPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - DLT/NLT (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodDltNlt}
          onChange={(event) => handleInputChange(event, setWoodDltNlt)}
          placeholder="wood-DLT/NLT value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodDltNltGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodDltNltPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - MPP (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodMPP}
          onChange={(event) => handleInputChange(event, setWoodMPP)}
          placeholder="wood-MPP value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodMPPGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodMPPPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Plywood (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodPlywood}
          onChange={(event) => handleInputChange(event, setWoodPlywood)}
          placeholder="wood-plywood value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodPlywoodGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodPlywoodPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Glulam (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodGlulam}
          onChange={(event) => handleInputChange(event, setWoodGlulam)}
          placeholder="wood-glulam value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodGlulamGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodGlulamPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - PSL / LSL / LVL (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodPslLslLvl}
          onChange={(event) => handleInputChange(event, setWoodPslLslLvl)}
          placeholder="wood-PSL/LSL/LVL value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodPslLslLvlGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodPslLslLvlPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - TJI (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodTJI}
          onChange={(event) => handleInputChange(event, setWoodTJI)}
          placeholder="wood-TJI value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodTJIGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodTJIPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Lumber (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodLumber}
          onChange={(event) => handleInputChange(event, setWoodLumber)}
          placeholder="wood-lumber value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodLumberGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodLumberPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Custom (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={woodCustom}
          onChange={(event) => handleInputChange(event, setWoodCustom)}
          placeholder="wood-custom value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {calculatedValues.woodCustomGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {calculatedValues.woodCustomPercentageCalculated}
        </p>
      </div>

      <div>
        <button className="btn" onClick={calculateAndSave}>
          Calculate
        </button>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};
export default Wood;
