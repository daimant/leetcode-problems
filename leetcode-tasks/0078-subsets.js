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
