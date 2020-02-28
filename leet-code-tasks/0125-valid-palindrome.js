"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  let arr = s
    .toLowerCase()
    .split(" ")
    .join("")
    .split(",")
    .join("")
    .split("");

  for (let key = 0; key < arr.length; key++) {
    if (letters.includes(arr[key]) !== true) {
      arr.splice(key, 1);
      key--;
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
};

// 2 lines competition
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
  let arr = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  return (
    arr ===
    arr
      .split("")
      .reverse()
      .join("")
  );
};
