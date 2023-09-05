import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genCayenne2002(model) {
  model[EEngine.PorscheCayenne2002_32] = {
    title: "Porsche Cayenne",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2007],
        size: 3.2,
        power: 247,
        cyl: "VR6",
      },
      {
        year: [2007, 2010],
        size: 3.6,
        power: 286,
        cyl: "VR6",
      },
    ],
  };

  model[EEngine.PorscheCayenne2002_s] = {
    title: "Porsche Cayenne S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2002, 2007],
        size: 4.5,
        power: 335,
        cyl: "V8",
      },
      {
        year: [2007, 2010],
        size: 4.8,
        power: 380,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.PorscheCayenne2002_gts] = {
    title: "Porsche Cayenne GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2010],
        size: 4.8,
        power: 405,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.PorscheCayenne2002_t] = {
    title: "Porsche Cayenne Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2002, 2007],
        size: 4.5,
        power: 444,
        cyl: "V8 Biturbo",
      },
      {
        year: [2007, 2010],
        size: 4.8,
        power: 493,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2002_ts] = {
    title: "Porsche Cayenne Turbo S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2007],
        size: 4.5,
        power: 514,
        cyl: "V8 Biturbo",
      },
      {
        year: [2008, 2010],
        size: 4.8,
        power: 542,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genCayenne2010(model) {
  model[EEngine.PorscheCayenne2010_v6] = {
    title: "Porsche Cayenne",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2018],
        size: 3.6,
        power: 296,
        cyl: "VR6",
      },
    ],
  };

  model[EEngine.PorscheCayenne2010_s] = {
    title: "Porsche Cayenne S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2014],
        size: 4.8,
        power: 395,
        cyl: "V8",
      },
      {
        year: [2015, 2018],
        size: 3.6,
        power: 414,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2010_sh] = {
    title: "Porsche Cayenne S Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2014],
        size: 3.0,
        power: 370,
        cyl: "V6 Supercharged Hybrid",
      },
      {
        year: [2014, 2018],
        size: 3.0,
        power: 410,
        cyl: "V6 Supercharged Hybrid",
      },
    ],
  };

  model[EEngine.PorscheCayenne2010_gts] = {
    title: "Porsche Cayenne GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2014],
        size: 4.8,
        power: 414,
        cyl: "V8",
      },
      {
        year: [2015, 2018],
        size: 3.6,
        power: 434,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2010_t] = {
    title: "Porsche Cayenne Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2014],
        size: 4.8,
        power: 493,
        cyl: "V8 Biturbo",
      },
      {
        year: [2014, 2018],
        size: 4.8,
        power: 513,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2010_ts] = {
    title: "Porsche Cayenne Turbo S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2014],
        size: 4.8,
        power: 542,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2018],
        size: 4.8,
        power: 562,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genCayenne2018(model) {
  model[EEngine.PorscheCayenne2018_v6] = {
    title: "Porsche Cayenne",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 335,
        cyl: "V6 Turbo",
      },
      {
        year: [2023, 2023],
        size: 3.0,
        power: 348,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_h] = {
    title: "Porsche Cayenne Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 456,
        cyl: "V6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_s] = {
    title: "Porsche Cayenne S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 434,
        cyl: "V6 Biturbo",
      },
      {
        year: [2018, 2023],
        size: 4.0,
        power: 468,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_gts] = {
    title: "Porsche Cayenne GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 454,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_t] = {
    title: "Porsche Cayenne Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 542,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_tsh] = {
    title: "Porsche Cayenne Turbo S Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 4.0,
        power: 671,
        cyl: "V8 Biturbo",
      },
      {
        year: [2023, 2023],
        size: 4.0,
        power: 690,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheCayenne2018_gt] = {
    title: "Porsche Cayenne Turbo GT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2022, 2023],
        size: 4.0,
        power: 631,
        cyl: "V8 Biturbo",
      },
      {
        year: [2023, 2023],
        size: 4.0,
        power: 659,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genMacan(model) {
  model[EEngine.PorscheMacan2014_20] = {
    title: "Porsche Macan",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 2.0,
        power: 249,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.PorscheMacan2014_s] = {
    title: "Porsche Macan S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 3.0,
        power: 335,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheMacan2014_gts] = {
    title: "Porsche Macan GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 3.0,
        power: 355,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorscheMacan2014_t] = {
    title: "Porsche Macan Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2023],
        size: 3.6,
        power: 395,
        cyl: "V6 Biturbo",
      },
      {
        year: [2014, 2023],
        size: 3.6,
        power: 434,
        cyl: "V6 Biturbo",
      },
    ],
  };
}

