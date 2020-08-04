/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = function(arr, k) {
  let curr = arr[0];
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (curr < arr[i]) {
      curr = arr[i];
      count = 0;
    }

    count++;

    if (count === k) break;
  }

  return curr;
};
