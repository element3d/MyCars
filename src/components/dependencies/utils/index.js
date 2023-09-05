export function generateYearArrayFrom(fromYear) {
  const currentYear = new Date().getFullYear();
  const startYear = fromYear;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return years;
}
