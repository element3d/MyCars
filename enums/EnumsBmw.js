import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genBmwE46(bmwE46) {
  // 316i
  bmwE46[EEngine.BmwE46_316i] = {
    title: "Bmw E46 316i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1999, 2001],
        size: 1.9,
        power: 103,
        cyl: "L4",
      },
      {
        year: [2001, 2004],
        size: 1.6,
        power: 115,
        cyl: "L4",
      },
      {
        year: [2001, 2004],
        size: 1.8,
        power: 114,
        cyl: "L4",
      },
    ],
  };

  // 318i
  bmwE46[EEngine.BmwE46_318i] = {
    title: "Bmw E46 318i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2001],
        size: 1.9,
        power: 117,
        cyl: "L4",
      },
      {
        year: [2001, 2005],
        size: 2.0,
        power: 141,
        cyl: "L4",
      },
      {
        year: [2003, 2006],
        size: 2.0,
        power: 150,
        cyl: "L4",
      },
    ],
  };

  // 320i
  bmwE46[EEngine.BmwE46_320i] = {
    title: "Bmw E46 320i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 2.0,
        power: 148,
        cyl: "L6",
      },
      {
        year: [2000, 2006],
        size: 2.2,
        power: 170,
        cyl: "L6",
      },
    ],
  };

  // 323i
  bmwE46[EEngine.BmwE46_323i] = {
    title: "Bmw E46 323i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 2.5,
        power: 169,
        cyl: "L6",
      },
    ],
  };

  // 325i
  bmwE46[EEngine.BmwE46_325i] = {
    title: "Bmw E46 325i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2001, 2006],
        size: 2.5,
        power: 189,
        cyl: "L6",
      },
    ],
  };

  // 328i
  bmwE46[EEngine.BmwE46_328i] = {
    title: "Bmw E46 328i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1998, 2000],
        size: 2.8,
        power: 190,
        cyl: "L6",
      },
    ],
  };

  // 330i
  bmwE46[EEngine.BmwE46_330i] = {
    title: "Bmw E46 330i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2006],
        size: 3.0,
        power: 230,
        cyl: "L6",
      },
    ],
  };

  // m3
  bmwE46[EEngine.BmwE46_m3] = {
    title: "Bmw E46 M3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2006],
        size: 3.2,
        power: 338,
        cyl: "L6",
      },
    ],
  };
}

function genBmwE90(bmwE90) {
  // 316i
  bmwE90[EEngine.BmwE90_316i] = {
    title: "Bmw E90 316i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 1.6,
        power: 121,
        cyl: "L4",
      },
    ],
  };

  // 318i
  bmwE90[EEngine.BmwE90_318i] = {
    title: "Bmw E90 318i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 2.0,
        power: 127,
        cyl: "L4",
      },
      {
        year: [2007, 2012],
        size: 2.0,
        power: 141,
        cyl: "L4",
      },
    ],
  };

  // 320i
  bmwE90[EEngine.BmwE90_320i] = {
    title: "Bmw E90 320i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 2.0,
        power: 148,
        cyl: "L6",
      },
      {
        year: [2007, 2012],
        size: 2.0,
        power: 168,
        cyl: "L6",
      },
      {
        year: [2006, 2007],
        size: 2.0,
        power: 170,
        cyl: "L6",
      },
    ],
  };

  // 323i
  bmwE90[EEngine.BmwE90_323i] = {
    title: "Bmw E90 323i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 2.5,
        power: 174,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 2.5,
        power: 200,
        cyl: "L6",
      },
    ],
  };

  // 325i
  bmwE90[EEngine.BmwE90_325i] = {
    title: "Bmw E90 325i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 2.5,
        power: 215,
        cyl: "L6",
      },
      {
        year: [2007, 2012],
        size: 3.0,
        power: 231,
        cyl: "L6",
      },
    ],
  };

  // 328i
  bmwE90[EEngine.BmwE90_328i] = {
    title: "Bmw E90 328i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 3.0,
        power: 231,
        cyl: "L6",
      },
    ],
  };

  // 330i
  bmwE90[EEngine.BmwE90_330i] = {
    title: "Bmw E90 330i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2011],
        size: 3.0,
        power: 255,
        cyl: "L6",
      },
      {
        year: [2007, 2011],
        size: 3.0,
        power: 268,
        cyl: "L6",
      },
    ],
  };

  // 335i
  bmwE90[EEngine.BmwE90_335i] = {
    title: "Bmw E90 335i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2012],
        size: 3.0,
        power: 306,
        cyl: "L6 Biturbo",
      },
    ],
  };

  // m3
  bmwE90[EEngine.BmwE90_m3] = {
    title: "Bmw E90 M3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2013],
        size: 4,
        power: 414,
        cyl: "V8",
      },
    ],
  };
}

