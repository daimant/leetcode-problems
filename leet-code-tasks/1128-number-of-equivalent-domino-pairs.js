"use strict";

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dom) {
  let count = 0;

  for (let i = 0; i < dom.length; i++) {
    for (let j = i + 1; j < dom.length; j++) {
      if (
        (dom[i][0] === dom[j][0] && dom[i][1] === dom[j][1]) ||
        (dom[i][0] === dom[j][1] && dom[i][1] === dom[j][0])
      )
        count++;
    }
  }

  return count;
};
