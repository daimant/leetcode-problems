/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let clone = arr.slice();
  let sort = Array.from(new Set(clone.sort((a, b) => (a > b ? 1 : -1))));
  let map = new Map();

  for (let i = 0; i < sort.length; i++) map.set(sort[i], i + 1);
  for (let i = 0; i < arr.length; i++) arr[i] = map.get(arr[i]);
  return arr;
};
