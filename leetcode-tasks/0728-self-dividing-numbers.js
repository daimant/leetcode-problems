"use strict";

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    let str = i + "";
    if (str.indexOf("0") !== -1) continue;
    console.log(str);

    for (let j = 0; j < str.length; j++) {
      if (str % str[j] !== 0) break;
      if (str % str[j] === 0 && j === str.length - 1) arr.push(i);
    }
  }
  return arr;
};