function genBmwE92(bmwE90) {
  // 320i
  bmwE90[EEngine.BmwE92_320i] = {
    title: "Bmw E92 320i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2007],
        size: 2.0,
        power: 170,
        cyl: "L6",
      },
    ],
  };

  // 325i
  bmwE90[EEngine.BmwE92_325i] = {
    title: "Bmw E92 325i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2007],
        size: 2.5,
        power: 215,
        cyl: "L6",
      },
    ],
  };

  // 328i
  bmwE90[EEngine.BmwE92_328i] = {
    title: "Bmw E90 328i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 3.0,
        power: 231,
        cyl: "L6",
      },
    ],
  };

  // 330i
  bmwE90[EEngine.BmwE92_330i] = {
    title: "Bmw E92 330i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2011],
        size: 3.0,
        power: 272,
        cyl: "L6",
      },
    ],
  };

  // 335i
  bmwE90[EEngine.BmwE92_335i] = {
    title: "Bmw E92 335i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2010],
        size: 3.0,
        power: 306,
        cyl: "L6 N54 Biturbo",
      },
      {
        year: [2010, 2012],
        size: 3.0,
        power: 306,
        cyl: "L6 N55 Turbo",
      },
    ],
  };
  bmwE90[EEngine.BmwE92_335is] = {
    title: "Bmw E92 335is",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2012],
        size: 3.0,
        power: 320,
        cyl: "L6 Biturbo",
      },
    ],
  };

  // m3
  bmwE90[EEngine.BmwE92_m3] = {
    title: "Bmw E92 M3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2013],
        size: 4,
        power: 420,
        cyl: "V8",
      },
    ],
  };
}

function genBmwF30(bmwF30) {
  // 316i
  bmwF30[EEngine.BmwF30_316i] = {
    title: "Bmw F30 316i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 1.6,
        power: 134,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 318i
  bmwF30[EEngine.BmwF30_318i] = {
    title: "Bmw F30 318i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 1.5,
        power: 134,
        cyl: "L3",
      },
    ],
  };

  // 320i
  bmwF30[EEngine.BmwF30_320i] = {
    title: "Bmw F30 320i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2019],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 328i
  bmwF30[EEngine.BmwF30_328i] = {
    title: "Bmw F30 328i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 2.0,
        power: 241,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 330i
  bmwF30[EEngine.BmwF30_330i] = {
    title: "Bmw F30 330i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 2.0,
        power: 248,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 335i
  bmwF30[EEngine.BmwF30_335i] = {
    title: "Bmw F30 335i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2015],
        size: 3.0,
        power: 306,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 340i
  bmwF30[EEngine.BmwF30_340i] = {
    title: "Bmw F30 340i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 3.0,
        power: 322,
        cyl: "L6 Turbo",
      },
    ],
  };

  // m3
  bmwF30[EEngine.BmwF30_m3] = {
    title: "Bmw F30 M3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2020],
        size: 3.0,
        power: 425,
        cyl: "L6 Turbo",
      },
    ],
  };
}

