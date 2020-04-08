'use strict';

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let table = new Map();
  
  for (let i = 0; i < strs.length; i++) {
    const currKey = [...strs[i]].sort().join('');
    
    if (table.has(currKey)) table.set(currKey, [...table.get(currKey), strs[i]]);
    if (!table.has(currKey)) table.set(currKey, [strs[i]]);
  }
  
  return [...table.values()];
};