"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let arr = [
    { id: "I", value: 1 },
    { id: "V", value: 5 },
    { id: "X", value: 10 },
    { id: "L", value: 50 },
    { id: "C", value: 100 },
    { id: "D", value: 500 },
    { id: "M", value: 1000 }
  ];
  let val = 0;

  for (let i = 0; i < s.length; i++) {
    let findToId = arr.find(item => item.id === s[i]).value;
    if (
      (s[i] === "I" && s[i + 1] === "V") ||
      (s[i] === "I" && s[i + 1] === "X")
    ) {
      val -= findToId;
      continue;
    }
    if (
      (s[i] === "X" && s[i + 1] === "L") ||
      (s[i] === "X" && s[i + 1] === "C")
    ) {
      val -= findToId;
      continue;
    }
    if (
      (s[i] === "C" && s[i + 1] === "D") ||
      (s[i] === "C" && s[i + 1] === "M")
    ) {
      val -= findToId;
      continue;
    }
    val += arr.find(item => item.id === s[i]).value;
  }
  return val;
};
