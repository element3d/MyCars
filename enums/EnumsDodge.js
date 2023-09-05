import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genCharger(model) {
  model[EEngine.DodgeCharger2011_se] = {
    title: "Dodge Charger SE",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2023],
        size: 3.6,
        power: 292,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_sxt] = {
    title: "Dodge Charger SXT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2023],
        size: 3.6,
        power: 292,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_gt] = {
    title: "Dodge Charger GT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2023],
        size: 3.6,
        power: 300,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_rt] = {
    title: "Dodge Charger R/T",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2011, 2023],
        size: 5.7,
        power: 370,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_srt8] = {
    title: "Dodge Charger SRT8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2012, 2014],
        size: 6.4,
        power: 470,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_scat] = {
    title: "Dodge Charger R/T Scat Pack",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 6.4,
        power: 485,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeCharger2011_hellcat] = {
    title: "Dodge Charger SRT Hellcat",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2015, 2023],
        size: 6.2,
        power: 707,
        cyl: "V8",
      },
    ],
  };
}

function genChallenger(model) {
  model[EEngine.DodgeChallenger2008_se] = {
    title: "Dodge Challenger SE",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 3.6,
        power: 292,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_sxt] = {
    title: "Dodge Challenger SXT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 3.6,
        power: 292,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_gt] = {
    title: "Dodge Challenger GT",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 3.6,
        power: 300,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_rt] = {
    title: "Dodge Challenger R/T",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 5.7,
        power: 370,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_srt8] = {
    title: "Dodge Challenger SRT8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2014],
        size: 6.4,
        power: 470,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_scat] = {
    title: "Dodge Challenger Scat Pack",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 6.4,
        power: 485,
        cyl: "V8",
      },
    ],
  };

  model[EEngine.DodgeChallenger2008_hellcat] = {
    title: "Dodge Challenger SRT Hellcat",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2008, 2023],
        size: 6.2,
        power: 707,
        cyl: "V8",
      },
    ],
  };
}

export function genDodge(gMakes) {
  gMakes[EMake.Dodge] = {};

  // charger 2011
  gMakes[EMake.Dodge][ESerie.DodgeCharger] = {};
  const charger = (gMakes[EMake.Dodge][ESerie.DodgeCharger][
    EModel.DodgeCharger2011
  ] = {});
  genCharger(charger);

  // charger 2011
  gMakes[EMake.Dodge][ESerie.DodgeChallenger] = {};
  const chall = (gMakes[EMake.Dodge][ESerie.DodgeChallenger][
    EModel.DodgeChallenger2008
  ] = {});
  genChallenger(chall);
}