function genBmwG20(bmwG20) {
  // 318i
  bmwG20[EEngine.BmwG20_318i] = {
    title: "Bmw G20 318i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 2.0,
        power: 154,
        cyl: "L4",
      },
    ],
  };

  // 320i
  bmwG20[EEngine.BmwG20_320i] = {
    title: "Bmw G20 320i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 325i
  bmwG20[EEngine.BmwG20_325i] = {
    title: "Bmw G20 325i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 320e
  bmwG20[EEngine.BmwG20_320e] = {
    title: "Bmw G20 320e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 201,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // 330i
  bmwG20[EEngine.BmwG20_330i] = {
    title: "Bmw G20 330i",
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

  // 330e
  bmwG20[EEngine.BmwG20_330e] = {
    title: "Bmw G20 330e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 288,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // M340i
  bmwG20[EEngine.BmwG20_M340i] = {
    title: "Bmw G20 M340i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 382,
        cyl: "L6 Turbo",
      },
    ],
  };

  // M340i
  bmwG20[EEngine.BmwG20_b3] = {
    title: "Bmw G20 Alpina B3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 461,
        cyl: "L6 Turbo",
      },
    ],
  };

  // m3
  bmwG20[EEngine.BmwG20_m3] = {
    title: "Bmw G20 M3",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 3.0,
        power: 473,
        cyl: "L6 Biturbo",
      },
    ],
  };

  // diesel
  bmwG20[EEngine.BmwG20_318d] = {
    title: "Bmw G20 318d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG20[EEngine.BmwG20_320d] = {
    title: "Bmw G20 320d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG20[EEngine.BmwG20_330d] = {
    title: "Bmw G20 330d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 261,
        cyl: "L6 Turbo",
      },
    ],
  };

  bmwG20[EEngine.BmwG20_340d] = {
    title: "Bmw G20 M340d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2020, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Biturbo",
      },
    ],
  };

  bmwG20[EEngine.BmwG20_d3] = {
    title: "Bmw G20 Alpina D3 S",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2020, 2023],
        size: 3.0,
        power: 350,
        cyl: "L6 Biturbo",
      },
    ],
  };
}

// Bmw 4 series
function genBmwF32(bmwF32) {
  // 418i
  bmwF32[EEngine.BmwF32_418i] = {
    title: "Bmw F32 418i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 1.5,
        power: 134,
        cyl: "L3 Turbo",
      },
    ],
  };

  // 420i
  bmwF32[EEngine.BmwF32_420i] = {
    title: "Bmw F32 420i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2014, 2016],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
      {
        year: [2016, 2019],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 428i
  bmwF32[EEngine.BmwF32_428i] = {
    title: "Bmw F32 428i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2016],
        size: 2.0,
        power: 241,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 430i
  bmwF32[EEngine.BmwF32_430i] = {
    title: "Bmw F32 430i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 2.0,
        power: 248,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 435i
  bmwF32[EEngine.BmwF32_435i] = {
    title: "Bmw F32 435i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2016],
        size: 3.0,
        power: 306,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 440i
  bmwF32[EEngine.BmwF32_440i] = {
    title: "Bmw F32 440i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2019],
        size: 3.0,
        power: 322,
        cyl: "L6 Turbo",
      },
    ],
  };

  // m4
  bmwF32[EEngine.BmwF32_m4] = {
    title: "Bmw F32 M4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 3.0,
        power: 425,
        cyl: "L6 Biturbo",
      },
    ],
  };
}

function genBmwG22(bmwG22) {
  // 420i
  bmwG22[EEngine.BmwG22_420i] = {
    title: "Bmw G22 420i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 430i
  bmwG22[EEngine.BmwG22_430i] = {
    title: "Bmw G22 430i",
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

  // M440i
  bmwG22[EEngine.BmwG22_M440i] = {
    title: "Bmw G22 M440i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 3.0,
        power: 382,
        cyl: "L6 Turbo",
      },
    ],
  };

  // m4
  bmwG22[EEngine.BmwG22_m4] = {
    title: "Bmw G22 M4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 3.0,
        power: 473,
        cyl: "L6 Biturbo",
      },
    ],
  };
}

