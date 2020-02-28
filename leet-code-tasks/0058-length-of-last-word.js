"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.split(" ");

  for (let key = 0; key < s.length; key++) {
    if (s[key] === "" || s[key] === " ") {
      s.splice(key, 1);
      key--;
    }
  }

  return s.length < 1 ? 0 : s[s.length - 1].length;
};

// let letters =[
//     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
//     "s", "t", "u", "v", "w", "x", "y", "z", " ", "Q", "W", "E", "R", "T", "Y", "U", "I", "O",
//     "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"
// ];
//
// let result = true;
// let arr = s.split("");
//
// arr.find((item) => {
// if (letters.indexOf(item) === -1) return result = false;
// });
//
// let lastWord = arr.slice(arr.lastIndexOf(" ") + 1);
//
// return result ? lastWord.length : -1;
