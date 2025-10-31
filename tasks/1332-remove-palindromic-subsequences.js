"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  return s === ""
    ? 0
    : s ===
      s
        .split("")
        .reverse()
        .join("")
    ? 1
    : 2;
};

// поиск количества палиндромных подстрок
//   let countPal = 0;
//   let count = s.length;
//   console.log(count)

//   while (s !== '') {
//     temp = s.slice(0, count)
//     if (temp === temp.split('').reverse().join('')) {
//       countPal++;
//       s = s.slice(count);
//       count = s.length;
//     } else count--;
//   }

//   return countPal;
