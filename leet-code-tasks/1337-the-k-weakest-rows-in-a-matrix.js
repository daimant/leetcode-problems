/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  for (let i = 0; i < mat.length; i++) {
    if (mat[i].includes(0)) {
      mat[i] = [i, mat[i].indexOf(0)];
    } else mat[i] = [i, mat[i].length];
  }

  return mat
    .sort((a, b) => (a[1] > b[1] ? 1 : a[1] === b[1] && a[0] > b[0] ? 1 : -1))
    .filter((item, index) => index < k)
    .map(item => item[0]);
};

// return mat.map((item, i, arr) => {return arr[i].includes(0) ? [i, arr[i].indexOf(0)] : [i, arr[i].length]})
//           .sort((a,b) => a[1] > b[1] ? 1 : a[1] === b[1] && a[0] > b[0] ? 1 : -1)
//           .filter((item, index) => index < k)
//           .map(item => item[0]);
