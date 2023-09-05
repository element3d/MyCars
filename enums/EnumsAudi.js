import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genA4(model) {
  model[EEngine.AudiA42008_18] = {
    title: "Audi A4 1.8 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2015],
        size: 1.8,
        power: 118,
        cyl: "L4 Turbo",
      },
      {
        year: [2007, 2011],
        size: 1.8,
        power: 158,
        cyl: "L4 Turbo",
      },
      {
        year: [2011, 2015],
        size: 1.8,
        power: 168,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA42008_20] = {
    title: "Audi A4 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2015],
        size: 2.0,
        power: 178,
        cyl: "L4 Turbo",
      },
      {
        year: [2008, 2013],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
      {
        year: [2013, 2016],
        size: 2.0,
        power: 222,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA42008_30] = {
    title: "Audi A4 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 3.0,
        power: 268,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.AudiA42008_32] = {
    title: "Audi A4 3.2 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 3.2,
        power: 261,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiA42008_s4] = {
    title: "Audi S4 Quattro",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2015],
        size: 3.0,
        power: 328,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.AudiA42008_rs4] = {
    title: "Audi RS4 Quattro",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 4.2,
        power: 444,
        cyl: "V8",
      },
    ],
  };
}

function genA42016(model) {
  model[EEngine.AudiA42016_14] = {
    title: "Audi A4 1.4 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 1.4,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA42016_20] = {
    title: "Audi A4 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.0,
        power: 187,
        cyl: "L4 Turbo",
      },
      {
        year: [2016, 2023],
        size: 2.0,
        power: 249,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA42016_s4] = {
    title: "Audi S4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 3.0,
        power: 349,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.AudiA42016_rs4] = {
    title: "Audi RS4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.9,
        power: 444,
        cyl: "V6 Turbo",
      },
    ],
  };
}

function genA52007(model) {
  model[EEngine.AudiA52007_18] = {
    title: "Audi A5 1.8 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2008],
        size: 1.8,
        power: 168,
        cyl: "L4 Turbo",
      },
      {
        year: [2009, 2017],
        size: 1.8,
        power: 158,
        cyl: "L4 Turbo",
      },
      {
        year: [2016, 2017],
        size: 1.8,
        power: 174,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA52007_20] = {
    title: "Audi A5 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2011],
        size: 2.0,
        power: 177,
        cyl: "L4 Turbo",
      },
      {
        year: [2008, 2017],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA52007_30] = {
    title: "Audi A5 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2017],
        size: 3.0,
        power: 268,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.AudiA52007_32] = {
    title: "Audi A5 3.2 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 3.2,
        power: 261,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiA52007_s5] = {
    title: "Audi S5 Quattro",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2017],
        size: 3.0,
        power: 329,
        cyl: "V6 Supercharged",
      },
      {
        year: [2007, 2012],
        size: 4.2,
        power: 349,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.AudiA52007_rs5] = {
    title: "Audi RS5 Quattro",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2017],
        size: 4.2,
        power: 444,
        cyl: "V8",
      },
    ],
  };
}

function genA52017(model) {
  model[EEngine.AudiA52017_14] = {
    title: "Audi A5 1.4 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 1.4,
        power: 444,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA52017_20h] = {
    title: "Audi A5 2.0 TFSI Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 190,
        cyl: "L4 Turbo Hybrid",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 252,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.AudiA52017_20] = {
    title: "Audi A5 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 170,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA52017_s5] = {
    title: "Audi S5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 3.0,
        power: 355,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.AudiA52017_rs5] = {
    title: "Audi RS5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.9,
        power: 450,
        cyl: "V6 Biturbo",
      },
    ],
  };
}

