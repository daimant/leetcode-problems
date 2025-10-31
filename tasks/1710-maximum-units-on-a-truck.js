/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
  let result = 0;
  boxTypes.sort((a, b) => a[1] - b[1]);

  while (truckSize && boxTypes.length) {
    const currBoxes = boxTypes.pop();

    for (let i = 0; truckSize && i < currBoxes[0]; i++) {
      result += currBoxes[1];
      truckSize--;
    }
  }

  return result;
};