// Bmw 5 series
function genBmwE60(bmwE60) {
  // 320i
  bmwE60[EEngine.BmwE60_520i] = {
    title: "Bmw E60 520i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 2.2,
        power: 168,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 2.0,
        power: 154,
        cyl: "L4",
      },
      {
        year: [2007, 2010],
        size: 2.0,
        power: 168,
        cyl: "L4",
      },
    ],
  };

  // 523i
  bmwE60[EEngine.BmwE60_523i] = {
    title: "Bmw E60 523i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2007],
        size: 2.5,
        power: 174,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 2.5,
        power: 188,
        cyl: "L6",
      },
    ],
  };

  // 525i
  bmwE60[EEngine.BmwE60_525i] = {
    title: "Bmw E60 525i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 2.5,
        power: 189,
        cyl: "L6",
      },
      {
        year: [2005, 2007],
        size: 2.5,
        power: 215,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 3.0,
        power: 215,
        cyl: "L6",
      },
    ],
  };

  // 528i
  bmwE60[EEngine.BmwE60_528i] = {
    title: "Bmw E60 528i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 3.0,
        power: 231,
        cyl: "L6",
      },
    ],
  };

  // 530i
  bmwE60[EEngine.BmwE60_530i] = {
    title: "Bmw E60 530i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 3.0,
        power: 230,
        cyl: "L6",
      },
      {
        year: [2005, 2007],
        size: 3.0,
        power: 255,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 3.0,
        power: 268,
        cyl: "L6",
      },
    ],
  };

  // 535i
  bmwE60[EEngine.BmwE60_535i] = {
    title: "Bmw E60 535i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 3.0,
        power: 306,
        cyl: "L6 Biturbo",
      },
    ],
  };

  // 540i
  bmwE60[EEngine.BmwE60_540i] = {
    title: "Bmw E60 540i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2010],
        size: 4.0,
        power: 302,
        cyl: "V8",
      },
    ],
  };

  // 545i
  bmwE60[EEngine.BmwE60_545i] = {
    title: "Bmw E60 545i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2003, 2005],
        size: 4.4,
        power: 329,
        cyl: "V8",
      },
    ],
  };

  // 545i
  bmwE60[EEngine.BmwE60_550i] = {
    title: "Bmw E60 545i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2010],
        size: 4.8,
        power: 362,
        cyl: "V8",
      },
    ],
  };

  // m5
  bmwE60[EEngine.BmwE60_m5] = {
    title: "Bmw E60 M5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2010],
        size: 5.0,
        power: 500,
        cyl: "V10",
      },
    ],
  };
}

function genBmwF10(bmwF10) {
  // 520i
  bmwF10[EEngine.BmwF10_520i] = {
    title: "Bmw F10 520i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2016],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 523i
  bmwF10[EEngine.BmwF10_523i] = {
    title: "Bmw F10 523i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2011],
        size: 2.5,
        power: 201,
        cyl: "L6",
      },
      {
        year: [2010, 2011],
        size: 3.0,
        power: 201,
        cyl: "L6",
      },
    ],
  };

  // 528i
  bmwF10[EEngine.BmwF10_528i] = {
    title: "Bmw F10 528i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2011],
        size: 3.0,
        power: 255,
        cyl: "L6",
      },
      {
        year: [2010, 2011],
        size: 3.0,
        power: 240,
        cyl: "L6",
      },
      {
        year: [2012, 2016],
        size: 2.0,
        power: 241,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 530i
  bmwF10[EEngine.BmwF10_530i] = {
    title: "Bmw F10 530i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2013],
        size: 3.0,
        power: 268,
        cyl: "L6",
      },
    ],
  };

  // 535i
  bmwF10[EEngine.BmwF10_535i] = {
    title: "Bmw F10 535i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2017],
        size: 3.0,
        power: 306,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 550i
  bmwF10[EEngine.BmwF10_550i] = {
    title: "Bmw F10 550i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2013],
        size: 4.4,
        power: 402,
        cyl: "V8 Turbo",
      },
      {
        year: [2014, 2017],
        size: 4.4,
        power: 444,
        cyl: "V8 Turbo",
      },
    ],
  };

  // m5
  bmwF10[EEngine.BmwF10_m5] = {
    title: "Bmw F10 M5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2016],
        size: 4.4,
        power: 553,
        cyl: "V8 Turbo",
      },
    ],
  };
}

