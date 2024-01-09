// import {
//   steelHotRolledGwp,
//   steelHSSGwp,
//   steelPlateGwp,
//   steelRebarGwp,
//   steelOWSJGwp,
//   steelDeckGwp,
//   steelStudsGwp,
//   concHorizGwp,
//   concVertGwp,
//   woodGlulamGwp,
//   woodCLTGwp,
//   woodPslLslLvlGwp,
//   woodSoftwoodLumberGwp,
//   woodSoftwoodPlywoodGwp,
//   woodTJIGwp,
//   woodMPPGwp,
//   woodDltGwp,
// } from "../data/dataEPD";

import {
  steelHotRolledGwp,
  steelHSSGwp,
  steelPlateGwp,
  steelRebarGwp,
  steelOWSJGwp,
  steelDeckGwp,
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

const calculateValues = (optionData) => {
  // Destructuring inputs for each material
  const { concHoriz, concVert, concFound, concRebar, concCustom } =
    optionData.concrete.inputs;
  const {
    steelHotRolled,
    steelHSS,
    steelOWSJ,
    steelPlate,
    steelDeck,
    steelCustom,
  } = optionData.steel.inputs;
  const {
    woodCLT,
    woodDltNlt,
    woodMPP,
    woodPlywood,
    woodGlulam,
    woodPslLslLvl,
    woodTJI,
    woodLumber,
    woodCustom,
  } = optionData.wood.inputs;

  const concHorizGWPCalculated = concHorizGwp * concHoriz;

  const concVertGWPCalculated = concVertGwp * concVert;

  const concFoundGWPCalculated = concVertGwp * concFound;

  const concRebarGWPCalculated = steelRebarGwp * concRebar;

  const concCustomGWPCalculated = concCustom * 1; // to update

  const steelHotRolledGWPCalculated = steelHotRolledGwp * steelHotRolled;

  const steelHSSGWPCalculated = steelHSSGwp * steelHSS;

  const steelOWSJGWPCalculated = steelOWSJGwp * steelOWSJ;

  const steelPlateGWPCalculated = steelPlateGwp * steelPlate;

  const steelDeckGWPCalculated = steelDeckGwp * steelDeck;

  const steelCustomGWPCalculated = steelCustom * 1; // to update

  const woodCLTGWPCalculated = woodCLTGwp * woodCLT;

  const woodDltNltGWPCalculated = woodDltGwp * woodDltNlt;

  const woodMPPGWPCalculated = woodMPPGwp * woodMPP;

  const woodPlywoodGWPCalculated = woodSoftwoodPlywoodGwp * woodPlywood;

  const woodGlulamGWPCalculated = woodGlulamGwp * woodGlulam;

  const woodPslLslLvlGWPCalculated = woodPslLslLvlGwp * woodPslLslLvl;

  const woodTJIGWPCalculated = woodTJIGwp * woodTJI;

  const woodLumberGWPCalculated = woodSoftwoodLumberGwp * woodLumber;

  const woodCustomGWPCalculated = woodCustom * 1; // to update

  const concGWPTotal =
    concHorizGWPCalculated +
    concVertGWPCalculated +
    concFoundGWPCalculated +
    concRebarGWPCalculated +
    concCustomGWPCalculated;
  const steelGWPTotal =
    steelHotRolledGWPCalculated +
    steelHSSGWPCalculated +
    steelOWSJGWPCalculated +
    steelPlateGWPCalculated +
    steelDeckGWPCalculated +
    steelCustomGWPCalculated;
  const woodGWPTotal =
    woodCLTGWPCalculated +
    woodDltNltGWPCalculated +
    woodMPPGWPCalculated +
    woodPlywoodGWPCalculated +
    woodGlulamGWPCalculated +
    woodPslLslLvlGWPCalculated +
    woodTJIGWPCalculated +
    woodLumberGWPCalculated +
    woodCustomGWPCalculated;

  const GWPTotal = concGWPTotal + steelGWPTotal + woodGWPTotal;

  const concHorizPercentageCalculated =
    GWPTotal !== 0 ? Math.floor((concHorizGWPCalculated / GWPTotal) * 100) : 0;
  const concVertPercentageCalculated = Math.round(
    (concVertGWPCalculated / GWPTotal) * 100
  );
  const concFoundPercentageCalculated = Math.floor(
    (concFoundGWPCalculated / GWPTotal) * 100
  );
  const concRebarPercentageCalculated = Math.round(
    (concRebarGWPCalculated / GWPTotal) * 100
  );
  const concCustomPercentageCalculated = Math.round(
    (concCustomGWPCalculated / GWPTotal) * 100
  );
  const steelHotRolledPercentageCalculated = Math.round(
    (steelHotRolledGWPCalculated / GWPTotal) * 100
  );
  const steelHSSPercentageCalculated = Math.round(
    (steelHSSGWPCalculated / GWPTotal) * 100
  );
  const steelOWSJPercentageCalculated = Math.round(
    (steelOWSJGWPCalculated / GWPTotal) * 100
  );
  const steelPlatePercentageCalculated = Math.round(
    (steelPlateGWPCalculated / GWPTotal) * 100
  );
  const steelDeckPercentageCalculated = Math.round(
    (steelDeckGWPCalculated / GWPTotal) * 100
  );
  const steelCustomPercentageCalculated = Math.round(
    (steelCustomGWPCalculated / GWPTotal) * 100
  );
  const woodCLTPercentageCalculated = Math.round(
    (woodCLTGWPCalculated / GWPTotal) * 100
  );
  const woodDltNltPercentageCalculated = Math.round(
    (woodDltNltGWPCalculated / GWPTotal) * 100
  );
  const woodMPPPercentageCalculated = Math.round(
    (woodMPPGWPCalculated / GWPTotal) * 100
  );
  const woodPlywoodPercentageCalculated = Math.round(
    (woodPlywoodGWPCalculated / GWPTotal) * 100
  );
  const woodGlulamPercentageCalculated = Math.round(
    (woodGlulamGWPCalculated / GWPTotal) * 100
  );
  const woodPslLslLvlPercentageCalculated = Math.round(
    (woodPslLslLvlGWPCalculated / GWPTotal) * 100
  );
  const woodTJIPercentageCalculated = Math.round(
    (woodTJIGWPCalculated / GWPTotal) * 100
  );
  const woodLumberPercentageCalculated = Math.round(
    (woodLumberGWPCalculated / GWPTotal) * 100
  );
  const woodCustomPercentageCalculated = Math.round(
    (woodCustomGWPCalculated / GWPTotal) * 100
  );

  const concPercentageTotal =
    GWPTotal !== 0 ? Math.round((concGWPTotal / GWPTotal) * 100) : 0;
  const steelPercentageTotal =
    GWPTotal !== 0 ? Math.round((steelGWPTotal / GWPTotal) * 100) : 0;
  const woodPercentageTotal =
    GWPTotal !== 0 ? Math.round((woodGWPTotal / GWPTotal) * 100) : 0;
  const PercentageTotal =
    concPercentageTotal + steelPercentageTotal + woodPercentageTotal;
  const calculatedValues = {
    concrete: {
      concGWPTotal,
      concPercentageTotal,
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
    },
    steel: {
      steelGWPTotal,
      steelPercentageTotal,
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
    },
    wood: {
      woodGWPTotal,
      woodPercentageTotal,
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
    },
    totals: {
      GWPTotal,
      PercentageTotal,
    },
  };

  return calculatedValues;
};

export default calculateValues;
