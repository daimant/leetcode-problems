"use strict";

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  let resultArr = [];

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];

    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(currWord)) {
        resultArr.push(currWord);
        break;
      }
    }
  }

  return resultArr;
};
