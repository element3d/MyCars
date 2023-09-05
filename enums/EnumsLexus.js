import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genIs2013(model) {
  model[EEngine.LexusIS2013_250] = {
    title: "Lexus IS 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2015],
        size: 2.5,
        power: 204,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.LexusIS2013_200t] = {
    title: "Lexus IS 200 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2017],
        size: 2.0,
        power: 241,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusIS2013_300] = {
    title: "Lexus IS 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 241,
        cyl: "L4 Turbo",
      },
      {
        year: [2015, 2023],
        size: 3.5,
        power: 255,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.LexusIS2013_350] = {
    title: "Lexus IS 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2023],
        size: 3.5,
        power: 306,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.LexusIS2013_300h] = {
    title: "Lexus IS 300 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2023],
        size: 2.5,
        power: 220,
        cyl: "L4 + Electric",
      },
    ],
  };

  model[EEngine.LexusIS2013_500F] = {
    title: "Lexus IS 500 F SPORT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 5.0,
        power: 472,
        cyl: "V8",
      },
    ],
  };
}

function genEs2018(model) {
  model[EEngine.LexusES2018_200] = {
    title: "Lexus ES 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 173,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusES2018_250] = {
    title: "Lexus ES 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.5,
        power: 204,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusES2018_300h] = {
    title: "Lexus ES 300 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 2.5,
        power: 210,
        cyl: "L4 + Electric",
      },
    ],
  };

  model[EEngine.LexusES2018_350] = {
    title: "Lexus ES 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.5,
        power: 302,
        cyl: "V6",
      },
    ],
  };
}

function genNX2014(model) {
  model[EEngine.LexusNX2014_200] = {
    title: "Lexus NX 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2021],
        size: 2.0,
        power: 148,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusNX2014_200t] = {
    title: "Lexus NX 200 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2021],
        size: 2.0,
        power: 235,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusNX2014_300] = {
    title: "Lexus NX 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2021],
        size: 2.0,
        power: 235,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusNX2014_300h] = {
    title: "Lexus NX 300 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2014, 2021],
        size: 2.5,
        power: 194,
        cyl: "L4 + Electric",
      },
    ],
  };
}

function genNX2021(model) {
  model[EEngine.LexusNX2021_200] = {
    title: "Lexus NX 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 168,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusNX2021_350] = {
    title: "Lexus NX 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.4,
        power: 275,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusNX2021_250] = {
    title: "Lexus NX 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.5,
        power: 204,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusNX2021_350h] = {
    title: "Lexus NX 350 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2021, 2023],
        size: 2.5,
        power: 240,
        cyl: "L4 + Electric",
      },
    ],
  };

  model[EEngine.LexusNX2021_400h] = {
    title: "Lexus NX 400 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2021, 2023],
        size: 2.5,
        power: 261,
        cyl: "L4 + Electric",
      },
    ],
  };

  model[EEngine.LexusNX2021_450h] = {
    title: "Lexus NX 450 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2021, 2023],
        size: 2.5,
        power: 304,
        cyl: "L4 + Electric",
      },
    ],
  };
}

function genRX2015(model) {
  model[EEngine.LexusRX2015_200t] = {
    title: "Lexus RX 200 Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 235,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusRX2015_300] = {
    title: "Lexus RX 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 235,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusRX2015_350] = {
    title: "Lexus RX 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 3.5,
        power: 295,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.LexusRX2015_450h] = {
    title: "Lexus RX 450 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 3.5,
        power: 308,
        cyl: "V6",
      },
    ],
  };
}

function genRX2023(model) {
  model[EEngine.LexusRX2023_350] = {
    title: "Lexus RX 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2023, 2023],
        size: 2.4,
        power: 275,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.LexusRX2023_350h] = {
    title: "Lexus RX 350 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.5,
        power: 245,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.LexusRX2023_450h] = {
    title: "Lexus RX 450 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.5,
        power: 304,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.LexusRX2023_500h] = {
    title: "Lexus RX 500 Hybrid F SPORT",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.4,
        power: 367,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };
}

function genGX2009(model) {
  model[EEngine.LexusGX2009_460] = {
    title: "Lexus GX 460",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2023],
        size: 4.6,
        power: 301,
        cyl: "V8",
      },
    ],
  };
}

function genLX2008(model) {
  model[EEngine.LexusLX2008_570] = {
    title: "Lexus LX 570",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 5.7,
        power: 383,
        cyl: "V8",
      },
    ],
  };
}

export function genLexus(gMakes) {
  gMakes[EMake.Lexus] = {};

  // IS 2013
  gMakes[EMake.Lexus][ESerie.LexusIS] = {};
  const is2013 = (gMakes[EMake.Lexus][ESerie.LexusIS][EModel.LexusIS2013] = {});
  genIs2013(is2013);

  // ES 2018
  gMakes[EMake.Lexus][ESerie.LexusES] = {};
  const es2018 = (gMakes[EMake.Lexus][ESerie.LexusES][EModel.LexusES2018] = {});
  genEs2018(es2018);

  // nx 2014
  gMakes[EMake.Lexus][ESerie.LexusNX] = {};
  const nx2014 = (gMakes[EMake.Lexus][ESerie.LexusNX][EModel.LexusNX1] = {});
  genNX2014(nx2014);

  // nx 2021
  const nx2021 = (gMakes[EMake.Lexus][ESerie.LexusNX][EModel.LexusNX2] = {});
  genNX2021(nx2021);

  // rx 2015
  gMakes[EMake.Lexus][ESerie.LexusRX] = {};
  const rx2015 = (gMakes[EMake.Lexus][ESerie.LexusRX][EModel.LexusRX4] = {});
  genRX2015(rx2015);

  const rx2023 = (gMakes[EMake.Lexus][ESerie.LexusRX][EModel.LexusRX5] = {});
  genRX2023(rx2023);

  // gx 2009
  gMakes[EMake.Lexus][ESerie.LexusGX] = {};
  const gx2009 = (gMakes[EMake.Lexus][ESerie.LexusGX][EModel.LexusGX2] = {});
  genGX2009(gx2009);

  // lx 2008
  gMakes[EMake.Lexus][ESerie.LexusLX] = {};
  const lx2008 = (gMakes[EMake.Lexus][ESerie.LexusLX][EModel.LexusLX3] = {});
  genLX2008(lx2008);
}
