/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
  let left = s[0] === "0" ? 1 : 0;
  let right = [...s.slice(1)].reduce((acc, curr) => (+curr ? acc + 1 : acc), 0);
  let max = left + right;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "0") left++;
    else right--;

    if (left + right > max) max = left + right;
  }

  return max;
};
