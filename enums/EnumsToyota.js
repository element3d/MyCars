import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genCorolla2018(model) {
  model[EEngine.ToyotaCorolla2018_18] = {
    title: "Toyota Corolla 1.8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.8,
        power: 139,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCorolla2018_18h] = {
    title: "Toyota Corolla 1.8 Hybrid",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 1.8,
        power: 121,
        cyl: "L4",
      },
      {
        year: [2018, 2023],
        size: 1.8,
        power: 138,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCorolla2018_20] = {
    title: "Toyota Corolla 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 169,
        cyl: "L4",
      },
    ],
  };
}

function genCamry2006(model) {
  model[EEngine.ToyotaCamryXV40_24] = {
    title: "Toyota Camry 2.4",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2011],
        size: 2.4,
        power: 158,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV40_24h] = {
    title: "Toyota Camry 2.4 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2006, 2011],
        size: 2.4,
        power: 187,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV40_25] = {
    title: "Toyota Camry 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2011],
        size: 2.5,
        power: 178,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV40_35] = {
    title: "Toyota Camry 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2011],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
    ],
  };
}

function genCamry2011(model) {
  model[EEngine.ToyotaCamryXV50_25] = {
    title: "Toyota Camry 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2017],
        size: 2.5,
        power: 181,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV50_35] = {
    title: "Toyota Camry 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2017],
        size: 3.5,
        power: 268,
        cyl: "V6",
      },
    ],
  };
}

function genCamry2017(model) {
  model[EEngine.ToyotaCamryXV70_20] = {
    title: "Toyota Camry 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 150,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV70_25] = {
    title: "Toyota Camry 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2021],
        size: 2.0,
        power: 181,
        cyl: "L4",
      },
      {
        year: [2021, 2023],
        size: 2.0,
        power: 200,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaCamryXV70_35] = {
    title: "Toyota Camry 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2017, 2023],
        size: 2.0,
        power: 249,
        cyl: "V6",
      },
    ],
  };
}

function genRav42018(model) {
  model[EEngine.ToyotaRav4XA50_20] = {
    title: "Toyota RAV4 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.0,
        power: 169,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaRav4XA50_25] = {
    title: "Toyota RAV4 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2018, 2023],
        size: 2.5,
        power: 202,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaRav4XA50_25h] = {
    title: "Toyota RAV4 2.5 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 2.5,
        power: 219,
        cyl: "L4 Hybrid",
      },
    ],
  };

  model[EEngine.ToyotaRav4XA50_25h2] = {
    title: "Toyota RAV4 2.5 Hybrid",
    engineType: EEngineType.Hybrid,
    engines: [
      {
        year: [2018, 2023],
        size: 2.5,
        power: 302,
        cyl: "L4 Hybrid",
      },
    ],
  };
}

function genPrado2009(model) {
  model[EEngine.ToyotaPrado2009_27] = {
    title: "Toyota Land Cruiser Prado 2.7",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2023],
        size: 2.7,
        power: 167,
        cyl: "L4",
      },
      {
        year: [2009, 2023],
        size: 2.7,
        power: 150,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.ToyotaPrado2009_40] = {
    title: "Toyota Land Cruiser Prado 4.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2023],
        size: 4.0,
        power: 249,
        cyl: "V6",
      },
    ],
  };
}

function genLandCruiser2008(model) {
  model[EEngine.ToyotaLandCruiser200_40] = {
    title: "Toyota Land Cruiser J200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2021],
        size: 4.0,
        power: 271,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.ToyotaLandCruiser200_46] = {
    title: "Toyota Land Cruiser J200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2021],
        size: 4.6,
        power: 309,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.ToyotaLandCruiser200_47] = {
    title: "Toyota Land Cruiser J200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2021],
        size: 4.7,
        power: 288,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.ToyotaLandCruiser200_57] = {
    title: "Toyota Land Cruiser J200",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2021],
        size: 5.7,
        power: 381,
        cyl: "V8",
      },
    ],
  };
}

function genLandCruiser2021(model) {
  model[EEngine.ToyotaLandCruiser300_34] = {
    title: "Toyota Land Cruiser J300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 3.4,
        power: 409,
        cyl: "V6 Biturbo",
      },
    ],
  };

  model[EEngine.ToyotaLandCruiser300_40] = {
    title: "Toyota Land Cruiser J300",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2021, 2023],
        size: 4.0,
        power: 270,
        cyl: "V6",
      },
    ],
  };
}

export function genToyota(gMakes) {
  gMakes[EMake.Toyota] = {};

  // Corolla 2018
  gMakes[EMake.Toyota][ESerie.ToyotaCorolla] = {};
  const corolla2018 = (gMakes[EMake.Toyota][ESerie.ToyotaCorolla][
    EModel.ToyotaCorollaE210
  ] = {});
  genCorolla2018(corolla2018);

  // Camry
  gMakes[EMake.Toyota][ESerie.ToyotaCamry] = {};
  const camry2006 = (gMakes[EMake.Toyota][ESerie.ToyotaCamry][
    EModel.ToyotaCamryXV40
  ] = {});
  genCamry2006(camry2006);

  const camry2011 = (gMakes[EMake.Toyota][ESerie.ToyotaCamry][
    EModel.ToyotaCamryXV50
  ] = {});
  genCamry2011(camry2011);

  const camry2017 = (gMakes[EMake.Toyota][ESerie.ToyotaCamry][
    EModel.ToyotaCamryXV70
  ] = {});
  genCamry2017(camry2017);

  // rav4 2018
  gMakes[EMake.Toyota][ESerie.ToyotaRAV4] = {};
  const rav42018 = (gMakes[EMake.Toyota][ESerie.ToyotaRAV4][
    EModel.ToyotaRAV4XA50
  ] = {});
  genRav42018(rav42018);

  // Prado 2009
  gMakes[EMake.Toyota][ESerie.ToyotaLandCruiserPrado] = {};
  const prado2009 = (gMakes[EMake.Toyota][ESerie.ToyotaLandCruiserPrado][
    EModel.ToyotaLandCruiserPrado150
  ] = {});
  genPrado2009(prado2009);

  // Ladn cruiser 2021
  gMakes[EMake.Toyota][ESerie.ToyotaLandCruiser] = {};
  const land2008 = (gMakes[EMake.Toyota][ESerie.ToyotaLandCruiser][
    EModel.ToyotaLandCruiser200
  ] = {});
  genLandCruiser2008(land2008);

  const land2021 = (gMakes[EMake.Toyota][ESerie.ToyotaLandCruiser][
    EModel.ToyotaLandCruiser300
  ] = {});
  genLandCruiser2021(land2021);
}
