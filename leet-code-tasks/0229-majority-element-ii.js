"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// на одну строчку короче с сетом и без доп перебора, по времени так же
var majorityElement = function(nums) {
  let map = new Map();
  let set = new Set();

  nums.forEach(val => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else map.set(val, 1);
    if (map.get(val) > nums.length / 3) set.add(val);
  });

  return Array.from(set.keys());
};

// одинаковые по времени варианты 72мс, но нижний жрет на 1мб больше
///**
// * @param {number[]} nums
// * @return {number[]}
// */
//var majorityElement = function(nums) {
//  let map = new Map();
//  // let maxCount = 0;
//  let result = [];
//
//  nums.forEach(val => {
//    if (map.has(val)) {
//      map.set(val, map.get(val) + 1);
//    } else map.set(val, 1);
//    // ищет массив самых больших вхождений
//    // if (map.get(val) > maxCount) maxCount = map.get(val);
//  });
//
//  for (let entry of map) {
//    if (entry[1] > nums.length / 3) result.push(entry[0]);
//  }
//  return result;
//};

///**
// * @param {number[]} nums
// * @return {number[]}
// */
//var majorityElement = function(nums) {
//  nums.sort();
//  let maxCount = 0;
//  let result = [];
//  let count = 1;
//
//  for (let i = 0; i < nums.length; i++) {
//    if (nums[i] === nums[i + 1]) count++;
//
//    if (count > nums.length / 3) {
//      // maxCount = count;
//      result.push(nums[i]);
//    }
//
//    if (nums[i] !== nums[i + 1]) count = 1;
//  }
//  return Array.from(new Set(result));
//};
