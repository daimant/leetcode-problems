"use strict";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let nums2Set = new Set(nums2);
  let result = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (nums2Set.has(nums1[i])) result.add(nums1[i]);
  }

  return Array.from(result.values());
};
