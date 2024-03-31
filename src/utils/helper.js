export const groupData = (data) => {
  const groupedData = {};
  data.forEach((entry) => {
    const alcohol = entry.Alcohol;
    if (!groupedData[alcohol]) {
      groupedData[alcohol] = [];
    }
    groupedData[alcohol].push({
      Flavanoids: entry?.Flavanoids,
      Hue: entry?.Hue,
      Ash: entry?.Ash,
      Magnesium: entry?.Magnesium,
    });
  });
  return groupedData;
};
