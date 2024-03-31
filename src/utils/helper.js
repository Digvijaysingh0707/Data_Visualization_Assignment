export const groupData = (data, type) => {
  const groupedData = {};
  data.forEach((entry) => {
    const alcohol = entry.Alcohol;
    if (!groupedData[alcohol]) {
      groupedData[alcohol] = [];
    } else {
      if (type === "flavanoids") {
        groupedData[alcohol].push(entry?.Flavanoids);
      } else {
        groupedData[alcohol].push({
          Flavanoids: entry?.Flavanoids,
          Hue: entry?.Hue,
          Ash: entry?.Ash,
          Magnesium: entry?.Magnesium,
        });
      }
    }
  });
  return groupedData;
};
