/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      for (let j = 97; j < 123; j++) {
        if (
          (s[i - 1] &&
            s[i - 1].charCodeAt() !== j &&
            s[i + 1] &&
            s[i + 1].charCodeAt() !== j) ||
          (!s[i - 1] && s[i + 1] && s[i + 1].charCodeAt() !== j) ||
          (!s[i + 1] && s[i - 1] && s[i - 1].charCodeAt() !== j) ||
          (!s[i + 1] && !s[i - 1])
        ) {
          s = s.slice(0, i) + String.fromCharCode(j) + s.slice(i + 1);
          break;
        }
      }
    }
  }

  return s;
};
