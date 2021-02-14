// simple solution
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2) return true;
  }

  return false;
};

// DP solution
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds2 = arr => {
  if (arr.length < 3) return false;

  let a;
  let b = arr[0] % 2;
  let c = arr[1] % 2;

  for (let i = 2; i < arr.length; i++) {
    a = b;
    b = c;
    c = arr[i] % 2;

    if (a && b && c) return true;
  }

  return false;
};
