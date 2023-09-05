import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genAstraG(model) {
  model[EEngine.OpelAstraG_16] = {
    title: "Opel Astra G 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 1.6,
        power: 75,
        cyl: "L4",
      },
      {
        year: [2000, 2004],
        size: 1.6,
        power: 84,
        cyl: "L4",
      },
      {
        year: [2003, 2004],
        size: 1.6,
        power: 97,
        cyl: "L4",
      },
      {
        year: [1998, 2004],
        size: 1.6,
        power: 103,
        cyl: "L4 Ecotec",
      },
    ],
  };

  model[EEngine.OpelAstraG_18] = {
    title: "Opel Astra G 1.8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 1.8,
        power: 116,
        cyl: "L4 Ecotec",
      },
      {
        year: [2000, 2004],
        size: 1.8,
        power: 125,
        cyl: "L4 Ecotec",
      },
    ],
  };

  model[EEngine.OpelAstraG_20] = {
    title: "Opel Astra G 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 2.0,
        power: 136,
        cyl: "L4 Ecotec",
      },
      {
        year: [1999, 2002],
        size: 2.0,
        power: 160,
        cyl: "L4 Ecotec",
      },
    ],
  };

  model[EEngine.OpelAstraG_20t] = {
    title: "Opel Astra G 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2003],
        size: 2.0,
        power: 190,
        cyl: "L4 Turbo",
      },
      {
        year: [2003, 2004],
        size: 2.0,
        power: 200,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.OpelAstraG_22] = {
    title: "Opel Astra G 2.2",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2004],
        size: 2.2,
        power: 147,
        cyl: "L4",
      },
    ],
  };
}

export function genOpel(gMakes) {
  gMakes[EMake.Opel] = {};

  // Opel Astra G
  gMakes[EMake.Opel][ESerie.OpelAstra] = {};
  const astraG = (gMakes[EMake.Opel][ESerie.OpelAstra][EModel.OpelAstraG] = {});
  genAstraG(astraG);
}
