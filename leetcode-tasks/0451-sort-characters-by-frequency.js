/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const letters = {};
  let table = new Map(),
    result = "";

  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) letters[s[i]]++;
    else letters[s[i]] = 1;
  }

  for (let key in letters) {
    const count = letters[key];
    if (table.has(count)) table.set(count, [...table.get(count), key]);
    else table.set(count, [key]);
  }

  table = [...table]
    .sort((a, b) => b[0] - a[0])
    .map(el => [el[0], el[1].sort()]);

  for (let i = 0; i < table.length; i++) {
    const [count, arr] = table[i];
    while (arr.length) {
      const currLetter = arr.shift();
      for (let j = 0; j < count; j++) {
        result += currLetter;
      }
    }
  }

  return result;
};
