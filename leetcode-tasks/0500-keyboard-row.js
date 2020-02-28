"use strict";

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (
      words[i].replace(/[qwertyuiop]/gi, "").length === 0 ||
      words[i].replace(/[asdfghjkl]/gi, "").length === 0 ||
      words[i].replace(/[zxcvbnm]/gi, "").length === 0
    )
      arr.push(words[i]);
  }

  return arr;
};
