"use strict";

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

//et result = [];
//let buff = 0;
//let curr = 0;
//let maxLength = Math.max(a.length, b.length);
//
//a.split("").reverse();
//b.split("").reverse();
//
//for (let i =l 0; i < maxLength; i++) {
//  if (a[i] === "1" && b[i] === "1") buff++;
//  if ((a[i] === "0" && b[i] === "1") || (a[i] === "1" && b[i] === "0"))
//    curr++;
//
//  if (curr === 0 && buff > 0) {
//    buff--;
//    curr++;
//  }
//  if (curr === 1 && buff > 0) {
//    curr--;
//  }
//
//  if (i === maxLength - 1 && buff !== 0 && curr === 0) {
//    if (buff === 1) {
//      result.push(1);
//      break;
//    }
//    if (buff === 2) {
//      result.push(0);
//      buff--;
//      i--;
//      continue;
//    }
//  }
//
//  result.push(curr);
//  curr = 0;
//}
//return result.reverse().join("");
