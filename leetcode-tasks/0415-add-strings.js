"use strict";

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = "",
    buff = 0;
  const n1 = [...num1].reverse().join(""),
    n2 = [...num2].reverse().join("");

  for (
    let i = 0, len1 = n1.length, len2 = n2.length;
    i < len1 || i < len2;
    i++
  ) {
    let curr = +(n1[i] ? n1[i] : "") + +(n2[i] ? n2[i] : "");

    if (buff !== 0) {
      curr++;
      buff--;
    }
    if (curr > 9) {
      buff++;
      curr -= 10;
    }
    result = curr + result;
  }
  if (buff !== 0) result = buff + result;

  return result;
};
