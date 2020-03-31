"use strict";

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let letters = [];
  let digits = [];

  for (let i = 0; i < logs.length; i++) {
    if (isFinite(logs[i].split(" ")[1])) {
      digits.push(logs[i]);
    } else letters.push(logs[i]);
  }

  letters.sort((a, b) => {
    let aCut = a.slice(a.indexOf(" ") + 1);
    let bCut = b.slice(b.indexOf(" ") + 1);
    if (aCut === bCut) {
      return a > b ? 1 : -1;
    } else return aCut > bCut ? 1 : -1;
  });

  return [...letters, ...digits];
};
