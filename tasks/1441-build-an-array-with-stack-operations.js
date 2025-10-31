/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function(target, n) {
  const result = [];

  for (let i = 1, last = target[target.length - 1], j = 0; i <= last; i++) {
    if (i < target[j]) result.push("Push", "Pop");
    else {
      result.push("Push");
      j++;
    }
  }

  return result;
};
