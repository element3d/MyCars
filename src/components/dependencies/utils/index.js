import { EEngine, EMake, EModel, ESerie } from "../../../../enums/Enums";

export function generateYearArrayFrom(fromYear) {
  const currentYear = new Date().getFullYear();
  const startYear = fromYear;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return years;
}

export function _getTitle(item, type) {
  if (type === "make") return EMake.toString(item);
  else if (type === "series") return ESerie.toString(item);
  else if (type === "generation") return EModel.toString(item);
  else if (type === "model") return EEngine.toString(item);
}

export function _getEMakeValues() {
  return [
    ...Object.values(EMake).filter((el, index, self) => {
      // REMOVE DUPLICATES, "NONE" AND "ALL"
      if (self.indexOf(el) !== index) {
        return false;
      }
      if (el === "none" || el === "all") {
        return false;
      }

      return true;
    }),
  ];
}
