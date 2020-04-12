"use strict";

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0];

  let a = stones[0] >= stones[1] ? 0 : 1;
  let b = stones[0] >= stones[1] ? 1 : 0;

  while (stones.length > 1) {
    for (let i = 2; i < stones.length; i++) {
      if (stones[i] > stones[a]) {
        b = a;
        a = i;
      } else if (stones[i] > stones[b] && stones[i] <= stones[a]) b = i;
    }

    if (stones[a] === stones[b]) {
      if (a > b) {
        stones.splice(a, 1);
        stones.splice(b, 1);
      } else {
        stones.splice(b, 1);
        stones.splice(a, 1);
      }
      a = stones[0] >= stones[1] ? 0 : 1;
      b = stones[0] >= stones[1] ? 1 : 0;
    } else {
      stones[a] = stones[a] - stones[b];
      stones.splice(b, 1);
      a = stones[0] >= stones[1] ? 0 : 1;
      b = stones[0] >= stones[1] ? 1 : 0;
    }
  }

  return stones[0] ? stones[0] : 0;
};
