// Accepted
// Runtime 52 ms Beats 75.37% of users with JavaScript
// Memory 34.12 MB Beats 100.00% of users with JavaScript

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
