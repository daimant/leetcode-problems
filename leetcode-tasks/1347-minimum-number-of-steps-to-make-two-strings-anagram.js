/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) {
  const table = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!table.has(s[i])) table.set(s[i], 1);
    else table.set(s[i], table.get(s[i]) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const currVal = table.get(t[i]);
    if (!currVal) count++;
    else table.set(t[i], currVal - 1);
  }

  return count;
};
