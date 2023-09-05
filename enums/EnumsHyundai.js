import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genElantra2015(model) {
  model[EEngine.HyundaiElantra2015_14] = {
    title: "Hyundai Elantra 1.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 1.4,
        power: 128,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiElantra2015_16] = {
    title: "Hyundai Elantra 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 1.6,
        power: 126,
        cyl: "L4",
      },
      {
        year: [2018, 2020],
        size: 1.6,
        power: 121,
        cyl: "L4",
      },
      {
        year: [2016, 2020],
        size: 1.6,
        power: 201,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiElantra2015_20] = {
    title: "Hyundai Elantra 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 2.0,
        power: 154,
        cyl: "L4",
      },
    ],
  };
}

function genElantra2020(model) {
  model[EEngine.HyundaiElantra2020_14] = {
    title: "Hyundai Elantra 1.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.4,
        power: 138,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiElantra2020_15] = {
    title: "Hyundai Elantra 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.5,
        power: 113,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.HyundaiElantra2020_16] = {
    title: "Hyundai Elantra 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.6,
        power: 126,
        cyl: "L4",
      },
      {
        year: [2020, 2023],
        size: 1.6,
        power: 121,
        cyl: "L4",
      },
      {
        year: [2020, 2023],
        size: 1.6,
        power: 201,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiElantra2020_20] = {
    title: "Hyundai Elantra 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 2.0,
        power: 157,
        cyl: "L4",
      },
      {
        year: [2020, 2023],
        size: 2.0,
        power: 276,
        cyl: "L4 Turbo GDI",
      },
    ],
  };
}

function genSonata2014(model) {
  model[EEngine.HyundaiSonata2014_16] = {
    title: "Hyundai Sonata 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 1.6,
        power: 178,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSonata2014_20] = {
    title: "Hyundai Sonata 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2019],
        size: 2.0,
        power: 166,
        cyl: "L4 MPI",
      },
      {
        year: [2015, 2019],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSonata2014_24] = {
    title: "Hyundai Sonata 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2019],
        size: 2.4,
        power: 176,
        cyl: "L4 MPI",
      },
      {
        year: [2014, 2019],
        size: 2.0,
        power: 190,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSonata2014_20h] = {
    title: "Hyundai Sonata 2.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2014, 2019],
        size: 2.0,
        power: 192,
        cyl: "L4 GDI Hybrid",
      },
      {
        year: [2015, 2019],
        size: 2.0,
        power: 202,
        cyl: "L4 GDI Hybrid",
      },
    ],
  };
}

function genSonata2019(model) {
  model[EEngine.HyundaiSonata2019_15] = {
    title: "Hyundai Sonata 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 1.5,
        power: 168,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSonata2019_16] = {
    title: "Hyundai Sonata 1.6",
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

  model[EEngine.HyundaiSonata2019_20] = {
    title: "Hyundai Sonata 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 237,
        cyl: "L4 Turbo GDI",
      },
      {
        year: [2020, 2023],
        size: 2.0,
        power: 150,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.HyundaiSonata2019_25] = {
    title: "Hyundai Sonata 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.5,
        power: 178,
        cyl: "L4",
      },
      {
        year: [2019, 2023],
        size: 2.5,
        power: 191,
        cyl: "L4 GDI",
      },
      {
        year: [2020, 2023],
        size: 2.5,
        power: 286,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSonata2019_20h] = {
    title: "Hyundai Sonata 2.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 192,
        cyl: "L4 Hybrid GDI",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 202,
        cyl: "L4 Hybrid GDI",
      },
    ],
  };
}

function genKona2017(model) {
  model[EEngine.HyundaiKona2017_10] = {
    title: "Hyundai Kona 1.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 1.0,
        power: 118,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiKona2017_16] = {
    title: "Hyundai Kona 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2020],
        size: 1.6,
        power: 175,
        cyl: "L4 Turbo GDI",
      },
      {
        year: [2020, 2023],
        size: 1.6,
        power: 195,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiKona2017_20] = {
    title: "Hyundai Kona 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 147,
        cyl: "L4 MPI",
      },
      {
        year: [2021, 2023],
        size: 2.0,
        power: 276,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiKona2017_16h] = {
    title: "Hyundai Sonata 1.6 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 1.6,
        power: 139,
        cyl: "L4 GDI Hybrid",
      },
    ],
  };

  model[EEngine.HyundaiKona2017_e] = {
    title: "Hyundai Sonata Electric",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2018, 2023],
        size: 0.0,
        power: 134,
        cyl: "Electric",
      },
      {
        year: [2018, 2023],
        size: 0.0,
        power: 201,
        cyl: "Electric",
      },
    ],
  };
}

function genTucson2015(model) {
  model[EEngine.HyundaiTucson2015_16] = {
    title: "Hyundai Tucson 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 1.6,
        power: 130,
        cyl: "L4 GDI",
      },
      {
        year: [2015, 2020],
        size: 1.6,
        power: 175,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2015_20] = {
    title: "Hyundai Tucson 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 2.0,
        power: 153,
        cyl: "L4 MPI",
      },
      {
        year: [2015, 2020],
        size: 2.0,
        power: 161,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2015_24] = {
    title: "Hyundai Tucson 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 2.4,
        power: 174,
        cyl: "L4 MPI",
      },
      {
        year: [2015, 2020],
        size: 2.4,
        power: 181,
        cyl: "L4 GDI",
      },
    ],
  };
}

