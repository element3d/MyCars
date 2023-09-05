import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genMazda62012(model) {
  model[EEngine.Mazda62012_20] = {
    title: "Mazda 6 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2023],
        size: 2.0,
        power: 150,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.Mazda62012_25] = {
    title: "Mazda 6 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2023],
        size: 2.5,
        power: 192,
        cyl: "L4",
      },
      {
        year: [2018, 2023],
        size: 2.5,
        power: 231,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function getCX52016(model) {
  model[EEngine.MazdaCX52016_25] = {
    title: "Mazda CX5 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2016, 2023],
        size: 2.5,
        power: 187,
        cyl: "L4",
      },
      {
        year: [2016, 2023],
        size: 2.5,
        power: 250,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genMazda32013(model) {
  model[EEngine.Mazda32013_20] = {
    title: "Mazda 3 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 2.0,
        power: 155,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.Mazda32013_25] = {
    title: "Mazda 3 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 2.5,
        power: 184,
        cyl: "L4",
      },
    ],
  };
}

function genMazda32019(model) {
  model[EEngine.Mazda32019_20] = {
    title: "Mazda 3 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 155,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.Mazda32019_25] = {
    title: "Mazda 3 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 186,
        cyl: "L4",
      },
      {
        year: [2019, 2023],
        size: 2.5,
        power: 227,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genCX302019(model) {
  model[EEngine.MazdaCX302019_20] = {
    title: "Mazda CX30 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 155,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.MazdaCX302019_25] = {
    title: "Mazda CX30 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.5,
        power: 186,
        cyl: "L4",
      },
      {
        year: [2019, 2023],
        size: 2.5,
        power: 250,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genCX92016(model) {
  model[EEngine.MazdaCX92016_25] = {
    title: "Mazda CX9 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.5,
        power: 250,
        cyl: "L4 Turbo",
      },
    ],
  };
}

export function genMazda(gMakes) {
  gMakes[EMake.Mazda] = {};

  // Mazda 3
  gMakes[EMake.Mazda][ESerie.Mazda3] = {};
  const mazda32013 = (gMakes[EMake.Mazda][ESerie.Mazda3][EModel.Mazda32013] =
    {});
  genMazda32013(mazda32013);

  const mazda32019 = (gMakes[EMake.Mazda][ESerie.Mazda3][EModel.Mazda32019] =
    {});
  genMazda32019(mazda32019);

  // Mazda 6
  gMakes[EMake.Mazda][ESerie.Mazda6] = {};
  const mazda62012 = (gMakes[EMake.Mazda][ESerie.Mazda6][EModel.Mazda62012] =
    {});
  genMazda62012(mazda62012);

  // Mazda cx30
  gMakes[EMake.Mazda][ESerie.MazdaCX30] = {};
  const cx302019 = (gMakes[EMake.Mazda][ESerie.MazdaCX30][
    EModel.MazdaCX302019
  ] = {});
  genCX302019(cx302019);

  // Mazda cx5
  gMakes[EMake.Mazda][ESerie.MazdaCX5] = {};
  const cx52016 = (gMakes[EMake.Mazda][ESerie.MazdaCX5][EModel.MazdaCX52] = {});
  getCX52016(cx52016);

  // Mazda cx9
  gMakes[EMake.Mazda][ESerie.MazdaCX9] = {};
  const cx92016 = (gMakes[EMake.Mazda][ESerie.MazdaCX9][EModel.MazdaCX92016] =
    {});
  genCX92016(cx92016);
}
