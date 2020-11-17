/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
  let edit = true;

  outer: while (edit) {
    for (let i = 0; i < s.length - 1; i++) {
      if (
        (s[i] === s[i].toLowerCase() && s[i].toUpperCase() === s[i + 1]) ||
        (s[i] === s[i].toUpperCase() && s[i].toLowerCase() === s[i + 1])
      ) {
        s = s.slice(0, i) + s.slice(i + 2);
        continue outer;
      }
    }
    edit = false;
  }

  return s;
};
