"use strict";

/**
 * @param {string[]} w
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(w, k) {
  let m = new Map();

  for (let i = 0; i < w.length; i++)
    m.has(w[i]) ? m.set(w[i], m.get(w[i]) + 1) : m.set(w[i], 1);

  return [...m]
    .sort((a, b) => (a[1] === b[1] && a[0] > b[0] ? 1 : a[1] < b[1] ? 1 : -1))
    .slice(0, k)
    .map(e => e[0]);
};
