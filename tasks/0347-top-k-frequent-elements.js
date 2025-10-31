"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else map.set(nums[i], 1);
  }

  return Array.from(map)
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .filter((e, i) => i < k)
    .map(e => e[0]);
};

//или укороченный метод:
//  /**
//   * @param {number[]} nums
//   * @param {number} k
//   * @return {number[]}
//   */
//  var topKFrequent = function(n, k) {
//    let m = new Map();
//
//    for(let i = 0; i < n.length; i++) m.has(n[i]) ? m.set(n[i], m.get(n[i]) + 1) : m.set(n[i], 1)
//
//    return [...m].sort((a,b) => a[1] < b[1] ? 1 : -1).slice(0, k).map(e => e[0]);
//  };
