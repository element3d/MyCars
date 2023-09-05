import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genJeepCompass2017(model) {
  // 2017
  model[EEngine.JeepCompass2017_14] = {
    title: "Jeep Compass 1.4 MultiAir",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 1.4,
        power: 140,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.JeepCompass2017_20] = {
    title: "Jeep Compass 2.0 MultiAir",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 1.4,
        power: 168,
        cyl: "L4",
      },
    ],
  };
}

function genJeepCompass2020(model) {
  // 2017
  model[EEngine.JeepCompass2020_190] = {
    title: "Jeep Compass 190",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.3,
        power: 190,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.JeepCompass2020_240] = {
    title: "Jeep Compass 240",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.3,
        power: 240,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.JeepCompass2020_240th] = {
    title: "Jeep Compass 240 Trailhawk",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.3,
        power: 240,
        cyl: "L4 Hybrid",
      },
    ],
  };
}

function genJeepCherokeeKL(model) {
  // 2017
  model[EEngine.JeepCherokeeKL_20] = {
    title: "Jeep Cherokee 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 2.0,
        power: 270,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.JeepCherokeeKL_24] = {
    title: "Jeep Cherokee 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 2.4,
        power: 184,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.JeepCherokeeKL_24_multi] = {
    title: "Jeep Cherokee 2.4 MultiAir",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 2.4,
        power: 177,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.JeepCherokeeKL_32] = {
    title: "Jeep Cherokee 3.2",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 3.2,
        power: 271,
        cyl: "V6",
      },
    ],
  };
}

function genJeepGrandCherokee2017(model) {
  // 2017
  model[EEngine.JeepGrandCherokee2017_36] = {
    title: "Jeep Grand Cherokee 3.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 3.6,
        power: 286,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.JeepGrandCherokee2017_57] = {
    title: "Jeep Grand Cherokee 5.7 Hemi",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 5.7,
        power: 352,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.JeepGrandCherokee2017_62] = {
    title: "Jeep Grand Cher Trackhawk",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 6.2,
        power: 710,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.JeepGrandCherokee2017_64] = {
    title: "Jeep Grand Cherokee 6.4 SRT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 6.4,
        power: 468,
        cyl: "V8",
      },
    ],
  };
}

export function genJeep(gMakes) {
  gMakes[EMake.Jeep] = {};

  // compass
  gMakes[EMake.Jeep][ESerie.JeepCompass] = {};
  const compass2017 = (gMakes[EMake.Jeep][ESerie.JeepCompass][
    EModel.JeepCompass2017
  ] = {});
  genJeepCompass2017(compass2017);
  const compass2020 = (gMakes[EMake.Jeep][ESerie.JeepCompass][
    EModel.JeepCompass2020
  ] = {});
  genJeepCompass2020(compass2020);

  // cherokee
  gMakes[EMake.Jeep][ESerie.JeepCherokee] = {};
  const cher2013 = (gMakes[EMake.Jeep][ESerie.JeepCherokee][
    EModel.JeepCherokeeKL
  ] = {});
  genJeepCherokeeKL(cher2013);

  // grand cherokee
  gMakes[EMake.Jeep][ESerie.JeepGrandCherokee] = {};
  const gran = (gMakes[EMake.Jeep][ESerie.JeepGrandCherokee][
    EModel.JeepGrandCherokee2017
  ] = {});
  genJeepGrandCherokee2017(gran);
}
