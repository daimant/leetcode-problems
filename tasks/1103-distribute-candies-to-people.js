"use strict";

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let countCycle = 0;

  for (let i = 0; candies > 0; i++) {
    if (i === arr.length) {
      i = 0;
      countCycle += arr.length;
    }

    if (candies < i + 1 + countCycle) {
      arr[i] += candies;
      break;
    }

    arr[i] += i + 1 + countCycle;
    candies -= i + 1 + countCycle;
  }

  return arr;
};
