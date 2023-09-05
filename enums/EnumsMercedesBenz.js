import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genMbW203(w203) {
  // c180
  w203[EEngine.MercBenzW203_c180] = {
    title: "Mercedes Benz W203 C180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2002],
        size: 2.0,
        power: 127,
        cyl: "L4",
      },
      {
        year: [2002, 2007],
        size: 1.8,
        power: 141,
        cyl: "L4 Kompressor",
      },
    ],
  };

  // c200
  w203[EEngine.MercBenzW203_c200] = {
    title: "Mercedes Benz W203 C200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2002],
        size: 2.0,
        power: 161,
        cyl: "L4 Kompressor",
      },
      {
        year: [2002, 2007],
        size: 1.8,
        power: 161,
        cyl: "L4 Kompressor",
      },
      {
        year: [2002, 2007],
        size: 1.8,
        power: 170,
        cyl: "L4 Kompressor CGI",
      },
    ],
  };

  // c230
  w203[EEngine.MercBenzW203_c230] = {
    title: "Mercedes Benz W203 C230",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2002],
        size: 2.3,
        power: 194,
        cyl: "L4 Kompressor",
      },
      {
        year: [2004, 2005],
        size: 1.8,
        power: 189,
        cyl: "L4 Kompressor",
      },
      {
        year: [2005, 2007],
        size: 2.5,
        power: 201,
        cyl: "V6",
      },
    ],
  };

  // c240
  w203[EEngine.MercBenzW203_c240] = {
    title: "Mercedes Benz W203 C240",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2005],
        size: 2.6,
        power: 173,
        cyl: "V6",
      },
    ],
  };

  // c280
  w203[EEngine.MercBenzW203_c280] = {
    title: "Mercedes Benz W203 C280",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 3.0,
        power: 228,
        cyl: "V6",
      },
    ],
  };

  // c320
  w203[EEngine.MercBenzW203_c320] = {
    title: "Mercedes Benz W203 C320",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2005],
        size: 3.2,
        power: 215,
        cyl: "V6",
      },
    ],
  };

  // c350
  w203[EEngine.MercBenzW203_c350] = {
    title: "Mercedes Benz W203 C350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
    ],
  };

  // c32
  w203[EEngine.MercBenzW203_c32_amg] = {
    title: "Mercedes Benz W203 C32 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2004],
        size: 3.2,
        power: 349,
        cyl: "V6",
      },
    ],
  };

  // c55
  w203[EEngine.MercBenzW203_c55_amg] = {
    title: "Mercedes Benz W203 C55 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2007],
        size: 5.5,
        power: 362,
        cyl: "V8",
      },
    ],
  };
}

function genMbW204(model) {
  // c180
  model[EEngine.MercBenzW204_c180] = {
    title: "Mercedes Benz W204 C180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2008],
        size: 1.8,
        power: 154,
        cyl: "L4 Kompressor",
      },
      {
        year: [2008, 2010],
        size: 1.6,
        power: 154,
        cyl: "L4 Kompressor",
      },
      {
        year: [2010, 2012],
        size: 1.8,
        power: 154,
        cyl: "L4 Turbo",
      },
      {
        year: [2012, 2015],
        size: 1.6,
        power: 154,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c200
  model[EEngine.MercBenzW204_c200] = {
    title: "Mercedes Benz W204 C200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 1.8,
        power: 181,
        cyl: "L4 Kompressor",
      },
      {
        year: [2010, 2015],
        size: 1.8,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c230
  model[EEngine.MercBenzW204_c230] = {
    title: "Mercedes Benz W203 C230",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2009],
        size: 2.5,
        power: 201,
        cyl: "V6",
      },
    ],
  };

  // c250
  model[EEngine.MercBenzW204_c250] = {
    title: "Mercedes Benz W203 C250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2015],
        size: 1.8,
        power: 201,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c280
  model[EEngine.MercBenzW204_c280] = {
    title: "Mercedes Benz W204 C280",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2009],
        size: 3.0,
        power: 228,
        cyl: "V6",
      },
    ],
  };

  // c300
  model[EEngine.MercBenzW204_c300] = {
    title: "Mercedes Benz W204 C300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2011],
        size: 3.0,
        power: 228,
        cyl: "V6",
      },
      {
        year: [2012, 2014],
        size: 3.5,
        power: 248,
        cyl: "V6",
      },
    ],
  };

  // c350
  model[EEngine.MercBenzW204_c350] = {
    title: "Mercedes Benz W204 C350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
      {
        year: [2011, 2011],
        size: 3.5,
        power: 288,
        cyl: "V6",
      },
      {
        year: [2012, 2014],
        size: 3.5,
        power: 302,
        cyl: "V6",
      },
    ],
  };

  // c63
  model[EEngine.MercBenzW204_c63_amg] = {
    title: "Mercedes Benz W204 C63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2015],
        size: 6.3,
        power: 451,
        cyl: "V8",
      },
    ],
  };
}

