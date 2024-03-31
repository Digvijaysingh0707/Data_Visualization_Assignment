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

export const getMean = (alcoholList) => {
  const meanValues = {};
  for (const alcohol in alcoholList) {
    const values = alcoholList[alcohol];
    const sum = values.reduce((acc, val) => acc + parseFloat(val), 0);
    const mean = (sum / values.length).toFixed(3);
    meanValues[alcohol] = mean;
  }
  return meanValues;
};

export const getMedian = (alcoholList) => {
  const medianValues = {};
  for (const alcohol in alcoholList) {
    const values = alcoholList[alcohol];
    const sortedValues = values.sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    const median =
      sortedValues.length % 2 !== 0
        ? sortedValues[mid]
        : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    medianValues[alcohol] = median;
  }
  return medianValues;
};

export const getMode = (alcoholList) => {
  const modeValues = {};
  for (const alcohol in alcoholList) {
    const values = alcoholList[alcohol];
    const modeMap = {};
    let maxCount = 0;
    let mode;
    values.forEach((val) => {
      modeMap[val] = (modeMap[val] || 0) + 1;
      if (modeMap[val] > maxCount) {
        maxCount = modeMap[val];
        mode = val;
      }
    });
    modeValues[alcohol] = mode;
  }
  return modeValues;
};
