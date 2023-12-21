import {
  steelHotRolledGwp,
  steelHSSGwp,
  steelPlateGwp,
  steelRebarGwp,
  steelOWSJGwp,
  steelDeckGwp,
  steelStudsGwp,
  concHorizGwp,
  concVertGwp,
  woodGlulamGwp,
  woodCLTGwp,
  woodPslLslLvlGwp,
  woodSoftwoodLumberGwp,
  woodSoftwoodPlywoodGwp,
  woodTJIGwp,
  woodMPPGwp,
  woodDltGwp,
} from "../data/dataEPD";

const calculateValues = (savedInputs) => {
  const concGWPTotal =
    +savedInputs.concHoriz +
    +savedInputs.concVert +
    +savedInputs.concFound +
    +savedInputs.concRebar +
    +savedInputs.concCustom;
  const steelGWPTotal =
    +savedInputs.steelHotRolled +
    +savedInputs.steelHSS +
    +savedInputs.steelOWSJ +
    +savedInputs.steelPlate +
    +savedInputs.steelDeck +
    +savedInputs.steelCustom;
  const woodGWPTotal =
    +savedInputs.woodCLT +
    +savedInputs.woodDltNlt +
    +savedInputs.woodMPP +
    +savedInputs.woodPlywood +
    +savedInputs.woodGlulam +
    +savedInputs.woodPslLslLvl +
    +savedInputs.woodTJI +
    +savedInputs.woodLumber +
    +savedInputs.woodCustom;
  const GWPTotal = +concGWPTotal + +steelGWPTotal + +woodGWPTotal;
  const concPercentageTotal =
    GWPTotal !== 0 ? Math.round((+concGWPTotal / +GWPTotal) * 100) : 0;
  const steelPercentageTotal = Math.round((+steelGWPTotal / +GWPTotal) * 100);
  const woodPercentageTotal = Math.round((+woodGWPTotal / +GWPTotal) * 100);
  const PercentageTotal =
    concPercentageTotal + steelPercentageTotal + woodPercentageTotal;
  const concHorizGWPCalculated = concHorizGwp * +savedInputs.concHoriz;
  const concHorizPercentageCalculated =
    GWPTotal !== 0
      ? Math.floor((+concHorizGWPCalculated / +GWPTotal) * 100)
      : 0;
  const concVertGWPCalculated = concVertGwp * +savedInputs.concVert;
  const concVertPercentageCalculated = Math.round(
    (concVertGWPCalculated / GWPTotal) * 100
  );
  const concFoundGWPCalculated = concVertGwp * +savedInputs.concFound;
  const concFoundPercentageCalculated = Math.floor(
    (concFoundGWPCalculated / GWPTotal) * 100
  );
  const concRebarGWPCalculated = steelRebarGwp * +savedInputs.concRebar;
  const concRebarPercentageCalculated = Math.round(
    (concRebarGWPCalculated / GWPTotal) * 100
  );
  const concCustomGWPCalculated = 0;
  const concCustomPercentageCalculated = Math.round(
    (concCustomGWPCalculated / GWPTotal) * 100
  );
  const steelHotRolledGWPCalculated =
    steelHotRolledGwp * +savedInputs.steelHotRolled;
  const steelHotRolledPercentageCalculated = Math.round(
    (steelHotRolledGWPCalculated / GWPTotal) * 100
  );
  const steelHSSGWPCalculated = steelHSSGwp * +savedInputs.steelHSS;
  const steelHSSPercentageCalculated = Math.round(
    (steelHSSGWPCalculated / GWPTotal) * 100
  );
  const steelOWSJGWPCalculated = steelOWSJGwp * +savedInputs.steelOWSJ;
  const steelOWSJPercentageCalculated = Math.round(
    (steelOWSJGWPCalculated / GWPTotal) * 100
  );
  const steelPlateGWPCalculated = steelPlateGwp * +savedInputs.steelPlate;
  const steelPlatePercentageCalculated = Math.round(
    (steelPlateGWPCalculated / GWPTotal) * 100
  );
  const steelDeckGWPCalculated = steelDeckGwp * +savedInputs.steelDeck;
  const steelDeckPercentageCalculated = Math.round(
    (steelDeckGWPCalculated / GWPTotal) * 100
  );
  const steelCustomGWPCalculated = 0;
  const steelCustomPercentageCalculated = Math.round(
    (steelCustomGWPCalculated / GWPTotal) * 100
  );
  const woodCLTGWPCalculated = woodCLTGwp * +savedInputs.woodCLT;
  const woodCLTPercentageCalculated = Math.round(
    (woodCLTGWPCalculated / GWPTotal) * 100
  );
  const woodDltNltGWPCalculated = woodDltGwp * +savedInputs.woodDltNlt;
  const woodDltNltPercentageCalculated = Math.round(
    (woodDltNltGWPCalculated / GWPTotal) * 100
  );
  const woodMPPGWPCalculated = woodMPPGwp * +savedInputs.woodMPP;
  const woodMPPPercentageCalculated = Math.round(
    (woodMPPGWPCalculated / GWPTotal) * 100
  );
  const woodPlywoodGWPCalculated =
    woodSoftwoodPlywoodGwp * +savedInputs.woodPlywood;
  const woodPlywoodPercentageCalculated = Math.round(
    (woodPlywoodGWPCalculated / GWPTotal) * 100
  );
  const woodGlulamGWPCalculated = woodGlulamGwp * +savedInputs.woodGlulam;
  const woodGlulamPercentageCalculated = Math.round(
    (woodGlulamGWPCalculated / GWPTotal) * 100
  );
  const woodPslLslLvlGWPCalculated =
    woodPslLslLvlGwp * +savedInputs.woodPslLslLvl;
  const woodPslLslLvlPercentageCalculated = Math.round(
    (woodPslLslLvlGWPCalculated / GWPTotal) * 100
  );
  const woodTJIGWPCalculated = woodTJIGwp * +savedInputs.woodTJI;
  const woodTJIPercentageCalculated = Math.round(
    (woodTJIGWPCalculated / GWPTotal) * 100
  );
  const woodLumberGWPCalculated =
    woodSoftwoodLumberGwp * +savedInputs.woodLumber;
  const woodLumberPercentageCalculated = Math.round(
    (woodLumberGWPCalculated / GWPTotal) * 100
  );
  const woodCustomGWPCalculated = 0;
  const woodCustomPercentageCalculated = Math.round(
    (woodCustomGWPCalculated / GWPTotal) * 100
  );
  const calculatedValues = {
    concGWPTotal,
    steelGWPTotal,
    woodGWPTotal,
    GWPTotal,
    concPercentageTotal,
    steelPercentageTotal,
    woodPercentageTotal,
    PercentageTotal,
    concHorizGWPCalculated,
    concHorizPercentageCalculated,
    concVertGWPCalculated,
    concVertPercentageCalculated,
    concFoundGWPCalculated,
    concFoundPercentageCalculated,
    concRebarGWPCalculated,
    concRebarPercentageCalculated,
    concCustomGWPCalculated,
    concCustomPercentageCalculated,
    steelHotRolledGWPCalculated,
    steelHotRolledPercentageCalculated,
    steelHSSGWPCalculated,
    steelHSSPercentageCalculated,
    steelOWSJGWPCalculated,
    steelOWSJPercentageCalculated,
    steelPlateGWPCalculated,
    steelPlatePercentageCalculated,
    steelDeckGWPCalculated,
    steelDeckPercentageCalculated,
    steelCustomGWPCalculated,
    steelCustomPercentageCalculated,
    woodCLTGWPCalculated,
    woodCLTPercentageCalculated,
    woodDltNltGWPCalculated,
    woodDltNltPercentageCalculated,
    woodMPPGWPCalculated,
    woodMPPPercentageCalculated,
    woodPlywoodGWPCalculated,
    woodPlywoodPercentageCalculated,
    woodGlulamGWPCalculated,
    woodGlulamPercentageCalculated,
    woodPslLslLvlGWPCalculated,
    woodPslLslLvlPercentageCalculated,
    woodTJIGWPCalculated,
    woodTJIPercentageCalculated,
    woodLumberGWPCalculated,
    woodLumberPercentageCalculated,
    woodCustomGWPCalculated,
    woodCustomPercentageCalculated,
  };

  return {
    inputs: savedInputs,
    outputs: calculatedValues,
  };
};

export default calculateValues;