function genMbW205(model) {
  // c160
  model[EEngine.MercBenzW205_c160] = {
    title: "Mercedes Benz W205 C160",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 1.6,
        power: 127,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c180
  model[EEngine.MercBenzW205_c180] = {
    title: "Mercedes Benz W205 C180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2008],
        size: 1.6,
        power: 154,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c200
  model[EEngine.MercBenzW205_c200] = {
    title: "Mercedes Benz W205 C200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 2.0,
        power: 184,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c250
  model[EEngine.MercBenzW204_c250] = {
    title: "Mercedes Benz W205 C250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c300
  model[EEngine.MercBenzW205_c300] = {
    title: "Mercedes Benz W205 C300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c400
  model[EEngine.MercBenzW205_c400] = {
    title: "Mercedes Benz W205 C400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 3.0,
        power: 328,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // c450
  model[EEngine.MercBenzW205_c450] = {
    title: "Mercedes Benz W205 C450 AMG Sport",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // c43
  model[EEngine.MercBenzW205_c43_amg] = {
    title: "Mercedes Benz W205 C43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // c63
  model[EEngine.MercBenzW205_c63_amg] = {
    title: "Mercedes Benz W205 C63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2018],
        size: 4.0,
        power: 469,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genMbW206(model) {
  // c180
  model[EEngine.MercBenzW206_c180] = {
    title: "Mercedes Benz W206 C180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // c200
  model[EEngine.MercBenzW206_c200] = {
    title: "Mercedes Benz W206 C200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo / Electric",
      },
      {
        year: [2021, 2023],
        size: 2.0,
        power: 221,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // c260
  model[EEngine.MercBenzW206_c260] = {
    title: "Mercedes Benz W206 C260",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 221,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // c300
  model[EEngine.MercBenzW206_c300] = {
    title: "Mercedes Benz W206 C300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 255,
        cyl: "L4 Turbo",
      },
    ],
  };

  // c43
  model[EEngine.MercBenzW206_c43_amg] = {
    title: "Mercedes Benz W206 C43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 402,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // c63
  model[EEngine.MercBenzW206_c63_amg] = {
    title: "Mercedes Benz W206 C63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 671,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };
}

function genMbW211(model) {
  // c200
  model[EEngine.MercBenzW211_e200] = {
    title: "Mercedes Benz W211 E200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2006],
        size: 1.8,
        power: 161,
        cyl: "L4 Kompressor",
      },
      {
        year: [2006, 2009],
        size: 1.8,
        power: 181,
        cyl: "L4 Kompressor",
      },
    ],
  };

  // e230
  model[EEngine.MercBenzW211_e230] = {
    title: "Mercedes Benz W211 E230",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2009],
        size: 2.5,
        power: 201,
        cyl: "V6",
      },
    ],
  };

  // e240
  model[EEngine.MercBenzW211_e240] = {
    title: "Mercedes Benz W211 E240",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 2.6,
        power: 175,
        cyl: "V6",
      },
    ],
  };

  // e280
  model[EEngine.MercBenzW211_e280] = {
    title: "Mercedes Benz W211 E280",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2009],
        size: 3.0,
        power: 228,
        cyl: "V6",
      },
    ],
  };

  // e320
  model[EEngine.MercBenzW211_e320] = {
    title: "Mercedes Benz W211 E320",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 3.2,
        power: 215,
        cyl: "V6",
      },
    ],
  };

  // e350
  model[EEngine.MercBenzW211_e350] = {
    title: "Mercedes Benz W211 E350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2009],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
      {
        year: [2007, 2009],
        size: 3.5,
        power: 288,
        cyl: "V6 CGI",
      },
    ],
  };

  // e500
  model[EEngine.MercBenzW211_e500] = {
    title: "Mercedes Benz W211 E500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2006],
        size: 5.0,
        power: 302,
        cyl: "V8",
      },
      {
        year: [2006, 2009],
        size: 5.5,
        power: 382,
        cyl: "V8",
      },
    ],
  };

  // e550
  model[EEngine.MercBenzW211_e550] = {
    title: "Mercedes Benz W211 E550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2009],
        size: 5.5,
        power: 382,
        cyl: "V8",
      },
    ],
  };

  // e55
  model[EEngine.MercBenzW211_e55_amg] = {
    title: "Mercedes Benz W211 E55 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2006],
        size: 5.5,
        power: 469,
        cyl: "V8 Kompressor",
      },
    ],
  };

  // e63
  model[EEngine.MercBenzW211_e63_amg] = {
    title: "Mercedes Benz W211 E63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2009],
        size: 6.3,
        power: 507,
        cyl: "V8",
      },
    ],
  };
}

