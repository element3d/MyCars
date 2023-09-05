import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genQ502013(model) {
  model[EEngine.InfinitiQ502013_37] = {
    title: "Infiniti Q50 3.7",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2015],
        size: 3.7,
        power: 328,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.InfinitiQ502013_20t] = {
    title: "Infiniti Q50 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.InfinitiQ502013_30t] = {
    title: "Infiniti Q50 3.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 3.0,
        power: 300,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.InfinitiQ502013_30_rs] = {
    title: "Infiniti Q50 Red Sport 400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 3.0,
        power: 400,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.InfinitiQ502013_h] = {
    title: "Infiniti Q50 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2014, 2018],
        size: 3.5,
        power: 359,
        cyl: "V6 Hybrid",
      },
    ],
  };
}

function genQ602016(model) {
  model[EEngine.InfinitiQ602016_20t] = {
    title: "Infiniti Q60 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.InfinitiQ602016_30t] = {
    title: "Infiniti Q60 3.0 Biturbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 3.0,
        power: 300,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.InfinitiQ602016_rs] = {
    title: "Infiniti Q60 Red Sport 400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 3.0,
        power: 400,
        cyl: "V6 Biturbo",
      },
    ],
  };
}

function genQX302016(model) {
  model[EEngine.InfinitiQ602016_20t] = {
    title: "Infiniti Q60 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genQX502019(model) {
  model[EEngine.InfinitiQX502019_20t] = {
    title: "Infiniti QX50 2.0 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 268,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genQX602013(model) {
  model[EEngine.InfinitiQX602013_35] = {
    title: "Infiniti QX60 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2017],
        size: 3.5,
        power: 265,
        cyl: "V6",
      },
      {
        year: [2017, 2020],
        size: 3.5,
        power: 295,
        cyl: "V6",
      },
    ],
  };
}

export function genInfiniti(gMakes) {
  gMakes[EMake.Infiniti] = {};

  // IS 2013
  gMakes[EMake.Infiniti][ESerie.InfinitiQ50] = {};
  const q502013 = (gMakes[EMake.Infiniti][ESerie.InfinitiQ50][
    EModel.InfinitiQ502013
  ] = {});
  genQ502013(q502013);

  gMakes[EMake.Infiniti][ESerie.InfinitiQ60] = {};
  const q602016 = (gMakes[EMake.Infiniti][ESerie.InfinitiQ60][
    EModel.InfinitiQ602016
  ] = {});
  genQ602016(q602016);

  gMakes[EMake.Infiniti][ESerie.InfinitiQX30] = {};
  const qx302016 = (gMakes[EMake.Infiniti][ESerie.InfinitiQX30][
    EModel.InfinitiQX302016
  ] = {});
  genQX302016(qx302016);

  gMakes[EMake.Infiniti][ESerie.InfinitiQX50Series] = {};
  const qx502019 = (gMakes[EMake.Infiniti][ESerie.InfinitiQX50Series][
    EModel.InfinitiQX502
  ] = {});
  genQX502019(qx502019);

  gMakes[EMake.Infiniti][ESerie.InfinitiQX60Series] = {};
  const qx602013 = (gMakes[EMake.Infiniti][ESerie.InfinitiQX60Series][
    EModel.InfinitiQX602013
  ] = {});
  genQX602013(qx602013);
}
