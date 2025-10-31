"use strict";

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    if (prices[i] - min > max) max = prices[i] - min;
  }

  return max;
};

// очень долгий метод с сортировкой
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//   let maxVal = 0;
//   let sortPrice;
//
//   for(let i = 0; i < prices.length; i++) {
//     sortPrice = [];
//     sortPrice = prices.slice(i+1);
//       if (Math.max.apply(null, sortPrice) - prices[i] > maxVal) {
//     maxVal = Math.max.apply(null, sortPrice) - prices[i];
//       }
//   }
//   return maxVal;
// };

// долгий метод с вложенным массивом
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//   let maxVal = 0;
//
//   for(let i = 0; i < prices.length; i++) {
//
//     for(let j = i; j < prices.length; j++) {
//       if (prices[j] - prices[i] > maxVal) {
//         maxVal = prices[j] - prices[i];
//       }
//     }
//   }
//   return maxVal;
// };
