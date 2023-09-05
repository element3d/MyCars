import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genRangeRover2012(model) {
  model[EEngine.LandRoverRangeRover2012_20h] = {
    title: "Range Rover 2.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2012, 2021],
        size: 2.0,
        power: 398,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.LandRoverRangeRover2012_30] = {
    title: "Range Rover 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2021],
        size: 3.0,
        power: 335,
        cyl: "V6 Supercharged",
      },
      {
        year: [2012, 2021],
        size: 3.0,
        power: 375,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.LandRoverRangeRover2012_50] = {
    title: "Range Rover 5.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2013],
        size: 5.0,
        power: 370,
        cyl: "V8",
      },
      {
        year: [2013, 2016],
        size: 5.0,
        power: 503,
        cyl: "V8 Supercharged",
      },
      {
        year: [2017, 2021],
        size: 5.0,
        power: 518,
        cyl: "V8 Supercharged",
      },
      {
        year: [2015, 2016],
        size: 5.0,
        power: 542,
        cyl: "V8 Supercharged",
      },
      {
        year: [2017, 2021],
        size: 5.0,
        power: 557,
        cyl: "V8 Supercharged",
      },
    ],
  };
}

function genRangeRover2022(model) {
  model[EEngine.LandRoverRangeRover2022_30] = {
    title: "Range Rover 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2022, 2023],
        size: 3.0,
        power: 355,
        cyl: "L6 Turbo",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 395,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.LandRoverRangeRover2022_44] = {
    title: "Range Rover 4.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2022, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.LandRoverRangeRover2022_30h] = {
    title: "Range Rover 3.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2022, 2023],
        size: 3.0,
        power: 434,
        cyl: "L6 Turbo Hybrid",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 503,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };
}

function genRangeRoverSport2013(model) {
  model[EEngine.LandRoverRangeRoverSport2013_20h] = {
    title: "Range Rover Sport 2.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2013, 2022],
        size: 2.0,
        power: 398,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverSport2013_30] = {
    title: "Range Rover Sport 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2022],
        size: 3.0,
        power: 335,
        cyl: "V6 Supercharged",
      },
      {
        year: [2013, 2022],
        size: 3.0,
        power: 394,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverSport2013_50] = {
    title: "Range Rover Sport 5.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2022],
        size: 5.0,
        power: 503,
        cyl: "V8 Supercharged",
      },
      {
        year: [2013, 2022],
        size: 5.0,
        power: 567,
        cyl: "V8 Supercharged",
      },
    ],
  };
}

function genRangeRoverSport2022(model) {
  model[EEngine.LandRoverRangeRoverSport2022_30] = {
    title: "Range Rover Sport 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2022, 2023],
        size: 3.0,
        power: 355,
        cyl: "L6 Turbo",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 395,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverSport2022_44] = {
    title: "Range Rover Sport 4.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2022, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
      {
        year: [2022, 2023],
        size: 4.4,
        power: 626,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverSport2022_30h] = {
    title: "Range Rover Sport 3.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2022, 2023],
        size: 3.0,
        power: 434,
        cyl: "L6 Turbo Hybrid",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 454,
        cyl: "L6 Turbo Hybrid",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 503,
        cyl: "L6 Turbo Hybrid",
      },
      {
        year: [2022, 2023],
        size: 3.0,
        power: 542,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };
}

function genRangeRoverVelar2017(model) {
  model[EEngine.LandRoverRangeRoverVelar2017_20] = {
    title: "Range Rover Sport 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 247,
        cyl: "L4 Turbo",
      },
      {
        year: [2017, 2020],
        size: 2.0,
        power: 296,
        cyl: "L4 Biturbo",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverVelar2017_20h] = {
    title: "Range Rover Sport 2.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 2.0,
        power: 398,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverVelar2017_30] = {
    title: "Range Rover Sport 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 335,
        cyl: "V6 Supercharged",
      },
      {
        year: [2017, 2020],
        size: 3.0,
        power: 375,
        cyl: "V6 Supercharged",
      },
      {
        year: [2020, 2023],
        size: 3.0,
        power: 395,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.LandRoverRangeRoverVelar2017_50] = {
    title: "Range Rover Sport 5.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2020],
        size: 5.0,
        power: 542,
        cyl: "V8 Supercharged",
      },
    ],
  };
}

export function genLandRover(gMakes) {
  gMakes[EMake.LandRover] = {};

  // range2012
  gMakes[EMake.LandRover][ESerie.LandRoverRangeRover] = {};
  const range2012 = (gMakes[EMake.LandRover][ESerie.LandRoverRangeRover][
    EModel.LandRoverRangeRover2012
  ] = {});
  genRangeRover2012(range2012);

  const range2022 = (gMakes[EMake.LandRover][ESerie.LandRoverRangeRover][
    EModel.LandRoverRangeRover2022
  ] = {});
  genRangeRover2022(range2022);

  // range sport
  gMakes[EMake.LandRover][ESerie.LandRoverRangeRoverSport] = {};
  const sport2013 = (gMakes[EMake.LandRover][ESerie.LandRoverRangeRoverSport][
    EModel.LandRoverRangeRoverSport2013
  ] = {});
  genRangeRoverSport2013(sport2013);

  const sport2022 = (gMakes[EMake.LandRover][ESerie.LandRoverRangeRoverSport][
    EModel.LandRoverRangeRoverSport2022
  ] = {});
  genRangeRoverSport2022(sport2022);

  // range velar
  gMakes[EMake.LandRover][ESerie.LandRoverRangeRoverVelar] = {};
  const velar2017 = (gMakes[EMake.LandRover][ESerie.LandRoverRangeRoverVelar][
    EModel.LandRoverRangeRoverVelar2017
  ] = {});
  genRangeRoverVelar2017(velar2017);
}
