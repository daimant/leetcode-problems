"use strict";

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = (m, n, ops) =>
  (Math.min(...ops.map(e => e[0])) <= m ? Math.min(...ops.map(e => e[0])) : m) *
  (Math.min(...ops.map(e => e[1])) <= n ? Math.min(...ops.map(e => e[1])) : n);
