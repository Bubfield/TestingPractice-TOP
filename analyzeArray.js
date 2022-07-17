const analyzeArray = (arr) => {
  arr.sort((a, b) => a - b);
  let average = arr.reduce((a, b) => a + b) / arr.length;
  const object = {
    average: average,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };
  return object;
};

export default analyzeArray;
