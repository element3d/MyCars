import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genForte2018(model) {
  model[EEngine.KIAForte2018_14] = {
    title: "Kia Forte 1.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.4,
        power: 128,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.KIAForte2018_15] = {
    title: "Kia Forte 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.5,
        power: 113,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.KIAForte2018_16] = {
    title: "Kia Forte 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.6,
        power: 126,
        cyl: "L4",
      },
      {
        year: [2018, 2023],
        size: 1.6,
        power: 121,
        cyl: "L4",
      },
      {
        year: [2018, 2023],
        size: 1.6,
        power: 204,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.KIAForte2018_20] = {
    title: "Kia Forte 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 147,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.KIAForte2018_16h] = {
    title: "Kia Forte 1.6 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.6,
        power: 139,
        cyl: "L4 + Electric",
      },
    ],
  };
}

function genOptima2015(model) {
  model[EEngine.KIAOptima2015_16] = {
    title: "Kia Optima 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 1.6,
        power: 178,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAOptima2015_20] = {
    title: "Kia Optima 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 2.0,
        power: 202,
        cyl: "L4 GDI",
      },
      {
        year: [2015, 2019],
        size: 2.0,
        power: 161,
        cyl: "L4",
      },
      {
        year: [2015, 2019],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo GDI",
      },
      {
        year: [2015, 2021],
        size: 2.0,
        power: 151,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.KIAOptima2015_24] = {
    title: "Kia Optima 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 2.4,
        power: 185,
        cyl: "L4 GDI",
      },
    ],
  };
}

function genK5(model) {
  model[EEngine.KIAK5_15] = {
    title: "Kia K5 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.5,
        power: 168,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAK5_16] = {
    title: "Kia K5 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 1.6,
        power: 178,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAK5_20] = {
    title: "Kia K5 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 144,
        cyl: "L4",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 158,
        cyl: "L4",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 192,
        cyl: "L4 Hybrid",
      },
      {
        year: [2020, 2023],
        size: 2.0,
        power: 237,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAK5_25] = {
    title: "Kia K5 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.5,
        power: 191,
        cyl: "L4 GDI",
      },
      {
        year: [2019, 2023],
        size: 2.5,
        power: 286,
        cyl: "L4 Turbo GDI",
      },
    ],
  };
}

function genStinger2018(model) {
  model[EEngine.KIAStinger2018_20] = {
    title: "Kia Stinger 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 194,
        cyl: "L4 Turbo GDI",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 252,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAStinger2018_25] = {
    title: "Kia Stinger 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 2.5,
        power: 300,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIAStinger2018_33] = {
    title: "Kia Stinger 3.3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 3.3,
        power: 365,
        cyl: "V6 Turbo GDI",
      },
    ],
  };
}

function genSportage2015(model) {
  model[EEngine.KIASportage2015_16] = {
    title: "Kia Sportage 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2021],
        size: 1.6,
        power: 130,
        cyl: "L4",
      },
      {
        year: [2015, 2021],
        size: 1.6,
        power: 178,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIASportage2015_20] = {
    title: "Kia Sportage 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2021],
        size: 2.0,
        power: 161,
        cyl: "L4",
      },
      {
        year: [2015, 2021],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIASportage2015_24] = {
    title: "Kia Sportage 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2021],
        size: 2.4,
        power: 185,
        cyl: "L4",
      },
    ],
  };
}

function genSorento2009(model) {
  model[EEngine.KIASorento2009_24] = {
    title: "Kia Sorento 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2014],
        size: 2.4,
        power: 175,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.KIASorento2009_33] = {
    title: "Kia Sorento 3.3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2014],
        size: 3.3,
        power: 242,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.KIASorento2009_35] = {
    title: "Kia Sorento 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2014],
        size: 3.5,
        power: 276,
        cyl: "V6",
      },
    ],
  };
}

function genSorento2014(model) {
  model[EEngine.KIASorento2014_20] = {
    title: "Kia Sorento 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 2.0,
        power: 240,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.KIASorento2014_24] = {
    title: "Kia Sorento 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 2.4,
        power: 185,
        cyl: "L4 GDI",
      },
      {
        year: [2014, 2020],
        size: 2.4,
        power: 172,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.KIASorento2014_33] = {
    title: "Kia Sorento 3.3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 3.3,
        power: 290,
        cyl: "V6 GDI",
      },
      {
        year: [2014, 2020],
        size: 3.3,
        power: 266,
        cyl: "V6 MPI",
      },
    ],
  };
}

function genSorento2020(model) {
  model[EEngine.KIASorento2020_25] = {
    title: "Kia Sorento 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 2.5,
        power: 178,
        cyl: "L4 MPI",
      },
      {
        year: [2020, 2023],
        size: 2.5,
        power: 191,
        cyl: "L4 GDI",
      },
      {
        year: [2020, 2023],
        size: 2.5,
        power: 281,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.KIASorento2020_35] = {
    title: "Kia Sorento 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 3.5,
        power: 268,
        cyl: "V6 MPI",
      },
    ],
  };

  model[EEngine.KIASorento2020_16h] = {
    title: "Kia Sorento 1.6 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 1.6,
        power: 227,
        cyl: "L4 Turbo GDI Hybrid",
      },
      {
        year: [2021, 2023],
        size: 1.6,
        power: 261,
        cyl: "L4 Turbo GDI Hybrid",
      },
    ],
  };
}

export function genKia(gMakes) {
  gMakes[EMake.Kia] = {};

  // Forte 2018
  gMakes[EMake.Kia][ESerie.KIAForte] = {};
  const forte2018 = (gMakes[EMake.Kia][ESerie.KIAForte][EModel.KIAForte2018] =
    {});
  genForte2018(forte2018);

  // Optima 2015
  gMakes[EMake.Kia][ESerie.KIAOptima] = {};
  const optima2015 = (gMakes[EMake.Kia][ESerie.KIAOptima][
    EModel.KIAOptima2015
  ] = {});
  genOptima2015(optima2015);

  // K5
  gMakes[EMake.Kia][ESerie.KIAK5] = {};
  const k5 = (gMakes[EMake.Kia][ESerie.KIAK5][EModel.KIAK52019] = {});
  genK5(k5);

  // Stinger
  gMakes[EMake.Kia][ESerie.KIAStinger] = {};
  const stinger2018 = (gMakes[EMake.Kia][ESerie.KIAStinger][
    EModel.KIAStinger2018
  ] = {});
  genStinger2018(stinger2018);

  // Sportage 2015
  gMakes[EMake.Kia][ESerie.KIASportage] = {};
  const sportage2015 = (gMakes[EMake.Kia][ESerie.KIASportage][
    EModel.KIASportage2015
  ] = {});
  genSportage2015(sportage2015);

  // Sorento 2009
  gMakes[EMake.Kia][ESerie.KIASorento] = {};
  const sorento2009 = (gMakes[EMake.Kia][ESerie.KIASorento][
    EModel.KIASorento2009
  ] = {});
  genSorento2009(sorento2009);

  const sorento2014 = (gMakes[EMake.Kia][ESerie.KIASorento][
    EModel.KIASorento2014
  ] = {});
  genSorento2014(sorento2014);

  const sorento2020 = (gMakes[EMake.Kia][ESerie.KIASorento][
    EModel.KIASorento2020
  ] = {});
  genSorento2020(sorento2020);
}
