/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function(arr, a, b, c) {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) continue;

      for (let k = j + 1; k < len; k++) {
        if (i === k || j === k) continue;

        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          count++;
      }
    }
  }

  return count;
};