function genBmwG30(bmwG30) {
  // 520i
  bmwG30[EEngine.BmwG30_520i] = {
    title: "Bmw G30 520i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.6,
        power: 168,
        cyl: "L4 Turbo",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 181,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 520e
  bmwG30[EEngine.BmwG30_520e] = {
    title: "Bmw G30 520e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 2.0,
        power: 201,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // 530i
  bmwG30[EEngine.BmwG30_530i] = {
    title: "Bmw G30 530i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 248,
        cyl: "L4",
      },
    ],
  };

  // 530e
  bmwG30[EEngine.BmwG30_530e] = {
    title: "Bmw G30 530e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 248,
        cyl: "L4 Turbo / Electric",
      },
      {
        year: [2017, 2023],
        size: 2.0,
        power: 292,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // 540i
  bmwG30[EEngine.BmwG30_540i] = {
    title: "Bmw G30 540i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 545e
  bmwG30[EEngine.BmwG30_545e] = {
    title: "Bmw G30 545e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 3.0,
        power: 389,
        cyl: "L6 Turbo / Electric",
      },
    ],
  };

  // M550i
  bmwG30[EEngine.BmwG30_M550i] = {
    title: "Bmw G30 M550i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2020],
        size: 4.4,
        power: 456,
        cyl: "V8 Biturbo",
      },
      {
        year: [2020, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // m5
  bmwG30[EEngine.BmwG30_m5] = {
    title: "Bmw G30 M5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.4,
        power: 591,
        cyl: "V8 Biturbo",
      },
      {
        year: [2019, 2023],
        size: 4.4,
        power: 617,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // diesel
  bmwG30[EEngine.BmwG30_518d] = {
    title: "Bmw G30 518d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2020],
        size: 2.0,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_520d] = {
    title: "Bmw G30 520d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_523d] = {
    title: "Bmw G30 523d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 188,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_525d] = {
    title: "Bmw G30 525d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2020],
        size: 2.0,
        power: 228,
        cyl: "L4 Turbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_530d] = {
    title: "Bmw G30 530d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2020],
        size: 3.0,
        power: 261,
        cyl: "L6 Turbo",
      },
      {
        year: [2020, 2023],
        size: 3.0,
        power: 282,
        cyl: "L6 Turbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_540d] = {
    title: "Bmw G30 540d",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2020],
        size: 3.0,
        power: 315,
        cyl: "L6 Biturbo",
      },
      {
        year: [2020, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Biturbo",
      },
    ],
  };

  bmwG30[EEngine.BmwG30_550d] = {
    title: "Bmw G30 M550d xDrive",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2017, 2020],
        size: 3.0,
        power: 394,
        cyl: "L6 Quad Turbo",
      },
    ],
  };
}

// Bmw 6 Series
function genBmwE63(bmwE63) {
  // 630i
  bmwE63[EEngine.BmwE63_630i] = {
    title: "Bmw E63 630i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 3.0,
        power: 255,
        cyl: "L6",
      },
      {
        year: [2007, 2010],
        size: 3.0,
        power: 268,
        cyl: "L6",
      },
    ],
  };

  // 545i
  bmwE63[EEngine.BmwE63_645i] = {
    title: "Bmw E63 645i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2005],
        size: 4.4,
        power: 329,
        cyl: "V8",
      },
    ],
  };

  // 650i
  bmwE63[EEngine.BmwE63_650i] = {
    title: "Bmw E63 M6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2010],
        size: 4.8,
        power: 362,
        cyl: "V8",
      },
    ],
  };

  // m5
  bmwE63[EEngine.BmwE63_m6] = {
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2005, 2010],
        size: 5.0,
        power: 500,
        cyl: "V10",
      },
    ],
  };
}

