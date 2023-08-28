// TYPES
export const AUTH_METHOD = {
  LOGIN: "login",
  REGISTRATION: "registration",
};

const CAR_BODY_TYPES = {
  SUV: "SUV",
  HATCHBACK: "Hatchback",
  SEDAN: "Sedan",
};

const ENGINE_TYPES = {
  DIESEL: "Diesel",
  PATROL: "Patrol",
  HYBRID: "Hybrid",
  ELECTRIC: "Electric",
};

const DRIVE_CONFIGURATION = {
  FOUR_WHEEL: "4WD",
  TWO_WHEEL: "2WD",
};

const TRANSMISSION = {
  AUTOMATIC: "Automatic",
  MANUAL: "Manual",
};

export const COLOR_TYPES = {
  BLACK: "#000",
  SILVER: "#C0C0C0",
  WHITE: "#FFFFFF",
  GREY: "#808080",
  BLUE: "#0000FF",
  RED: "#ff0000",
  GREEN: "#008000",
  BROWN: "#964B00",
  BEIGE: "#F5F5DC",
  LIGHT_BLUE: "#3CDFFF",
  GOLDEN: "#FFD700",
  PURPLE: "#800080",
  VIOLET: "#7F00FF",
  YELLOW: "#FFFF00",
  ORANGE: "#FFA500",
  PINK: "#FFC0CB",
};

// HARDCODED DATA
export const CarBodyTypes = [
  CAR_BODY_TYPES.HATCHBACK,
  CAR_BODY_TYPES.SEDAN,
  CAR_BODY_TYPES.SUV,
];

export const EngineTypes = [
  ENGINE_TYPES.DIESEL,
  ENGINE_TYPES.ELECTRIC,
  ENGINE_TYPES.HYBRID,
  ENGINE_TYPES.PATROL,
];

export const DriveConfiguration = [
  DRIVE_CONFIGURATION.FOUR_WHEEL,
  DRIVE_CONFIGURATION.TWO_WHEEL,
];

export const Transmission = [TRANSMISSION.AUTOMATIC, TRANSMISSION.MANUAL];

export const Colors = [...Object.values(COLOR_TYPES)];
