/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 1,
    curr = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) curr++;
    else curr = 1;
    max = Math.max(curr, max);
  }
  return max;
};
