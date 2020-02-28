"use strict";

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  if (num.toString().indexOf("6") === -1) return num;
  num = num.toString().split("");
  num[num.indexOf("6")] = "9";
  return num.join("");
};

//можно было так:
//return +String(num).replace(6, 9);