function genA62011(model) {
  model[EEngine.AudiA62011_h] = {
    title: "Audi A6 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2012, 2018],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo Electric",
      },
    ],
  };

  model[EEngine.AudiA62011_20] = {
    title: "Audi A6 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2018],
        size: 2.0,
        power: 178,
        cyl: "L4 Turbo",
      },
      {
        year: [2011, 2018],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA62011_28] = {
    title: "Audi A6 2.8 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2018],
        size: 2.8,
        power: 217,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiA62011_25] = {
    title: "Audi A6 2.5 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2018],
        size: 2.5,
        power: 187,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiA62011_30] = {
    title: "Audi A6 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2012],
        size: 3.0,
        power: 296,
        cyl: "V6 Supercharged",
      },
      {
        year: [2012, 2018],
        size: 3.0,
        power: 306,
        cyl: "V6 Supercharged",
      },
    ],
  };

  model[EEngine.AudiA62011_s6] = {
    title: "Audi S6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2018],
        size: 4.0,
        power: 414,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.AudiA62011_rs6] = {
    title: "Audi RS6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 4.0,
        power: 552,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genA62018(model) {
  model[EEngine.AudiA62018_20] = {
    title: "Audi A6 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiA62018_30] = {
    title: "Audi A6 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 335,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.AudiA62018_s6] = {
    title: "Audi S6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.9,
        power: 444,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.AudiA62018_rs6] = {
    title: "Audi RS6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 592,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.AudiA62018_20h] = {
    title: "Audi 2.0 TFSI Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 295,
        cyl: "L4 Turbo Hybrid",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 362,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };
}

function genQ32011(model) {
  model[EEngine.AudiQ32011_14] = {
    title: "Audi Q3 1.4 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2014],
        size: 1.4,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ32011_20] = {
    title: "Audi Q3 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2014],
        size: 2.0,
        power: 168,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2018],
        size: 2.0,
        power: 178,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2018],
        size: 2.0,
        power: 197,
        cyl: "L4 Turbo",
      },
      {
        year: [2011, 2014],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2018],
        size: 2.0,
        power: 217,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ32011_rs] = {
    title: "Audi RS Q3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2014],
        size: 2.5,
        power: 306,
        cyl: "L5 Turbo",
      },
      {
        year: [2015, 2016],
        size: 2.5,
        power: 335,
        cyl: "L5 Turbo",
      },
      {
        year: [2016, 2018],
        size: 2.5,
        power: 362,
        cyl: "L5 Turbo",
      },
    ],
  };
}

function genQ32018(model) {
  model[EEngine.AudiQ32018_14] = {
    title: "Audi Q3 1.4 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.4,
        power: 150,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ32018_14h] = {
    title: "Audi Q3 1.4 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 1.4,
        power: 245,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.AudiQ32018_20] = {
    title: "Audi Q3 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 180,
        cyl: "L4 Turbo",
      },
      {
        year: [2018, 2023],
        size: 2.0,
        power: 190,
        cyl: "L4 Turbo",
      },
      {
        year: [2018, 2023],
        size: 2.0,
        power: 220,
        cyl: "L4 Turbo",
      },
      {
        year: [2018, 2023],
        size: 2.0,
        power: 230,
        cyl: "L4 Turbo",
      },
      {
        year: [2018, 2023],
        size: 2.0,
        power: 245,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genQ52008(model) {
  model[EEngine.AudiQ52008_20h] = {
    title: "Audi Q5 2.0 TFSI Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2011, 2017],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo Electric",
      },
    ],
  };

  model[EEngine.AudiQ52008_20] = {
    title: "Audi Q5 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2017],
        size: 2.0,
        power: 178,
        cyl: "L4 Turbo",
      },
      {
        year: [2008, 2012],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
      {
        year: [2011, 2017],
        size: 2.0,
        power: 222,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ52008_32] = {
    title: "Audi Q5 3.2 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2012],
        size: 3.2,
        power: 266,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiQ52008_30] = {
    title: "Audi Q5 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2017],
        size: 3.0,
        power: 268,
        cyl: "V6 Supercharged",
      },
      {
        year: [2013, 2017],
        size: 3.0,
        power: 349,
        cyl: "V6 Supercharged",
      },
    ],
  };
}

function genQ52017(model) {
  model[EEngine.AudiQ52017_20] = {
    title: "Audi Q5 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 252,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ52017_20h] = {
    title: "Audi Q5 2.0 TFSI Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 367,
        cyl: "L4 Turbo Electric",
      },
    ],
  };

  model[EEngine.AudiQ52017_30] = {
    title: "Audi Q5 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 3.0,
        power: 349,
        cyl: "V6 Supercharged",
      },
    ],
  };
}

function genQ72005(model) {
  model[EEngine.AudiQ72005_36] = {
    title: "Audi Q7 3.6 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2015],
        size: 3.6,
        power: 276,
        cyl: "VR6 FSI",
      },
    ],
  };

  model[EEngine.AudiQ72005_42] = {
    title: "Audi Q7 4.2 FSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2015],
        size: 4.2,
        power: 345,
        cyl: "V8 FSI",
      },
    ],
  };

  model[EEngine.AudiQ72005_30] = {
    title: "Audi Q7 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2015],
        size: 3.0,
        power: 268,
        cyl: "V6 Supercharger",
      },
      {
        year: [2010, 2015],
        size: 3.0,
        power: 328,
        cyl: "V6 Supercharger",
      },
    ],
  };
}