function genMbW212(model) {
  // e200
  model[EEngine.MercBenzW212_e200] = {
    title: "Mercedes Benz W212 E200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 1.8,
        power: 181,
        cyl: "L4 Turbo",
      },
      {
        year: [2013, 2016],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // e250
  model[EEngine.MercBenzW212_e250] = {
    title: "Mercedes Benz W212 E250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 1.8,
        power: 201,
        cyl: "L4 Turbo",
      },
      {
        year: [2013, 2016],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  // e300
  model[EEngine.MercBenzW212_e300] = {
    title: "Mercedes Benz W212 E300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2011],
        size: 3.0,
        power: 228,
        cyl: "V6",
      },
      {
        year: [2011, 2015],
        size: 3.0,
        power: 242,
        cyl: "V6",
      },
      {
        year: [2011, 2014],
        size: 3.5,
        power: 249,
        cyl: "V6",
      },
    ],
  };

  // e350
  model[EEngine.MercBenzW212_e350] = {
    title: "Mercedes Benz W212 E350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2011],
        size: 3.5,
        power: 288,
        cyl: "V6 CGI",
      },
      {
        year: [2009, 2013],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
      {
        year: [2002, 2014],
        size: 3.5,
        power: 302,
        cyl: "V6",
      },
    ],
  };

  // e400
  model[EEngine.MercBenzW212_e400] = {
    title: "Mercedes Benz W212 E400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2016],
        size: 3.5,
        power: 326,
        cyl: "V6 Hybrid",
      },
      {
        year: [2013, 2014],
        size: 3.0,
        power: 328,
        cyl: "V6",
      },
      {
        year: [2014, 2016],
        size: 3.5,
        power: 328,
        cyl: "V6",
      },
    ],
  };

  // e500
  model[EEngine.MercBenzW212_e500] = {
    title: "Mercedes Benz W212 E500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2011],
        size: 5.5,
        power: 383,
        cyl: "V8",
      },
      {
        year: [2011, 2016],
        size: 4.7,
        power: 402,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // e63
  model[EEngine.MercBenzW212_e63_amg] = {
    title: "Mercedes Benz W212 E63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2011],
        size: 6.3,
        power: 518,
        cyl: "V8",
      },
      {
        year: [2011, 2013],
        size: 5.5,
        power: 518,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2016],
        size: 5.5,
        power: 549,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2016],
        size: 5.5,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genMbW213(model) {
  // e180
  model[EEngine.MercBenzW213_e180] = {
    title: "Mercedes Benz W213 E180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2020],
        size: 1.6,
        power: 154,
        cyl: "L4 Turbo",
      },
    ],
  };

  // e200
  model[EEngine.MercBenzW213_e200] = {
    title: "Mercedes Benz W213 E200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2020],
        size: 2.0,
        power: 194,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  // e250
  model[EEngine.MercBenzW213_e250] = {
    title: "Mercedes Benz W213 E250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2018],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  // e300
  model[EEngine.MercBenzW213_e300] = {
    title: "Mercedes Benz W213 E300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2020],
        size: 2.0,
        power: 268,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  // e350
  model[EEngine.MercBenzW213_e350] = {
    title: "Mercedes Benz W213 E350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 2.0,
        power: 309,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  // e400
  model[EEngine.MercBenzW213_e400] = {
    title: "Mercedes Benz W213 E400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2018],
        size: 3.5,
        power: 328,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // e450
  model[EEngine.MercBenzW213_e450] = {
    title: "Mercedes Benz W213 E450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // e43
  model[EEngine.MercBenzW213_e43_amg] = {
    title: "Mercedes Benz W213 E43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2018],
        size: 3.0,
        power: 396,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // e53
  model[EEngine.MercBenzW213_e53_amg] = {
    title: "Mercedes Benz W213 E53 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 3.0,
        power: 451,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  // e63
  model[EEngine.MercBenzW213_e63_amg] = {
    title: "Mercedes Benz W213 E63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2020],
        size: 4.0,
        power: 563,
        cyl: "V8 Biturbo",
      },
      {
        year: [2017, 2020],
        size: 4.0,
        power: 604,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // diesel
  model[EEngine.MercBenzW213_e200d] = {
    title: "Mercedes Benz W213 E200d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 150,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2020],
        size: 1.6,
        power: 160,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzW213_e220d] = {
    title: "Mercedes Benz W213 E220d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2016, 2020],
        size: 2.0,
        power: 191,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzW213_e300d] = {
    title: "Mercedes Benz W213 E300d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2020],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzW213_e350d] = {
    title: "Mercedes Benz W213 E350d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2016, 2018],
        size: 3.0,
        power: 254,
        cyl: "V6 Turbo",
      },
      {
        year: [2018, 2020],
        size: 3.0,
        power: 282,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzW213_e400d] = {
    title: "Mercedes Benz W213 E400d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2020],
        size: 3.0,
        power: 340,
        cyl: "L6 Biturbo",
      },
    ],
  };
}

function genMbW221(model) {
  // S300
  model[EEngine.MercBenzW221_s300] = {
    title: "Mercedes Benz W221 S300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2013],
        size: 3.0,
        power: 231,
        cyl: "V6",
      },
    ],
  };

  // s350
  model[EEngine.MercBenzW221_s350] = {
    title: "Mercedes Benz W221 S350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2013],
        size: 3.5,
        power: 272,
        cyl: "V6",
      },
      {
        year: [2010, 2013],
        size: 3.5,
        power: 306,
        cyl: "V6",
      },
    ],
  };

  // s400
  model[EEngine.MercBenzW221_s400] = {
    title: "Mercedes Benz S400 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 3.5,
        power: 299,
        cyl: "V6",
      },
    ],
  };

  // s450
  model[EEngine.MercBenzW221_s450] = {
    title: "Mercedes Benz W221 S450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2013],
        size: 4.5,
        power: 340,
        cyl: "V8",
      },
    ],
  };

  // s500
  model[EEngine.MercBenzW221_s500] = {
    title: "Mercedes Benz W221 S500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2013],
        size: 5.5,
        power: 388,
        cyl: "V8",
      },
      {
        year: [2011, 2013],
        size: 4.5,
        power: 435,
        cyl: "V8",
      },
    ],
  };

  // s550
  model[EEngine.MercBenzW221_s550] = {
    title: "Mercedes Benz W221 S550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2013],
        size: 5.5,
        power: 388,
        cyl: "V8",
      },
      {
        year: [2011, 2013],
        size: 4.5,
        power: 435,
        cyl: "V8",
      },
    ],
  };

  // s600
  model[EEngine.MercBenzW221_s600] = {
    title: "Mercedes Benz W221 S600",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2013],
        size: 5.5,
        power: 517,
        cyl: "V12 Biturbo",
      },
    ],
  };

  // s63
  model[EEngine.MercBenzW221_s63_amg] = {
    title: "Mercedes Benz W221 S63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2010],
        size: 6.3,
        power: 525,
        cyl: "V8",
      },
      {
        year: [2011, 2013],
        size: 5.5,
        power: 544,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // s63
  model[EEngine.MercBenzW221_s65_amg] = {
    title: "Mercedes Benz W221 S65 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2013],
        size: 6.0,
        power: 612,
        cyl: "V12 Biturbo",
      },
    ],
  };
}

