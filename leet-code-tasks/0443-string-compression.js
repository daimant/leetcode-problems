"use strict";

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let curr = "";
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1] && count === 1) continue;

    if (curr === "") curr = chars[i];

    if (curr === chars[i + 1]) {
      count++;
      chars.splice(i + 1, 1);
      i--;
      continue;
    }

    if (curr !== chars[i + 1] && count > 1) {
      let countArr = count.toString().split("");
      chars.splice(i + 1, 0, ...countArr);
      i += countArr.length;
      count = 1;
      curr = "";
    }
  }

  return chars.length;
};
