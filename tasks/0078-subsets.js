// Accepted
// Solution Runtime 58 ms Beats 75.06% of users with JavaScript
// Memory 52.22 MB Beats 64.24% of users with JavaScript

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const comb = [[]];

  for (let num of nums) {
    const currComb = [];
    for (let i = 0; i < comb.length; i++) {
      currComb.push([...comb[i], num]);
    }

    comb.push(...currComb);
  }

  return comb;
};