function genMbW222(model) {
  // s400
  model[EEngine.MercBenzW222_s400] = {
    title: "Mercedes Benz W222 S400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2017],
        size: 3.5,
        power: 306,
        cyl: "V6 Hybrid",
      },
      {
        year: [2015, 2017],
        size: 3.0,
        power: 333,
        cyl: "V6 Biturbo",
      },
    ],
  };

  // s450
  model[EEngine.MercBenzW222_s450] = {
    title: "Mercedes Benz W222 S450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2020],
        size: 3.0,
        power: 389,
        cyl: "V6 Biturbo Hybrid",
      },
    ],
  };

  // s500
  model[EEngine.MercBenzW222_s500] = {
    title: "Mercedes Benz W222 S500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2017],
        size: 3.0,
        power: 442,
        cyl: "V6 Biturbo Hybrid",
      },
      {
        year: [2013, 2017],
        size: 4.5,
        power: 455,
        cyl: "V8 Biturbo",
      },
      {
        year: [2017, 2020],
        size: 3.0,
        power: 457,
        cyl: "V6 Biturbo Hybrid",
      },
    ],
  };

  // s560
  model[EEngine.MercBenzW222_s560] = {
    title: "Mercedes Benz W222 S560",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2020],
        size: 4.0,
        power: 469,
        cyl: "V8 Biturbo",
      },
      {
        year: [2018, 2020],
        size: 3.0,
        power: 489,
        cyl: "V6 Biturbo Hybrid",
      },
    ],
  };

  // s600
  model[EEngine.MercBenzW222_s600] = {
    title: "Mercedes Benz W222 S600",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 6.0,
        power: 530,
        cyl: "V12 Biturbo",
      },
    ],
  };

  // s63
  model[EEngine.MercBenzW222_s63_amg] = {
    title: "Mercedes Benz W222 S63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2017],
        size: 5.5,
        power: 585,
        cyl: "V8 Biturbo",
      },
      {
        year: [2017, 2020],
        size: 4.0,
        power: 612,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // s65
  model[EEngine.MercBenzW222_s65_amg] = {
    title: "Mercedes Benz W222 S65 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 6.0,
        power: 630,
        cyl: "V12 Biturbo",
      },
    ],
  };
}

