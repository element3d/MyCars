import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genFordFocus3(model) {
  model[EEngine.FordFocus3_10] = {
    title: "Ford Focus 1.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2019],
        size: 1.0,
        power: 123,
        cyl: "L3 Turbo GDI",
      },
    ],
  };

  model[EEngine.FordFocus3_20] = {
    title: "Ford Focus 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2019],
        size: 2.0,
        power: 160,
        cyl: "L4 GDI",
      },
    ],
  };

  model[EEngine.FordFocus3_20st] = {
    title: "Ford Focus 2.0 ST",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2019],
        size: 2.0,
        power: 252,
        cyl: "L4 Turbo GDI",
      },
    ],
  };

  model[EEngine.FordFocus3_23rs] = {
    title: "Ford Focus 2.3 RS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2019],
        size: 2.3,
        power: 350,
        cyl: "L4 Turbo GDI",
      },
    ],
  };
}

function genFordFusion2(model) {
  // 2017
  model[EEngine.FordFusion2_15] = {
    title: "Ford Fusion 1.5 Ecoboost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 1.5,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.FordFusion2_20] = {
    title: "Ford Fusion 2.0 Ecoboost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 2.0,
        power: 240,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.FordFusion2_20h] = {
    title: "Ford Fusion 2.0 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 2.0,
        power: 141,
        cyl: "L4 / Electric",
      },
    ],
  };

  model[EEngine.FordFusion2_25] = {
    title: "Ford Fusion 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 2.5,
        power: 175,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.FordFusion2_27] = {
    title: "Ford Fusion 2.7 Ecoboost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2020],
        size: 2.7,
        power: 325,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genFordMustang6(model) {
  // 2017
  model[EEngine.FordMustang2015_37] = {
    title: "Ford Mustang 3.7",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2017],
        size: 3.7,
        power: 300,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.FordMustang2015_23] = {
    title: "Ford Mustang 2.3 Ecoboost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 2.3,
        power: 310,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.FordMustang2015_gt] = {
    title: "Ford Mustang 5.0 GT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 5.0,
        power: 460,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.FordMustang2015_350] = {
    title: "Ford Mustang Shelby GT350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 5.0,
        power: 526,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.FordMustang2015_500] = {
    title: "Ford Mustang Shelby GT500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2022],
        size: 5.0,
        power: 760,
        cyl: "V8",
      },
    ],
  };
}

function genFordExplorer2011(model) {
  model[EEngine.FordExplorer2011_20] = {
    title: "Ford Explorer 2.0 EcoBoost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 2.0,
        power: 240,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.FordExplorer2011_23] = {
    title: "Ford Explorer 2.3 EcoBoost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.3,
        power: 280,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.FordExplorer2011_35] = {
    title: "Ford Explorer 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2019],
        size: 3.5,
        power: 290,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.FordExplorer2011_35t] = {
    title: "Ford Explorer 3.5 EcoBoost",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 3.5,
        power: 365,
        cyl: "V6 Biturbo",
      },
    ],
  };
}

export function genFord(gMakes) {
  gMakes[EMake.Ford] = {};

  // Focus 2010
  gMakes[EMake.Ford][ESerie.FordFocus] = {};
  const focus3 = (gMakes[EMake.Ford][ESerie.FordFocus][EModel.FordFocus3] = {});
  genFordFocus3(focus3);

  // Fusion 2013
  gMakes[EMake.Ford][ESerie.FordFusion] = {};
  const fusion2 = (gMakes[EMake.Ford][ESerie.FordFusion][EModel.FordFusion2] =
    {});
  genFordFusion2(fusion2);

  // Mustang 2015
  gMakes[EMake.Ford][ESerie.FordMustang] = {};
  const mustang6 = (gMakes[EMake.Ford][ESerie.FordMustang][
    EModel.FordMustang6
  ] = {});
  genFordMustang6(mustang6);

  // Explorer 2011
  gMakes[EMake.Ford][ESerie.FordExplorer] = {};
  const exp2011 = (gMakes[EMake.Ford][ESerie.FordExplorer][
    EModel.FordExplorer2011
  ] = {});
  genFordExplorer2011(exp2011);
}