function genBmwF12(bmwF12) {
  // 640i
  bmwF12[EEngine.BmwF12_640i] = {
    title: "Bmw 6 SERIES 640i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2019],
        size: 3.0,
        power: 315,
        cyl: "L6",
      },
    ],
  };

  // 650i
  bmwF12[EEngine.BmwF12_650i] = {
    title: "Bmw 6 SERIES 650i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2013],
        size: 4.4,
        power: 402,
        cyl: "V8 Biturbo",
      },
      {
        year: [2013, 2019],
        size: 4.4,
        power: 444,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // m6
  bmwF12[EEngine.BmwF12_m6] = {
    title: "Bmw 6 SERIES M6",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2018],
        size: 4.4,
        power: 553,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

// Bmw 7 series
function genBmwF01(bmwF01) {
  // 730i
  bmwF01[EEngine.BmwF01_730i] = {
    title: "Bmw F01 730i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2015],
        size: 3.0,
        power: 255,
        cyl: "L6",
      },
    ],
  };

  // 740i
  bmwF01[EEngine.BmwF01_740i] = {
    title: "Bmw F01 740i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2012],
        size: 3.0,
        power: 322,
        cyl: "L6 Biturbo",
      },
      {
        year: [2012, 2015],
        size: 3.0,
        power: 315,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 750i
  bmwF01[EEngine.BmwF01_750i] = {
    title: "Bmw F01 750i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2012],
        size: 4.4,
        power: 402,
        cyl: "V8 Biturbo",
      },
      {
        year: [2012, 2015],
        size: 4.4,
        power: 444,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // 760i
  bmwF01[EEngine.BmwF01_760i] = {
    title: "Bmw F01 760i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2015],
        size: 6.0,
        power: 536,
        cyl: "V12 Biturbo",
      },
    ],
  };

  // ActiveHybrid7
  bmwF01[EEngine.BmwF01_ActiveHybrid7] = {
    title: "Bmw F01 ActiveHybrid7",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2012],
        size: 4.4,
        power: 456,
        cyl: "V8 Biturbo / Electric",
      },
      {
        year: [2012, 2015],
        size: 3.0,
        power: 349,
        cyl: "L6 Turbo / Electric",
      },
    ],
  };
}

function genBmwG11(bmwG11) {
  // 730i
  bmwG11[EEngine.BmwG11_730i] = {
    title: "Bmw G11 730i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2022],
        size: 2.0,
        power: 255,
        cyl: "L4 Turbo",
      },
    ],
  };

  // 740i
  bmwG11[EEngine.BmwG11_740i] = {
    title: "Bmw G11 740i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2022],
        size: 3.0,
        power: 322,
        cyl: "L6 Turbo",
      },
    ],
  };

  // 740e
  bmwG11[EEngine.BmwG11_740e] = {
    title: "Bmw G11 740e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        size: 2.0,
        year: [2016, 2019],
        power: 322,
        cyl: "L4 Turbo / Electric",
      },
    ],
  };

  // 745e
  bmwG11[EEngine.BmwG11_745e] = {
    title: "Bmw G11 745e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2022],
        size: 3.0,
        power: 389,
        cyl: "L6 Turbo / Electric",
      },
    ],
  };

  // 750i
  bmwG11[EEngine.BmwG11_750i] = {
    title: "Bmw G11 750i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2019],
        size: 4.4,
        power: 444,
        cyl: "V8 Biturbo",
      },
      {
        year: [2019, 2022],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  // M760i
  bmwG11[EEngine.BmwG11_M760i] = {
    title: "Bmw G11 M760i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2019],
        size: 6.6,
        power: 602,
        cyl: "V12 Biturbo",
      },
      {
        year: [2019, 2022],
        size: 6.6,
        power: 577,
        cyl: "V12 Biturbo",
      },
    ],
  };
}

function genBmwG15(model) {
  model[EEngine.BmwG15_840i] = {
    title: "Bmw 840i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwG15_850i] = {
    title: "Bmw 850i xDrive",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwG15_m8] = {
    title: "Bmw M8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 4.4,
        power: 591,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwG15_m8c] = {
    title: "Bmw M8 Competition",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 4.4,
        power: 617,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwG15_b8] = {
    title: "Bmw Alpina B8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 4.4,
        power: 612,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genX5E53(model) {
  model[EEngine.BmwX5E53_30] = {
    title: "Bmw X5 E53 3.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2000, 2006],
        size: 3.0,
        power: 231,
        cyl: "L6",
      },
    ],
  };

  model[EEngine.BmwX5E53_44] = {
    title: "Bmw X5 E53 4.4i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [1999, 2004],
        size: 4.4,
        power: 286,
        cyl: "V8",
      },
      {
        year: [2004, 2006],
        size: 4.4,
        power: 320,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.BmwX5E53_46] = {
    title: "Bmw X5 E53 4.6is",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2002, 2004],
        size: 4.6,
        power: 347,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.BmwX5E53_48] = {
    title: "Bmw X5 E53 4.8is",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2004, 2006],
        size: 4.8,
        power: 360,
        cyl: "V8",
      },
    ],
  };
}

