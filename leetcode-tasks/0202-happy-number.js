"use strict";

/**
 * @param {number} n
 * @return {boolean}
 */
// новое решение
var isHappy = function(n) {
  n = [...(n + '')];
  
  for (let i = 0; i < 1000; i++) {
    let count = 0;
    
    for(let j = 0; j < n.length; j++) {
      count += n[j] ** 2;
    }
    
    if (count === 1) return true;
    n = [...(count + '')];
  }
  return false;
};
// предыдущее решение
// var isHappy = function(n) {
//   let count = 0;
//   let currentValue;
//
//   while (1) {
//     currentValue = 0;
//     n.toString()
//       .split("")
//       .forEach(item => (currentValue += item ** 2));
//     n = currentValue;
//     count++;
//     if (n === 1) return true;
//     if (count > 1000) return false;
//   }
// };
