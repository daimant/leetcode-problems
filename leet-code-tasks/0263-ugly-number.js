"use strict";

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false;
  while (num % 2 === 0) num /= 2;
  while (num % 3 === 0) num /= 3;
  while (num % 5 === 0) num /= 5;
  if (num === 1) return true;
  return false;
};

//более жирный вариант
///**
// * @param {number} num
// * @return {boolean}
// */
//var isUgly = function(num) {
//  while (1) {
//    if (num === 1) return true;
//    if (num % 2 !== 0 &&
//      num % 3 !== 0 &&
//      num % 5 !== 0 ||
//      num === 0) return false;
//    if (num % 2 === 0) num /= 2;
//    if (num % 3 === 0) num /= 3;
//    if (num % 5 === 0) num /= 5;
//  }
//};