function genMbW223(model) {
  // s450
  model[EEngine.MercBenzW223_s450] = {
    title: "Mercedes Benz W223 S450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 3.0,
        power: 387,
        cyl: "R6 Turbo Hybrid",
      },
    ],
  };

  // s500
  model[EEngine.MercBenzW223_s500] = {
    title: "Mercedes Benz W223 S500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 3.0,
        power: 457,
        cyl: "R6 Turbo Hybrid",
      },
    ],
  };

  // s580
  model[EEngine.MercBenzW223_s580] = {
    title: "Mercedes Benz W223 S580",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 511,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

function genCLAC117(model) {
  model[EEngine.MercBenzC117_CLA180] = {
    title: "Mercedes Benz CLA 180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 1.6,
        power: 121,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC117_CLA200] = {
    title: "Mercedes Benz CLA 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 1.6,
        power: 154,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC117_CLA220] = {
    title: "Mercedes Benz CLA 220",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2018],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC117_CLA250] = {
    title: "Mercedes Benz CLA 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2018],
        size: 2.0,
        power: 215,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2018],
        size: 2.0,
        power: 221,
        cyl: "L4 Turbo",
      },
      {
        year: [2014, 2014],
        size: 2.0,
        power: 283,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC117_CLA45AMG] = {
    title: "Mercedes Benz CLA 45 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2015],
        size: 2.0,
        power: 355,
        cyl: "L4 Twin Turbo",
      },
      {
        year: [2015, 2018],
        size: 2.0,
        power: 375,
        cyl: "L4 Twin Turbo",
      },
    ],
  };
}

function genCLAC118(model) {
  model[EEngine.MercBenzC118_CLA180] = {
    title: "Mercedes Benz CLA 180",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2022],
        size: 1.3,
        power: 134,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC118_CLA200] = {
    title: "Mercedes Benz CLA 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 1.3,
        power: 161,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC118_CLA220] = {
    title: "Mercedes Benz CLA 220",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2020],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC118_CLA250] = {
    title: "Mercedes Benz CLA 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 221,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC118_CLA35AMG] = {
    title: "Mercedes Benz CLA 35 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 302,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC118_CLA45AMG] = {
    title: "Mercedes Benz CLA 45 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 382,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 420,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genCLSC219(model) {
  model[EEngine.MercBenzC219_CLS350] = {
    title: "Mercedes Benz C219 CLS 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2006],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
      {
        year: [2006, 2010],
        size: 3.5,
        power: 288,
        cyl: "V6 CGI",
      },
    ],
  };

  model[EEngine.MercBenzC219_CLS500] = {
    title: "Mercedes Benz C219 CLS 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2006],
        size: 5.0,
        power: 302,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.MercBenzC219_CLS550] = {
    title: "Mercedes Benz C219 CLS 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 5.5,
        power: 382,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.MercBenzC219_CLS55AMG] = {
    title: "Mercedes Benz C219 CLS 55 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2006],
        size: 5.5,
        power: 469,
        cyl: "V8 Supercharged",
      },
    ],
  };

  model[EEngine.MercBenzC219_CLS63AMG] = {
    title: "Mercedes Benz C219 CLS 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2010],
        size: 6.3,
        power: 507,
        cyl: "V8",
      },
    ],
  };
}

