"use strict";

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let val = "1";
  let newVal = "";

  if (n === 1) return val;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < val.length; j++) {
      if (val[j] === val[j + 1] && val[j + 1] === val[j + 2]) {
        newVal += "3" + val[j];
        j += 2;
        continue;
      }

      if (val[j] === val[j + 1]) {
        newVal += "2" + val[j];
        j++;
        continue;
      }

      if (val[j] !== val[j + 1]) newVal += "1" + val[j];
    }
    val = newVal;
    newVal = "";
  }

  return val;
};