function genPanamera2009(model) {
  model[EEngine.PorschePanamera2009_v6] = {
    title: "Porsche Panamera",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 3.6,
        power: 295,
        cyl: "V6",
      },
      {
        year: [2013, 2016],
        size: 3.6,
        power: 306,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.PorschePanamera2009_sh] = {
    title: "Porsche Panamera S Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2009, 2013],
        size: 3.0,
        power: 375,
        cyl: "V6 Supercharged Electric",
      },
      {
        year: [2013, 2016],
        size: 3.0,
        power: 416,
        cyl: "V6 Supercharged Electric",
      },
    ],
  };

  model[EEngine.PorschePanamera2009_s] = {
    title: "Porsche Panamera S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 4.8,
        power: 395,
        cyl: "V8",
      },
      {
        year: [2013, 2016],
        size: 3.0,
        power: 414,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2009_gts] = {
    title: "Porsche Panamera GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 4.8,
        power: 424,
        cyl: "V8",
      },
      {
        year: [2013, 2016],
        size: 4.8,
        power: 434,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.PorschePanamera2009_t] = {
    title: "Porsche Panamera Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 4.8,
        power: 493,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2016],
        size: 4.8,
        power: 513,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2009_ts] = {
    title: "Porsche Panamera Turbo S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 4.8,
        power: 542,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2016],
        size: 4.8,
        power: 562,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genPanamera2016(model) {
  model[EEngine.PorschePanamera2016_v6] = {
    title: "Porsche Panamera",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2020],
        size: 3.0,
        power: 325,
        cyl: "V6 Turbo",
      },
      {
        year: [2021, 2023],
        size: 2.9,
        power: 325,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_h] = {
    title: "Porsche Panamera Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2016, 2023],
        size: 2.9,
        power: 456,
        cyl: "V6 Biturbo",
      },
      {
        year: [2021, 2023],
        size: 2.9,
        power: 552,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_s] = {
    title: "Porsche Panamera S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.9,
        power: 434,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_gts] = {
    title: "Porsche Panamera GTS",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2020],
        size: 4.0,
        power: 454,
        cyl: "V8 Biturbo",
      },
      {
        year: [2021, 2023],
        size: 4.0,
        power: 473,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_t] = {
    title: "Porsche Panamera Turbo",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2020],
        size: 4.0,
        power: 541,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_t] = {
    title: "Porsche Panamera Turbo S",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 4.0,
        power: 621,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.PorschePanamera2016_tsh] = {
    title: "Porsche Panamera Turbo S Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2017, 2020],
        size: 4.0,
        power: 671,
        cyl: "V8 Biturbo Hybrid",
      },
      {
        year: [2021, 2023],
        size: 4.0,
        power: 690,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

export function genPorsche(gMakes) {
  gMakes[EMake.Porsche] = {};

  // Cayenne
  gMakes[EMake.Porsche][ESerie.PorscheCayenne] = {};
  const cayenne2002 = (gMakes[EMake.Porsche][ESerie.PorscheCayenne][
    EModel.PorscheCayenne1
  ] = {});
  genCayenne2002(cayenne2002);

  const cayenne2010 = (gMakes[EMake.Porsche][ESerie.PorscheCayenne][
    EModel.PorscheCayenne2
  ] = {});
  genCayenne2010(cayenne2010);

  const cayenne2018 = (gMakes[EMake.Porsche][ESerie.PorscheCayenne][
    EModel.PorscheCayenne3
  ] = {});
  genCayenne2018(cayenne2018);

  // Macan
  gMakes[EMake.Porsche][ESerie.PorscheMacan] = {};
  const macan = (gMakes[EMake.Porsche][ESerie.PorscheMacan][
    EModel.PorscheMacan1
  ] = {});
  genMacan(macan);

  // Panamera
  gMakes[EMake.Porsche][ESerie.PorschePanamera] = {};
  const pana2009 = (gMakes[EMake.Porsche][ESerie.PorschePanamera][
    EModel.PorschePanamera1
  ] = {});
  genPanamera2009(pana2009);

  const pana2016 = (gMakes[EMake.Porsche][ESerie.PorschePanamera][
    EModel.PorschePanamera2
  ] = {});
  genPanamera2016(pana2016);
}
