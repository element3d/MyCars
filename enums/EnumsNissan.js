import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genSentra2019(model) {
  model[EEngine.NissanSentra2019_20] = {
    title: "Nissan Sentra 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 149,
        cyl: "L4",
      },
    ],
  };
}

function genAltima2013(model) {
  model[EEngine.NissanAltima2013_25] = {
    title: "Nissan Altima 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 2.5,
        power: 182,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.NissanAltima2013_35] = {
    title: "Nissan Altima 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2019],
        size: 3.5,
        power: 270,
        cyl: "V6",
      },
    ],
  };
}

function genAltima2019(model) {
  model[EEngine.NissanAltima2019_25] = {
    title: "Nissan Altima 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.5,
        power: 182,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.NissanAltima2019_20t] = {
    title: "Nissan Altima 2.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2019, 2023],
        size: 2.0,
        power: 250,
        cyl: "L4 Turbo",
      },
    ],
  };
}

function genMaxima2008(model) {
  model[EEngine.NissanMaxima2008_35] = {
    title: "Nissan Maxima 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2014],
        size: 3.5,
        power: 290,
        cyl: "V6",
      },
    ],
  };
}

function genMaxima2014(model) {
  model[EEngine.NissanMaxima2014_35] = {
    title: "Nissan Maxima 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 3.5,
        power: 300,
        cyl: "V6",
      },
    ],
  };
}

function genRogue2013(model) {
  model[EEngine.NissanRogue2013_25] = {
    title: "Nissan Rogue 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2013, 2020],
        size: 2.5,
        power: 170,
        cyl: "L4",
      },
    ],
  };
}

function genRogue2020(model) {
  model[EEngine.NissanRogue2020_25] = {
    title: "Nissan Rogue 2.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 2.5,
        power: 170,
        cyl: "L4",
      },
    ],
  };

  model[EEngine.NissanRogue2020_15t] = {
    title: "Nissan Rogue 1.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2020, 2023],
        size: 1.5,
        power: 201,
        cyl: "L3 Turbo",
      },
    ],
  };
}

export function genNissan(gMakes) {
  gMakes[EMake.Nissan] = {};

  // Sentra 2019
  gMakes[EMake.Nissan][ESerie.NissanSentra] = {};
  const sentra2019 = (gMakes[EMake.Nissan][ESerie.NissanSentra][
    EModel.NissanSentraB18
  ] = {});
  genSentra2019(sentra2019);

  // Altima 2013
  gMakes[EMake.Nissan][ESerie.NissanAltima] = {};
  const altima2013 = (gMakes[EMake.Nissan][ESerie.NissanAltima][
    EModel.NissanAltimaL33
  ] = {});
  genAltima2013(altima2013);

  // Altima 2019
  const altima2019 = (gMakes[EMake.Nissan][ESerie.NissanAltima][
    EModel.NissanAltimaL34
  ] = {});
  genAltima2019(altima2019);

  // Maxima 2008
  gMakes[EMake.Nissan][ESerie.NissanMaxima] = {};
  const maxima2008 = (gMakes[EMake.Nissan][ESerie.NissanMaxima][
    EModel.NissanMaximaA35
  ] = {});
  genMaxima2008(maxima2008);

  const maxima2014 = (gMakes[EMake.Nissan][ESerie.NissanMaxima][
    EModel.NissanMaximaA36
  ] = {});
  genMaxima2014(maxima2014);

  // Rouge 2013
  gMakes[EMake.Nissan][ESerie.NissanRogue] = {};
  const rouge2013 = (gMakes[EMake.Nissan][ESerie.NissanRogue][
    EModel.NissanRogue2013
  ] = {});
  genRogue2013(rouge2013);

  const rouge2020 = (gMakes[EMake.Nissan][ESerie.NissanRogue][
    EModel.NissanRogue2020
  ] = {});
  genRogue2020(rouge2020);
}