function genQ72015(model) {
  model[EEngine.AudiQ72015_20] = {
    title: "Audi Q7 2.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 2.0,
        power: 249,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ72015_30] = {
    title: "Audi Q7 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 3.0,
        power: 340,
        cyl: "V6 Turbo",
      },
    ],
  };

  model[EEngine.AudiQ72015_20h] = {
    title: "Audi Q7 2.0 e-Tron",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2016, 2018],
        size: 2.0,
        power: 362,
        cyl: "L4 Turbo Electric",
      },
    ],
  };

  model[EEngine.AudiQ72015_30h] = {
    title: "Audi Q7 3.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 376,
        cyl: "V6 Turbo Electric",
      },
      {
        year: [2019, 2023],
        size: 3.0,
        power: 450,
        cyl: "V6 Turbo Electric",
      },
    ],
  };

  model[EEngine.AudiQ72015_s] = {
    title: "Audi SQ7 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 500,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genQ82018(model) {
  model[EEngine.AudiQ82018_30] = {
    title: "Audi Q8 3.0 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 340,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.AudiQ82018_30h] = {
    title: "Audi Q8 3.0 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 376,
        cyl: "V6 Electric",
      },
      {
        year: [2018, 2023],
        size: 3.0,
        power: 450,
        cyl: "V6 Electric",
      },
    ],
  };

  model[EEngine.AudiQ82018_s] = {
    title: "Audi SQ8 TFSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 500,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.AudiQ82018_rs] = {
    title: "Audi RS Q8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 591,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

export function genAudi(gMakes) {
  gMakes[EMake.Audi] = {};

  // Audi a4 2008
  gMakes[EMake.Audi][ESerie.AudiA4] = {};
  const a42008 = (gMakes[EMake.Audi][ESerie.AudiA4][EModel.AudiA4B8] = {});
  genA4(a42008);

  const a42016 = (gMakes[EMake.Audi][ESerie.AudiA4][EModel.AudiA4B9] = {});
  genA42016(a42016);

  // Audi a5
  gMakes[EMake.Audi][ESerie.AudiA5] = {};
  const a52007 = (gMakes[EMake.Audi][ESerie.AudiA5][EModel.AudiA52007] = {});
  genA52007(a52007);

  const a52017 = (gMakes[EMake.Audi][ESerie.AudiA5][EModel.AudiA52017] = {});
  genA52017(a52017);

  // Audi a6
  gMakes[EMake.Audi][ESerie.AudiA6] = {};
  const a62011 = (gMakes[EMake.Audi][ESerie.AudiA6][EModel.AudiA62011] = {});
  genA62011(a62011);

  const a62018 = (gMakes[EMake.Audi][ESerie.AudiA6][EModel.AudiA62018] = {});
  genA62018(a62018);

  // Audi q3
  gMakes[EMake.Audi][ESerie.AudiQ3] = {};
  const q32011 = (gMakes[EMake.Audi][ESerie.AudiQ3][EModel.AudiQ32011] = {});
  genQ32011(q32011);

  const q32018 = (gMakes[EMake.Audi][ESerie.AudiQ3][EModel.AudiQ32018] = {});
  genQ32018(q32018);

  // Audi q5
  gMakes[EMake.Audi][ESerie.AudiQ5] = {};
  const q52008 = (gMakes[EMake.Audi][ESerie.AudiQ5][EModel.AudiQ52008] = {});
  genQ52008(q52008);

  const q52017 = (gMakes[EMake.Audi][ESerie.AudiQ5][EModel.AudiQ52017] = {});
  genQ52017(q52017);

  // Audi q7
  gMakes[EMake.Audi][ESerie.AudiQ7] = {};
  const q72005 = (gMakes[EMake.Audi][ESerie.AudiQ7][EModel.AudiQ72005] = {});
  genQ72005(q72005);

  const q72015 = (gMakes[EMake.Audi][ESerie.AudiQ7][EModel.AudiQ72015] = {});
  genQ72015(q72015);

  // Audi q8
  gMakes[EMake.Audi][ESerie.AudiQ8] = {};
  const q82018 = (gMakes[EMake.Audi][ESerie.AudiQ8][EModel.AudiQ82018] = {});
  genQ82018(q82018);
}
