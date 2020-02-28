"use strict";

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  return (new Date(date) - new Date(date.slice(0, 4)) + 86400000) / 86400000;
};

console.log(dayOfYear("2020-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("2003-03-01"));
console.log(dayOfYear("2004-03-01"));
console.log(dayOfYear("1900-03-01"));
console.log(dayOfYear("2019-12-31"));
