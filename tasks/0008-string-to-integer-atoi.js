"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const curr = s[i].charCodeAt();

    if (curr === 32 && !str.length) continue;
    if (
      (curr !== 32 && curr !== 45 && curr !== 43 && curr < 48) ||
      curr > 57 ||
      (curr === 32 && str.length) ||
      (curr === 43 && str.length) ||
      (curr === 45 && str.length)
    )
      break;
    if (curr === 45 || curr === 43 || (curr >= 48 && curr <= 57)) str += s[i];
  }

  return str < -2147483648
    ? -2147483648
    : str > 2147483647
    ? 2147483647
    : +str
    ? +str
    : 0;
};
