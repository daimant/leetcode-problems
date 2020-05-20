/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  cut();
  cut("(", "*");
  cut("*", ")");
  return !s.replace(/\*/g, "").length;

  function cut(first = "(", second = ")") {
    outer: for (let j = 0; j < s.length; j++) {
      if (s[j] !== first) continue;
      let count = -1;
      for (let k = j + 1; k < s.length; k++) {
        if (s[k] === second) count++;
        else if (s[k] === first) count--;

        if (s[k] === second && count === 0) {
          s = s.slice(0, j) + s.slice(j + 1, k) + s.slice(k + 1);
          j--;
          continue outer;
        }
      }
    }
  }
};
