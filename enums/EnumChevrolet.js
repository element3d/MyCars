import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genChevroletCruze2016(model) {
  model[EEngine.ChevroletCruze2016_14] = {
    title: "Chevrolet Cruze 1.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 1.4,
        power: 153,
        cyl: "L4 Turbo DOHC",
      },
    ],
  };
}

function genChevroletMalibu2016(model) {
  model[EEngine.ChevroletMalibu2016_15t] = {
    title: "Chevrolet Malibu 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 1.5,
        power: 163,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.ChevroletMalibu2016_20t] = {
    title: "Chevrolet Malibu 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.0,
        power: 250,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.ChevroletMalibu2016_18h] = {
    title: "Chevrolet Malibu 1.8 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 1.8,
        power: 182,
        cyl: "L4 + Electric",
      },
    ],
  };
}

function genChevroletCamaro2015(model) {
  model[EEngine.ChevroletCamaro2015_20t] = {
    title: "Chevrolet Camaro 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 2.0,
        power: 275,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.ChevroletCamaro2015_36] = {
    title: "Chevrolet Camaro 3.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 3.6,
        power: 335,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.ChevroletCamaro2015_62] = {
    title: "Chevrolet Camaro SS 6.2",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 6.2,
        power: 455,
        cyl: "V8",
      },
    ],
  };
}

export function genChevrolet(gMakes) {
  gMakes[EMake.Chevrolet] = {};

  // Cruze 2016
  gMakes[EMake.Chevrolet][ESerie.ChevroletCruze] = {};
  const cruze2016 = (gMakes[EMake.Chevrolet][ESerie.ChevroletCruze][
    EModel.ChevroletCruze2
  ] = {});
  genChevroletCruze2016(cruze2016);

  // Malibu 2016
  gMakes[EMake.Chevrolet][ESerie.ChevroletMalibu] = {};
  const malibu2016 = (gMakes[EMake.Chevrolet][ESerie.ChevroletMalibu][
    EModel.ChevroletMalibu9
  ] = {});
  genChevroletMalibu2016(malibu2016);

  // Camaro 2015
  gMakes[EMake.Chevrolet][ESerie.ChevroletCamaro] = {};
  const camaro2016 = (gMakes[EMake.Chevrolet][ESerie.ChevroletCamaro][
    EModel.ChevroletCamaro6
  ] = {});
  genChevroletCamaro2015(camaro2016);
}
