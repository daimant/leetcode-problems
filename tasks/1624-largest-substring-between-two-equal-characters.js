/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = s => {
  const table = new Map();
  let max = -1;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const get = table.get(curr);
    if (!get) table.set(curr, [i, -1]);
    else if (get[1] < i) {
      table.set(curr, [get[0], i]);
      if (i - get[0] - 1 > max) max = i - get[0] - 1;
    }
  }

  return max;
};
