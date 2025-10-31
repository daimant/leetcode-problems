// Accepted
// Runtime 70 ms Beats 88.08% of users with JavaScript
// Memory 56.88 MB Beats 65.90% of users with JavaScript

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  for (let i = 0, len = s.length; i < len / 2; i++)
    [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
};
