// TYPES
export const AUTH_METHOD = {
  LOGIN: "login",
  REGISTRATION: "registration",
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

export const ENGINE_POWER = [
  "0.7",
  "0.8",
  "1.0",
  "1.1",
  "1.2",
  "1.3",
  "1.4",
  "1.5",
  "1.6",
  "1.7",
  "1.8",
  "1.9",
  "2.0",
  "2.2",
  "2.3",
  "2.4",
  "2.5",
  "2.7",
  "2.8",
  "3.0",
  "3.2",
  "3.3",
  "3.5",
  "3.6",
  "4.0",
  "4.2",
  "4.4",
  "4.5",
  "4.6",
  "4.7",
  "5.0",
  "5.5",
  "5.7",
  "6.0",
  "7.0",
  "8.0",
];

export const STEERING_WHEEL = {
  LEFT_WHEEL: 0,
  RIGHT_WHEEL: 1,
  getString: function (number) {
    if (this.LEFT_WHEEL === number) return "left";
    if (this.RIGHT_WHEEL === number) return "right";
  },
};

export const CLEANED_CUSTOMS = {
  NO: 0,
  YES: 1,
};