function genCLSC218(model) {
  model[EEngine.MercBenzC218_CLS300] = {
    title: "Mercedes Benz C218 CLS 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2018],
        size: 3.5,
        power: 248,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.MercBenzC218_CLS350] = {
    title: "Mercedes Benz C218 CLS 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2014],
        size: 3.5,
        power: 302,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.MercBenzC218_CLS400] = {
    title: "Mercedes Benz C218 CLS 400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2017],
        size: 3.5,
        power: 329,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC218_CLS500] = {
    title: "Mercedes Benz C218 CLS 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2017],
        size: 4.7,
        power: 402,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC218_CLS63AMG] = {
    title: "Mercedes Benz C218 CLS 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2013],
        size: 5.5,
        power: 518,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2018],
        size: 5.5,
        power: 550,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2018],
        size: 5.5,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genCLSC256(model) {
  model[EEngine.MercBenzC256_CLS350] = {
    title: "Mercedes Benz C256 CLS 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 2.0,
        power: 295,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC256_CLS450] = {
    title: "Mercedes Benz C256 CLS 450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 362,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC256_CLS53AMG] = {
    title: "Mercedes Benz C256 CLS 53 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 429,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };
}

function genGLCX253(model) {
  model[EEngine.MercBenzX253_GLC200] = {
    title: "Mercedes Benz X253 GLC 200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
      {
        year: [2020, 2022],
        size: 2.0,
        power: 194,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC250] = {
    title: "Mercedes Benz X253 GLC 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC300] = {
    title: "Mercedes Benz X253 GLC 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
      {
        year: [2020, 2022],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
      {
        year: [2020, 2022],
        size: 2.0,
        power: 255,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC300E] = {
    title: "Mercedes Benz X253 GLC 300e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2022],
        size: 2.0,
        power: 329,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC350E] = {
    title: "Mercedes Benz X253 GLC 350e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2015, 2020],
        size: 2.0,
        power: 316,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC43] = {
    title: "Mercedes Benz X253 GLC 43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2020],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
      {
        year: [2020, 2022],
        size: 3.0,
        power: 385,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzX253_GLC63] = {
    title: "Mercedes Benz X253 GLC 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 4.0,
        power: 469,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2022],
        size: 4.0,
        power: 503,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLCC253(model) {
  model[EEngine.MercBenzC253_GLC250] = {
    title: "Mercedes Benz GLC Coupe 250",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 208,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC253_GLC300] = {
    title: "Mercedes Benz GLC Coupe 300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 242,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC253_GLC350E] = {
    title: "Mercedes Benz GLC Coupe 350e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2015, 2022],
        size: 2.0,
        power: 316,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC253_GLC43] = {
    title: "Mercedes Benz GLC Coupe 43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC253_GLC63] = {
    title: "Mercedes Benz GLC Coupe 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2022],
        size: 4.0,
        power: 469,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2022],
        size: 4.0,
        power: 503,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLEW166(model) {
  model[EEngine.MercBenzW166_GLE400] = {
    title: "Mercedes Benz W166 GLE 400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 3.0,
        power: 328,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzW166_GLE450] = {
    title: "Mercedes Benz W166 GLE 450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzW166_GLE43AMG] = {
    title: "Mercedes Benz W166 GLE 43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzW166_GLE500] = {
    title: "Mercedes Benz W166 GLE 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 4.7,
        power: 463,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzW166_GLE550] = {
    title: "Mercedes Benz W166 GLE 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 4.7,
        power: 463,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzW166_GLE63AMG] = {
    title: "Mercedes Benz W166 GLE 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 5.5,
        power: 518,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2019],
        size: 5.5,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLEV167(model) {
  model[EEngine.MercBenzV167_GLE350] = {
    title: "Mercedes Benz V167 GLE 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 255,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE400] = {
    title: "Mercedes Benz V167 GLE 400",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 382,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE350E] = {
    title: "Mercedes Benz V167 GLE 350e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 329,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE400E] = {
    title: "Mercedes Benz V167 GLE 400e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 375,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE450] = {
    title: "Mercedes Benz V167 GLE 450",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 381,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE53AMG] = {
    title: "Mercedes Benz V167 GLE 53 AMG",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 429,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE580] = {
    title: "Mercedes Benz V167 GLE 580",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 4.0,
        power: 429,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzV167_GLE63AMG] = {
    title: "Mercedes Benz V167 GLE 63 AMG",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 563,
        cyl: "V8 Biturbo Hybrid",
      },
      {
        year: [2020, 2023],
        size: 4.0,
        power: 603,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

function genGLEC292(model) {
  model[EEngine.MercBenzC292_GLE400] = {
    title: "Mercedes Benz C292 GLE COUPE 400",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 3.0,
        power: 328,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC292_GLE450] = {
    title: "Mercedes Benz C292 GLE COUPE 450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC292_GLE43AMG] = {
    title: "Mercedes Benz C292 GLE COUPE 43 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC292_GLE500] = {
    title: "Mercedes Benz C292 GLE COUPE 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 4.7,
        power: 463,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC292_GLE550] = {
    title: "Mercedes Benz C292 GLE COUPE 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2018],
        size: 4.7,
        power: 463,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzC292_GLE63AMG] = {
    title: "Mercedes Benz C292 GLE COUPE 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 5.5,
        power: 518,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2019],
        size: 5.5,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLEС167(model) {
  model[EEngine.MercBenzC167_GLE350] = {
    title: "Mercedes Benz C167 GLE Coupe 350",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 255,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE400] = {
    title: "Mercedes Benz C167 GLE Coupe 400",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 382,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE350E] = {
    title: "Mercedes Benz C167 GLE Coupe 350e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 329,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE400E] = {
    title: "Mercedes Benz V167 GLE Coupe 400e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2023, 2023],
        size: 2.0,
        power: 375,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE450] = {
    title: "Mercedes Benz C167 GLE Coupe 450",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 381,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE53AMG] = {
    title: "Mercedes Benz C167 GLE Coupe 53 AMG",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 429,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE580] = {
    title: "Mercedes Benz C167 GLE Coupe 580",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 4.0,
        power: 429,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzC167_GLE63AMG] = {
    title: "Mercedes Benz C167 GLE Coupe 63 AMG",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 563,
        cyl: "V8 Biturbo Hybrid",
      },
      {
        year: [2020, 2023],
        size: 4.0,
        power: 603,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

function genGLX166(model) {
  model[EEngine.MercBenzX166_GL450] = {
    title: "Mercedes Benz X166 GL 450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2015],
        size: 4.7,
        power: 362,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzX166_GL550] = {
    title: "Mercedes Benz X166 GL 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2015],
        size: 4.7,
        power: 429,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzX166_GL63AMG] = {
    title: "Mercedes Benz X166 GL 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2015],
        size: 5.5,
        power: 550,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLSX166(model) {
  model[EEngine.MercBenzX166_GLS450] = {
    title: "Mercedes Benz X166 GLS 450",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 3.0,
        power: 362,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzX166_GLS550] = {
    title: "Mercedes Benz X166 GLS 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 4.7,
        power: 449,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzX166_GLS63AMG] = {
    title: "Mercedes Benz X166 GLS 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 5.5,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genGLSX167(model) {
  model[EEngine.MercBenzX167_GLS450] = {
    title: "Mercedes Benz X167 GLS 450",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 362,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzX167_GLS580] = {
    title: "Mercedes Benz X167 GLS 580",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2019, 2023],
        size: 4.0,
        power: 483,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzX167_GLS600] = {
    title: "Mercedes Benz X167 GLS 600 Maybach",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 571,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };

  model[EEngine.MercBenzX167_GLS63AMG] = {
    title: "Mercedes Benz X167 GLS 63 AMG",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2020, 2023],
        size: 4.0,
        power: 603,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

function genGClass(model) {
  model[EEngine.MercBenzGW463_32] = {
    title: "Mercedes Benz G 320",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1994, 1998],
        size: 3.2,
        power: 208,
        cyl: "L6",
      },
      {
        year: [1997, 2006],
        size: 3.2,
        power: 215,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.MercBenzGW463_50] = {
    title: "Mercedes Benz G 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2008],
        size: 5.0,
        power: 298,
        cyl: "V8",
      },
      {
        year: [2008, 2015],
        size: 5.5,
        power: 382,
        cyl: "V8",
      },
      {
        year: [2015, 2018],
        size: 4.0,
        power: 416,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzGW463_55] = {
    title: "Mercedes Benz G 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2008],
        size: 5.0,
        power: 298,
        cyl: "V8",
      },
      {
        year: [2008, 2015],
        size: 5.5,
        power: 382,
        cyl: "V8",
      },
      {
        year: [2015, 2018],
        size: 4.0,
        power: 416,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzGW463_55amg] = {
    title: "Mercedes Benz G 55 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2001, 2003],
        size: 5.5,
        power: 349,
        cyl: "V8",
      },
      {
        year: [2004, 2006],
        size: 5.5,
        power: 469,
        cyl: "V8 Supercharged",
      },
      {
        year: [2006, 2008],
        size: 5.5,
        power: 493,
        cyl: "V8 Supercharged",
      },
      {
        year: [2008, 2012],
        size: 5.5,
        power: 500,
        cyl: "V8 Supercharged",
      },
    ],
  };

  model[EEngine.MercBenzGW463_63amg] = {
    title: "Mercedes Benz G 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 5.5,
        power: 536,
        cyl: "V8 Biturbo",
      },
      {
        year: [2015, 2018],
        size: 5.5,
        power: 563,
        cyl: "V8 Biturbo",
      },
      {
        year: [2002, 2003],
        size: 6.3,
        power: 437,
        cyl: "V12",
      },
    ],
  };

  model[EEngine.MercBenzGW463_65amg] = {
    title: "Mercedes Benz G 65 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 6.0,
        power: 603,
        cyl: "V12 Biturbo",
      },
      {
        year: [2015, 2018],
        size: 6.0,
        power: 621,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzGW463_mb] = {
    title: "Mercedes Benz Maybach G 650",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2018],
        size: 6.0,
        power: 621,
        cyl: "V12 Biturbo",
      },
    ],
  };
}

function genGClass2(model) {
  model[EEngine.MercBenzGW4632_50] = {
    title: "Mercedes Benz G 500",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 416,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.MercBenzGW4632_55] = {
    title: "Mercedes Benz G 550",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 416,
        cyl: "V8 Biturbo",
      },
    ],
  };
  model[EEngine.MercBenzGW4632_63] = {
    title: "Mercedes Benz G 63 AMG",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.0,
        power: 577,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

export function genMercedesBenz(gMakes) {
  gMakes[EMake.MercedesBenz] = {};

  // c class
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCClass] = {};
  const w203 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCClass][
    EModel.MercedesBencCW203
  ] = {});
  genMbW203(w203);

  // W204
  const w204 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCClass][
    EModel.MercedesBencCW204
  ] = {});
  genMbW204(w204);

  // W205
  const w205 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCClass][
    EModel.MercedesBencCW205
  ] = {});
  genMbW205(w205);

  // W206
  const w206 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCClass][
    EModel.MercedesBencCW206
  ] = {});
  genMbW206(w206);

  // e class
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzEClass] = {};
  const w211 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzEClass][
    EModel.MercedesBencEW211
  ] = {});
  genMbW211(w211);

  // w212
  const w212 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzEClass][
    EModel.MercedesBencEW212
  ] = {});
  genMbW212(w212);

  // w213
  const w213 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzEClass][
    EModel.MercedesBencEW213
  ] = {});
  genMbW213(w213);

  // s class
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzSClass] = {};
  const w221 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzSClass][
    EModel.MercedesBencSW221
  ] = {});
  genMbW221(w221);

  // w222
  const w222 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzSClass][
    EModel.MercedesBencSW222
  ] = {});
  genMbW222(w222);

  // w223
  const w223 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzSClass][
    EModel.MercedesBencSW223
  ] = {});
  genMbW223(w223);

  // CLA
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLAClass] = {};
  const clac117 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLAClass][
    EModel.MercedesBencCLAC117
  ] = {});
  genCLAC117(clac117);

  const clac118 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLAClass][
    EModel.MercedesBencCLAC118
  ] = {});
  genCLAC118(clac118);

  // CLS
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLSClass] = {};
  const clsc219 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLSClass][
    EModel.MercedesBencCLSC219
  ] = {});
  genCLSC219(clsc219);

  const clsc218 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLSClass][
    EModel.MercedesBencCLSC218
  ] = {});
  genCLSC218(clsc218);

  const clsc256 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzCLSClass][
    EModel.MercedesBencCLSC256
  ] = {});
  genCLSC256(clsc256);

  // glc
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLCCLass] = {};
  const glcx253 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLCCLass][
    EModel.MercedesBencGLCX253
  ] = {});
  genGLCX253(glcx253);

  // glc coupe
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLCCoupe] = {};
  const glcc253 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLCCoupe][
    EModel.MercedesBencGLCC253
  ] = {});
  genGLCC253(glcc253);

  // gle
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLEClass] = {};
  const glew166 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLEClass][
    EModel.MercedesBencGLEW166
  ] = {});
  genGLEW166(glew166);

  const glev167 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLEClass][
    EModel.MercedesBencGLEV167
  ] = {});
  genGLEV167(glev167);

  // gle coupe
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLECoupe] = {};
  const glec292 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLECoupe][
    EModel.MercedesBencGLEC292
  ] = {});
  genGLEC292(glec292);

  const gleс167 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLECoupe][
    EModel.MercedesBencGLEC167
  ] = {});
  genGLEС167(gleс167);

  // gl
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLClass] = {};
  const glx166 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLClass][
    EModel.MercedesBencGLX166
  ] = {});
  genGLX166(glx166);

  // gls
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLSClass] = {};
  const glsx166 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLSClass][
    EModel.MercedesBencGLSX166
  ] = {});
  genGLSX166(glsx166);

  const glsx167 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGLSClass][
    EModel.MercedesBencGLSX167
  ] = {});
  genGLSX167(glsx167);

  // g
  gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGClass] = {};
  const gel1 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGClass][
    EModel.MercedesBencGW463
  ] = {});
  genGClass(gel1);

  const gel2 = (gMakes[EMake.MercedesBenz][ESerie.MercedesBenzGClass][
    EModel.MercedesBencGW4632
  ] = {});
  genGClass2(gel2);
}
