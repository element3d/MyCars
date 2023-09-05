import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genCivic2015(model) {
  model[EEngine.HondaCivic2015_15t] = {
    title: "Honda Civic 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 1.5,
        power: 174,
        cyl: "L4 Turbo",
      },
      {
        year: [2015, 2022],
        size: 1.5,
        power: 205,
        cyl: "L4 Turbo",
      },
      {
        year: [2015, 2022],
        size: 1.5,
        power: 180,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.HondaCivic2015_20] = {
    title: "Honda Civic 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 158,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.HondaCivic2015_16] = {
    title: "Honda Civic 1.6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 1.6,
        power: 125,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.HondaCivic2015_18] = {
    title: "Honda Civic 1.8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 1.8,
        power: 140,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.HondaCivic2015_TypeR] = {
    title: "Honda Civic 2.0 Type R",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 315,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genAccord2017(model) {
  model[EEngine.HondaAccord2017_15] = {
    title: "Honda Accord 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 1.5,
        power: 192,
        cyl: "L4 Turbo",
      },
      {
        year: [2017, 2023],
        size: 1.5,
        power: 187,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.HondaAccord2017_20] = {
    title: "Honda Accord 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 252,
        cyl: "L4 Turbo",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 143,
        cyl: "L4 + Electric",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 181,
        cyl: "L4 + Electric",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 212,
        cyl: "L4 + Electric",
      },
    ],
  };
}

export function genHonda(gMakes) {
  gMakes[EMake.Honda] = {};

  // Civic 2015
  gMakes[EMake.Honda][ESerie.HondaCivic] = {};
  const civic2015 = (gMakes[EMake.Honda][ESerie.HondaCivic][
    EModel.HondaCivic2015
  ] = {});
  genCivic2015(civic2015);

  // Accord 2017
  gMakes[EMake.Honda][ESerie.HondaAccord] = {};
  const accord2017 = (gMakes[EMake.Honda][ESerie.HondaAccord][
    EModel.HondaAccord2017
  ] = {});
  genAccord2017(accord2017);
}
