"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowelsLetters = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U"
  ]);
  let arr = [];

  s = s.split("");
  s.forEach((item, index) => {
    if (vowelsLetters.has(item)) arr.push([index, item]);
  });

  for (let i = 0; i < arr.length / 2; i++) {
    s[arr[i][0]] = arr[arr.length - 1 - i][1];
    s[arr[arr.length - 1 - i][0]] = arr[i][1];
  }

  return s.join("");
};
