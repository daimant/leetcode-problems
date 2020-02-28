"use strict";

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

var daysBetweenDates = function(date1, date2) {
  return (
    Math.abs(
      new Date(...date1.split("-").map((e, i) => (i === 1 ? e - 1 : e))) -
        new Date(...date2.split("-").map((e, i) => (i === 1 ? e - 1 : e)))
    ) / 86400000
  );
};

//
// var daysBetweenDates = function(date1, date2) {
//   date1 = new Date(...date1.split('-').map((e,i) => i === 1 ? e - 1 : e)) / 86400000;
//   date2 = new Date(...date2.split('-').map((e,i) => i === 1 ? e - 1 : e)) / 86400000;
//
//   return date1 > date2 ? date1 - date2 : date2 - date1;
// };