function genX5E70(model) {
  model[EEngine.BmwX5E70_30] = {
    title: "Bmw X5 E70 3.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 3.0,
        power: 268,
        cyl: "L6",
      },
    ],
  };

  model[EEngine.BmwX5E70_35] = {
    title: "Bmw X5 E70 3.5i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2013],
        size: 3.0,
        power: 302,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5E70_48] = {
    title: "Bmw X5 E70 4.8i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2007, 2010],
        size: 4.8,
        power: 350,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.BmwX5E70_50] = {
    title: "Bmw X5 E70 5.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2013],
        size: 4.4,
        power: 402,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX5E70_m] = {
    title: "Bmw X5 M E70",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2010, 2013],
        size: 4.4,
        power: 547,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genX5F15(model) {
  model[EEngine.BmwX5F15_35] = {
    title: "Bmw X5 F15 3.5i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 3.0,
        power: 302,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5F15_40e] = {
    title: "Bmw X5 F15 4.0e",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2015, 2018],
        size: 2.0,
        power: 308,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.BmwX5F15_50] = {
    title: "Bmw X5 F15 5.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2018],
        size: 4.4,
        power: 444,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genX5G05(model) {
  model[EEngine.BmwX5G05_30] = {
    title: "Bmw X5 G05 3.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 261,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_40] = {
    title: "Bmw X5 G05 4.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 329,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_45e] = {
    title: "Bmw X5 G05 4.5e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2022],
        size: 3.0,
        power: 389,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.BmwX5G05_50e] = {
    title: "Bmw X5 G05 5.0e",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2023, 2023],
        size: 3.0,
        power: 483,
        cyl: "L6 Turbo Hybrid",
      },
    ],
  };

  model[EEngine.BmwX5G05_50] = {
    title: "Bmw X5 G05 5.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2020],
        size: 4.4,
        power: 456,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_M50] = {
    title: "Bmw X5 G05 M50i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_M] = {
    title: "Bmw X5 M G05 ",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.4,
        power: 591,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_MC] = {
    title: "Bmw X5 M Competition G05 ",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.4,
        power: 617,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_25d] = {
    title: "Bmw G05 X5 xDrive25d ",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 228,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_30d] = {
    title: "Bmw G05 X5 xDrive30d ",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 261,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_40d] = {
    title: "Bmw G05 X5 xDrive40d ",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX5G05_50d] = {
    title: "Bmw G05 X5 M50d ",
    engineType: EEngineType.Diesel,
    engines: [
      {
        year: [2018, 2020],
        size: 3.0,
        power: 394,
        cyl: "L6 Turbo",
      },
    ],
  };
}

function genX6E71(model) {
  model[EEngine.BmwX6E71_35] = {
    title: "Bmw X6 E71 3.5i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2014],
        size: 3.0,
        power: 306,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX6E71_50] = {
    title: "Bmw X6 E71 5.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2014],
        size: 4.4,
        power: 402,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6E71_M] = {
    title: "Bmw X6 M E71",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2014],
        size: 4.4,
        power: 547,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6E71_h] = {
    title: "Bmw X6 E71 ActiveHybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2008, 2014],
        size: 4.4,
        power: 479,
        cyl: "V8 Biturbo Hybrid",
      },
    ],
  };
}

function genX6F16(model) {
  model[EEngine.BmwX6F16_35] = {
    title: "Bmw X6 F16 3.5i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 3.0,
        power: 302,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX6F16_50] = {
    title: "Bmw X6 F16 5.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 4.4,
        power: 444,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6F16_m] = {
    title: "Bmw X6 M F16",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 4.4,
        power: 567,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

function genX6G06(model) {
  model[EEngine.BmwX6G06_40] = {
    title: "Bmw X6 G06 4.0i",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 3.0,
        power: 335,
        cyl: "L6 Turbo",
      },
      {
        year: [2023, 2023],
        size: 3.0,
        power: 375,
        cyl: "L6 Turbo",
      },
    ],
  };

  model[EEngine.BmwX6G06_m50] = {
    title: "Bmw X6 M50i G06",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6G06_m60] = {
    title: "Bmw X6 M60i G06",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2023, 2023],
        size: 4.4,
        power: 523,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6G06_m] = {
    title: "Bmw X6 M G06",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.4,
        power: 591,
        cyl: "V8 Biturbo",
      },
    ],
  };

  model[EEngine.BmwX6G06_mc] = {
    title: "Bmw X6 M Competition G06",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 4.4,
        power: 617,
        cyl: "V8 Biturbo",
      },
    ],
  };
}

