/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
  let result = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j + i <= arr.length; j++) {
      for (let k = j; k < i + j; k++) {
        result += arr[k];
      }
    }
  }

  return result;
};
