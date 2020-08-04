/**
 * @param {string} s
 * @return {number}
 */
const numSplits = function(s) {
  const left = { len: 0 };
  const right = { len: 0 };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!right[s[i]]) {
      right[s[i]] = 1;
      right["len"]++;
    } else right[s[i]]++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (!left[s[i]]) {
      left[s[i]] = 1;
      left["len"]++;
    } else left[s[i]]++;

    right[s[i]]--;

    if (right[s[i]] === 0) right["len"]--;
    if (left["len"] === right["len"]) count++;
  }

  return count;
};
