import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genJetta2018(model) {
  model[EEngine.VolkswagenJetta2018_14] = {
    title: "Volkswagen Jetta 1.4 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.4,
        power: 147,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenJetta2018_15] = {
    title: "Volkswagen Jetta 1.5 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.5,
        power: 158,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenJetta2018_20] = {
    title: "Volkswagen Jetta 2.0 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 228,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genPassat2015(model) {
  model[EEngine.VolkswagenPassat2015_14] = {
    title: "Volkswagen Passat 1.4 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 1.4,
        power: 123,
        cyl: "L4 Turbo",
      },
      {
        year: [2015, 2019],
        size: 1.4,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenPassat2015_15] = {
    title: "Volkswagen Passat 1.5 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 1.5,
        power: 148,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenPassat2015_18] = {
    title: "Volkswagen Passat 1.8 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 1.8,
        power: 178,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenPassat2015_20] = {
    title: "Volkswagen Passat 2.0 TSI",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2019],
        size: 2.0,
        power: 217,
        cyl: "L4 Turbo",
      },
      {
        year: [2015, 2019],
        size: 2.0,
        power: 276,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 187,
        cyl: "L4 Turbo",
      },
      {
        year: [2019, 2023],
        size: 2.0,
        power: 276,
        cyl: "L4 Turbo",
      },
    ],
  };

  model[EEngine.VolkswagenPassat2015_14h] = {
    title: "Volkswagen Passat 1.4 TSI eHybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2015, 2023],
        size: 1.4,
        power: 215,
        cyl: "L4 Turbo Hybrid",
      },
    ],
  };
}

function genId42020(model) {
  model[EEngine.VolkswagenID42020_st] = {
    title: "Volkswagen ID.4 Standart",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2020, 2023],
        size: 0,
        power: 201,
        cyl: "",
      },
    ],
  };

  model[EEngine.VolkswagenID42020_pro] = {
    title: "Volkswagen ID.4 Pro",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2020, 2023],
        size: 0,
        power: 201,
        cyl: "",
      },
    ],
  };

  model[EEngine.VolkswagenID42020_gtx] = {
    title: "Volkswagen ID.4 AWD GTX",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2020, 2023],
        size: 0,
        power: 295,
        cyl: "",
      },
    ],
  };
}

function genId62021(model) {
  model[EEngine.VolkswagenID62021_rwd] = {
    title: "Volkswagen ID.6 RWD",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2021, 2023],
        size: 0,
        power: 177,
        cyl: "",
      },
    ],
  };

  model[EEngine.VolkswagenID62021_awd] = {
    title: "Volkswagen ID.6 AWD",
    engineType: EEngineType.Electro,
    engines: [
      {
        year: [2021, 2023],
        size: 0,
        power: 302,
        cyl: "",
      },
    ],
  };
}

export function genVolkswagen(gMakes) {
  gMakes[EMake.Volkswagen] = {};

  // jetta
  gMakes[EMake.Volkswagen][ESerie.VolkswagenJetta] = {};
  const jetta2018 = (gMakes[EMake.Volkswagen][ESerie.VolkswagenJetta][
    EModel.VolkswagenJetta7
  ] = {});
  genJetta2018(jetta2018);

  // passat
  gMakes[EMake.Volkswagen][ESerie.VolkswagenPassat] = {};
  const passat2015 = (gMakes[EMake.Volkswagen][ESerie.VolkswagenPassat][
    EModel.VolkswagenPassatB8
  ] = {});
  genPassat2015(passat2015);

  // id4
  gMakes[EMake.Volkswagen][ESerie.VolkswagenID4] = {};
  const id42020 = (gMakes[EMake.Volkswagen][ESerie.VolkswagenID4][
    EModel.VolkswagenID42020
  ] = {});
  genId42020(id42020);

  // id6
  gMakes[EMake.Volkswagen][ESerie.VolkswagenID6] = {};
  const id62021 = (gMakes[EMake.Volkswagen][ESerie.VolkswagenID6][
    EModel.VolkswagenID62021
  ] = {});
  genId62021(id62021);
}
