"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
// ооооочень долгий метод с вложенным циклом 876мс
var singleNumber = function(nums) {
  let isSingle;
  let singleNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    isSingle = true;

    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) isSingle = false;
    }

    if (isSingle === true) singleNum = nums[i];
  }
  return singleNum;
};

// еще один медленный вариант с сортировкой 240ms
//   nums.sort((a,b) => a > b ? 1 : -1);
//   for (let i = 0; i < nums.length; i += 2) {
//     if (nums.lastIndexOf(nums[i]) === i) {
//       return nums[i];
//     }
//   }

// быстрый скрипт 76ms
//   nums.sort((a,b) => a > b ? 1 : -1);
//   for (let i = 0; i < nums.length; i += 2) {
//     if (nums[i] !== nums[i + 1]) return nums[i];
//   }

// долгий скрипт 248ms
// for (let i = 0; i < nums.length; i++) {
//     if (nums.lastIndexOf(nums[i]) === i) {
//       return nums[i];
//     } else nums.splice(nums.lastIndexOf(nums[i]),1);
//   }
