export const groupData = (data, type) => {
  const groupedData = {};
  data.forEach((entry) => {
    const alcohol = entry.Alcohol;
    if (!groupedData[alcohol]) {
      groupedData[alcohol] = [];
    } else {
      if (type === "flavanoids") {
        groupedData[alcohol].push(parseFloat(entry?.Flavanoids));
      } else if (type === "gamma") {
        groupedData[alcohol].push({
          Flavanoids: parseFloat(entry?.Flavanoids),
          Hue: parseFloat(entry?.Hue),
          Ash: parseFloat(entry?.Ash),
          Magnesium: parseFloat(entry?.Magnesium),
        });
      }
    }
  });
  return groupedData;
};

export const getMean = (alcoholList) => {
  console.log(alcoholList, "ALCOHOL");
  const meanValues = {};
  for (const alcohol in alcoholList) {
    const values = alcoholList[alcohol];
    const sum = values.reduce((acc, val) => acc + val, 0);
    const mean = sum / values.length;
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

export const getGamma = (alcoholList) => {
  const gammas = {};
  for (const category in alcoholList) {
    gammas[category] = [];
    alcoholList[category].forEach((entry) => {
      const gamma = (entry?.Ash * entry?.Hue) / entry?.Magnesium;
      gammas[category].push(gamma);
    });
  }
  console.log(gammas, "GAMMAS");
  return gammas;
};
