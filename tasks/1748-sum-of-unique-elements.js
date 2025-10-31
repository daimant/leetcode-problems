/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  const map = new Map();

  for (let i of nums) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  return [...map].reduce(
    (acc, curr) => (curr[1] === 1 ? acc + curr[0] : acc),
    0
  );
};
