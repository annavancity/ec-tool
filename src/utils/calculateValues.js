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

const calculateValues = (materialInputs) => {
  // Destructuring inputs for each material
  const { concrete, steel, wood } = materialInputs;
  const { concHoriz, concVert, concFound, concRebar, concCustom } =
    concrete.inputs;
  const {
    steelHotRolled,
    steelHSS,
    steelOWSJ,
    steelPlate,
    steelDeck,
    steelCustom,
  } = steel.inputs;
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
  } = wood.inputs;

  console.log("Concrete inputs:", concrete);
  console.log("Steel inputs:", steel);
  console.log("Wood inputs:", wood);

  const concGWPTotal =
    concHoriz + concVert + concFound + concRebar + concCustom;
  const steelGWPTotal =
    steelHotRolled +
    steelHSS +
    steelOWSJ +
    steelPlate +
    steelDeck +
    steelCustom;
  const woodGWPTotal =
    woodCLT +
    woodDltNlt +
    woodMPP +
    woodPlywood +
    woodGlulam +
    woodPslLslLvl +
    woodTJI +
    woodLumber +
    woodCustom;
  const GWPTotal = concGWPTotal + steelGWPTotal + woodGWPTotal;
  const concPercentageTotal =
    GWPTotal !== 0 ? Math.round((concGWPTotal / GWPTotal) * 100) : 0;
  const steelPercentageTotal =
    GWPTotal !== 0 ? Math.round((steelGWPTotal / GWPTotal) * 100) : 0;
  const woodPercentageTotal =
    GWPTotal !== 0 ? Math.round((woodGWPTotal / GWPTotal) * 100) : 0;
  const PercentageTotal =
    concPercentageTotal + steelPercentageTotal + woodPercentageTotal;
  const concHorizGWPCalculated = concHorizGwp * concHoriz;
  const concHorizPercentageCalculated =
    GWPTotal !== 0 ? Math.floor((concHorizGWPCalculated / GWPTotal) * 100) : 0;
  const concVertGWPCalculated = concVertGwp * concVert;
  const concVertPercentageCalculated = Math.round(
    (concVertGWPCalculated / GWPTotal) * 100
  );
  const concFoundGWPCalculated = concVertGwp * concFound;
  const concFoundPercentageCalculated = Math.floor(
    (concFoundGWPCalculated / GWPTotal) * 100
  );
  const concRebarGWPCalculated = steelRebarGwp * concRebar;
  const concRebarPercentageCalculated = Math.round(
    (concRebarGWPCalculated / GWPTotal) * 100
  );
  const concCustomGWPCalculated = 0;
  const concCustomPercentageCalculated = Math.round(
    (concCustomGWPCalculated / GWPTotal) * 100
  );
  const steelHotRolledGWPCalculated = steelHotRolledGwp * steelHotRolled;
  const steelHotRolledPercentageCalculated = Math.round(
    (steelHotRolledGWPCalculated / GWPTotal) * 100
  );
  const steelHSSGWPCalculated = steelHSSGwp * steelHSS;
  const steelHSSPercentageCalculated = Math.round(
    (steelHSSGWPCalculated / GWPTotal) * 100
  );
  const steelOWSJGWPCalculated = steelOWSJGwp * steelOWSJ;
  const steelOWSJPercentageCalculated = Math.round(
    (steelOWSJGWPCalculated / GWPTotal) * 100
  );
  const steelPlateGWPCalculated = steelPlateGwp * steelPlate;
  const steelPlatePercentageCalculated = Math.round(
    (steelPlateGWPCalculated / GWPTotal) * 100
  );
  const steelDeckGWPCalculated = steelDeckGwp * steelDeck;
  const steelDeckPercentageCalculated = Math.round(
    (steelDeckGWPCalculated / GWPTotal) * 100
  );
  const steelCustomGWPCalculated = 0;
  const steelCustomPercentageCalculated = Math.round(
    (steelCustomGWPCalculated / GWPTotal) * 100
  );
  const woodCLTGWPCalculated = woodCLTGwp * woodCLT;
  const woodCLTPercentageCalculated = Math.round(
    (woodCLTGWPCalculated / GWPTotal) * 100
  );
  const woodDltNltGWPCalculated = woodDltGwp * woodDltNlt;
  const woodDltNltPercentageCalculated = Math.round(
    (woodDltNltGWPCalculated / GWPTotal) * 100
  );
  const woodMPPGWPCalculated = woodMPPGwp * woodMPP;
  const woodMPPPercentageCalculated = Math.round(
    (woodMPPGWPCalculated / GWPTotal) * 100
  );
  const woodPlywoodGWPCalculated = woodSoftwoodPlywoodGwp * woodPlywood;
  const woodPlywoodPercentageCalculated = Math.round(
    (woodPlywoodGWPCalculated / GWPTotal) * 100
  );
  const woodGlulamGWPCalculated = woodGlulamGwp * woodGlulam;
  const woodGlulamPercentageCalculated = Math.round(
    (woodGlulamGWPCalculated / GWPTotal) * 100
  );
  const woodPslLslLvlGWPCalculated = woodPslLslLvlGwp * woodPslLslLvl;
  const woodPslLslLvlPercentageCalculated = Math.round(
    (woodPslLslLvlGWPCalculated / GWPTotal) * 100
  );
  const woodTJIGWPCalculated = woodTJIGwp * woodTJI;
  const woodTJIPercentageCalculated = Math.round(
    (woodTJIGWPCalculated / GWPTotal) * 100
  );
  const woodLumberGWPCalculated = woodSoftwoodLumberGwp * woodLumber;
  const woodLumberPercentageCalculated = Math.round(
    (woodLumberGWPCalculated / GWPTotal) * 100
  );
  const woodCustomGWPCalculated = 0;
  const woodCustomPercentageCalculated = Math.round(
    (woodCustomGWPCalculated / GWPTotal) * 100
  );
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
