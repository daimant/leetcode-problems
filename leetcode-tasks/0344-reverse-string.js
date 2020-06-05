/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  for (let i = 0, len = s.length; i < len / 2; i++)
    [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
};
