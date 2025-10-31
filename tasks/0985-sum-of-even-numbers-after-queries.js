'use strict';

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let evenSum = A.reduce((prev, curr) => curr % 2 === 0 ? prev + curr : prev, 0);
  let summArr = [];
  
  for (let i = 0; i < queries.length; i++) {
    let currEl = A[queries[i][1]];
    let currElUpd = currEl + queries[i][0];
    
    if (currEl % 2 !== 0 && currElUpd % 2 === 0) evenSum += currElUpd;
    if (currEl % 2 === 0 && currElUpd % 2 === 0) evenSum += queries[i][0];
    if (currEl % 2 === 0 && currElUpd % 2 !== 0) evenSum -= currEl;
    
    summArr.push(evenSum);
    A[queries[i][1]] = currElUpd;
  }
  
  return summArr;
};