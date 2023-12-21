import React, { useState } from "react";
import concrete from "../images/concrete.jpg";
import steel from "../images/steel.jpg";
import wood from "../images/wood.jpg";
import Concrete from "../components/materials/Concrete";
import Wood from "../components/materials/Wood";
import Steel from "../components/materials/Steel";

const OptionGenericLogic = ({ option }) => {
  const [selectedComponent, setSelectedComponent] = useState("concrete");

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
          {/* <button className="btn" onClick={handleSave}>
            Calculate
          </button> */}
          {/* <Modal isOpen={isModalOpen} handleClose={handleCloseModal} /> */}
        </div>

        <div className="optionResults">
          {/* <div className="value-row">
            <p className="menu-text-large">Concrete</p>
            <p className="menu-text-large">{calculateValues.concGWPTotal}</p>
            <p className="menu-text-large">
              {calculateValues.concPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Steel</p>
            <p className="menu-text-large">{calculateValues.steelGWPTotal}</p>
            <p className="menu-text-large">
              {calculateValues.steelPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Wood</p>
            <p className="menu-text-large">{calculateValues.woodGWPTotal}</p>
            <p className="menu-text-large">
              {calculateValues.woodPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large">Total</p>
            <p className="menu-text-large">{calculateValues.GWPTotal}</p>
            <p className="menu-text-large">{calculateValues.PercentageTotal}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OptionGenericLogic;