export function genBmw(gMakes) {
  gMakes[EMake.Bmw] = {};

  // Bmw 3 series
  gMakes[EMake.Bmw][ESerie.Bmw3] = {};
  const bmwE46 = (gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3E46] = {});
  genBmwE46(bmwE46);
  const bmwE90 = (gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3E90] = {});
  genBmwE90(bmwE90);
  const bmwE92 = (gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3E92] = {});
  genBmwE92(bmwE92);
  const bmwF30 = (gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3F30] = {});
  genBmwF30(bmwF30);
  const bmwG20 = (gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3G20] = {});
  genBmwG20(bmwG20);

  // Bmw 4 series
  gMakes[EMake.Bmw][ESerie.Bmw4] = {};
  const bmwF32 = (gMakes[EMake.Bmw][ESerie.Bmw4][EModel.Bmw4F32] = {});
  genBmwF32(bmwF32);
  const bmwG22 = (gMakes[EMake.Bmw][ESerie.Bmw4][EModel.Bmw4G22] = {});
  genBmwG22(bmwG22);

  // Bmw 5 series
  gMakes[EMake.Bmw][ESerie.Bmw5] = {};
  const bmwE60 = (gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5E60] = {});
  genBmwE60(bmwE60);
  const bmwF10 = (gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5F10] = {});
  genBmwF10(bmwF10);
  const bmwG30 = (gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5G30] = {});
  genBmwG30(bmwG30);

  // Bmw 6 series
  gMakes[EMake.Bmw][ESerie.Bmw6] = {};
  const bmwE63 = (gMakes[EMake.Bmw][ESerie.Bmw6][EModel.Bmw6E63] = {});
  genBmwE63(bmwE63);
  const bmwF12 = (gMakes[EMake.Bmw][ESerie.Bmw6][EModel.Bmw6F12] = {});
  genBmwF12(bmwF12);

  // Bmw 7 series
  gMakes[EMake.Bmw][ESerie.Bmw7] = {};
  const bmwF01 = (gMakes[EMake.Bmw][ESerie.Bmw7][EModel.Bmw7F01] = {});
  genBmwF01(bmwF01);
  const bmwG11 = (gMakes[EMake.Bmw][ESerie.Bmw7][EModel.Bmw7G11] = {});
  genBmwG11(bmwG11);

  // Bmw 8 series
  gMakes[EMake.Bmw][ESerie.Bmw8] = {};
  const bmwG15 = (gMakes[EMake.Bmw][ESerie.Bmw8][EModel.Bmw8G15] = {});
  genBmwG15(bmwG15);

  // Bmw x5 series
  gMakes[EMake.Bmw][ESerie.BmwX5] = {};
  const e53 = (gMakes[EMake.Bmw][ESerie.BmwX5][EModel.BmwX5E53] = {});
  genX5E53(e53);

  const e70 = (gMakes[EMake.Bmw][ESerie.BmwX5][EModel.BmwX5E70] = {});
  genX5E70(e70);

  const f15 = (gMakes[EMake.Bmw][ESerie.BmwX5][EModel.BmwX5F15] = {});
  genX5F15(f15);

  const g05 = (gMakes[EMake.Bmw][ESerie.BmwX5][EModel.BmwX5G05] = {});
  genX5G05(g05);

  // Bmw x6 series
  gMakes[EMake.Bmw][ESerie.BmwX6] = {};
  const e71 = (gMakes[EMake.Bmw][ESerie.BmwX6][EModel.BmwX6E71] = {});
  genX6E71(e71);

  const f16 = (gMakes[EMake.Bmw][ESerie.BmwX6][EModel.BmwX6F16] = {});
  genX6F16(f16);

  const g06 = (gMakes[EMake.Bmw][ESerie.BmwX6][EModel.BmwX6G06] = {});
  genX6G06(g06);
}