function genTucson2020(model) {
  model[EEngine.HyundaiTucson2020_15] = {
    title: "Hyundai Tucson 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.5,
        power: 197,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2020_16] = {
    title: "Hyundai Tucson 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.6,
        power: 178,
        cyl: "L4 Turbp GDI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2020_20] = {
    title: "Hyundai Tucson 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 154,
        cyl: "L4 MPI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2020_25] = {
    title: "Hyundai Tucson 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.5,
        power: 184,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.HyundaiTucson2020_16h] = {
    title: "Hyundai Tucson 1.6 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 1.6,
        power: 148,
        cyl: "L4 Turbo GDI Hybrid",
      },
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

function genSantaFe2012(model) {
  model[EEngine.HyundaiSantaFe2012_20] = {
    title: "Hyundai Santa Fe 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 2.0,
        power: 264,
        cyl: "L4 Turbo GDI",
      },
      {
        year: [2015, 2018],
        size: 2.0,
        power: 240,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2012_24] = {
    title: "Hyundai Santa Fe 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2018],
        size: 2.4,
        power: 174,
        cyl: "L4 MPI",
      },
      {
        year: [2012, 2018],
        size: 2.4,
        power: 190,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2012_33] = {
    title: "Hyundai Santa Fe 3.3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2018],
        size: 3.3,
        power: 266,
        cyl: "V6 MPI",
      },
      {
        year: [2012, 2018],
        size: 3.3,
        power: 290,
        cyl: "V6 GDI",
      },
    ],
  };
}

function genSantaFe2018(model) {
  model[EEngine.HyundaiSantaFe2018_20] = {
    title: "Hyundai Santa Fe 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 2.0,
        power: 235,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2018_24] = {
    title: "Hyundai Santa Fe 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 2.4,
        power: 170,
        cyl: "L4 MPI",
      },
      {
        year: [2018, 2020],
        size: 2.4,
        power: 185,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2018_25] = {
    title: "Hyundai Santa Fe 2.5",
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
        power: 190,
        cyl: "L4 GDI",
      },
      {
        year: [2020, 2023],
        size: 2.5,
        power: 277,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2018_35] = {
    title: "Hyundai Santa Fe 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 3.5,
        power: 276,
        cyl: "V6 MPI",
      },
      {
        year: [2020, 2023],
        size: 3.5,
        power: 268,
        cyl: "V6 MPI",
      },
    ],
  };

  model[EEngine.HyundaiSantaFe2018_16h] = {
    title: "Hyundai Santa Fe 1.6 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 1.6,
        power: 227,
        cyl: "L4 Turbo GDI Hybrid",
      },
      {
        year: [2020, 2023],
        size: 1.6,
        power: 261,
        cyl: "L4 Turbo GDI Hybrid",
      },
    ],
  };
}

export function genHyundai(gMakes) {
  gMakes[EMake.Hyundai] = {};

  // Elantra 2015
  gMakes[EMake.Hyundai][ESerie.HyundaiElantra] = {};
  const elantra2015 = (gMakes[EMake.Hyundai][ESerie.HyundaiElantra][
    EModel.HyundaiElantra2015
  ] = {});
  genElantra2015(elantra2015);

  const elantra2020 = (gMakes[EMake.Hyundai][ESerie.HyundaiElantra][
    EModel.HyundaiElantra2020
  ] = {});
  genElantra2020(elantra2020);

  // Sonata 2019
  gMakes[EMake.Hyundai][ESerie.HyundaiSonata] = {};
  const sonata2014 = (gMakes[EMake.Hyundai][ESerie.HyundaiSonata][
    EModel.HyundaiSonata2014
  ] = {});
  genSonata2014(sonata2014);

  const sonata2019 = (gMakes[EMake.Hyundai][ESerie.HyundaiSonata][
    EModel.HyundaiSonata2019
  ] = {});
  genSonata2019(sonata2019);

  // Kona 2017
  gMakes[EMake.Hyundai][ESerie.HyundaiKona] = {};
  const kona2017 = (gMakes[EMake.Hyundai][ESerie.HyundaiKona][
    EModel.HyundaiKona1
  ] = {});
  genKona2017(kona2017);

  // Tucson 2015
  gMakes[EMake.Hyundai][ESerie.HyundaiTucson] = {};
  const tucson2015 = (gMakes[EMake.Hyundai][ESerie.HyundaiTucson][
    EModel.HyundaiTucson2015
  ] = {});
  genTucson2015(tucson2015);

  const tucson2020 = (gMakes[EMake.Hyundai][ESerie.HyundaiTucson][
    EModel.HyundaiTucson2020
  ] = {});
  genTucson2020(tucson2020);

  // Santa fe 2012
  gMakes[EMake.Hyundai][ESerie.HyundaiSantaFe] = {};
  const santafe2012 = (gMakes[EMake.Hyundai][ESerie.HyundaiSantaFe][
    EModel.HyundaiSantaFe2012
  ] = {});
  genSantaFe2012(santafe2012);

  const santafe2018 = (gMakes[EMake.Hyundai][ESerie.HyundaiSantaFe][
    EModel.HyundaiSantaFe2018
  ] = {});
  genSantaFe2018(santafe2018);
}
