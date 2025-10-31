"use strict";

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map = new Map();

  for (let i = 0; i < list1.length || i < list2.length; i++) {
    let anotherIndex = list2.indexOf(list1[i]);

    if (anotherIndex !== -1 && map.has(i + anotherIndex))
      map.set(i + anotherIndex, [...map.get(i + anotherIndex), list1[i]]);
    if (anotherIndex !== -1 && !map.has(i + anotherIndex))
      map.set(i + anotherIndex, [list1[i]]);
  }

  return map.get(Math.min(...Array.from(map.keys())))
    ? map.get(Math.min(...Array.from(map.keys())))
    : [];
};
