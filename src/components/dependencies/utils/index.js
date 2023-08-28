export function generateYearArrayFrom(fromYear) {
  const currentYear = new Date().getFullYear();
  const startYear = fromYear;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return years;
}

export const getColorsKeyByValue = (value, colorTypes) => {
  for (const key in colorTypes) {
    if (colorTypes[key] === value) {
      return key;
    }
  }
  return null;
};
