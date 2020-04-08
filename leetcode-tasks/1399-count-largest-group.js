'use strict';

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let table = new Map();
  let maxCount = 0;
  
  for (let i = 1; i <= n; i++) {
    const currentSum = +[...(i + '')].reduce((prev,curr) => (+curr) + (+prev));
    
    if (table.has(currentSum)) table.set(currentSum, table.get(currentSum) + 1);
    if (!table.has(currentSum)) table.set(currentSum, 1);
    
    if (maxCount < table.get(currentSum)) maxCount = table.get(currentSum);
  }
  
  return [...table].filter(el => el[1] === maxCount).length;
};