/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function(s) {
  let max = 0;
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth++;
      if (depth > max) max = depth;
    } else if (s[i] === ")") depth--;
  }

  return max;
};
