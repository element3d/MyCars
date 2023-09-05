import { EEngine, EEngineType, EMake, EModel, ESerie } from "./Enums";

function genPajero2006(model) {
  model[EEngine.MitsubishiPajero2006_30] = {
    title: "Mitsubishi Pajero 3.0",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2023],
        size: 3.0,
        power: 178,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.MitsubishiPajero2006_38] = {
    title: "Mitsubishi Pajero 3.8",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2006, 2023],
        size: 3.8,
        power: 250,
        cyl: "V6",
      },
    ],
  };

  model[EEngine.MitsubishiPajero2006_35] = {
    title: "Mitsubishi Pajero 3.5",
    engineType: EEngineType.Petrol,
    engines: [
      {
        year: [2009, 2023],
        size: 3.5,
        power: 189,
        cyl: "V6",
      },
    ],
  };
}

export function genMitsubishi(gMakes) {
  gMakes[EMake.Mitsubishi] = {};

  // Mitsubishi Pajero
  gMakes[EMake.Mitsubishi][ESerie.MitsubishiPajero] = {};
  const pajero2006 = (gMakes[EMake.Mitsubishi][ESerie.MitsubishiPajero][
    EModel.MitsubishiPajero2006
  ] = {});
  genPajero2006(pajero2006);
}
