/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === ")" && left > 0) {
      left--;
      continue;
    }

    if (S[i] === "(") left++;
    else right++;
  }

  return left + right;
};
