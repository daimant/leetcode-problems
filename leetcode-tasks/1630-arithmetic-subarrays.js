/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = (nums, l, r) => {
  const result = [];

  for (let i = 0; i < l.length; i++) {
    const currArr = nums.slice(l[i], r[i] + 1).sort((a,b) => a - b);
    let arithmetic = true;

    for (let j = 1; j < currArr.length - 1; j++) {
      if (currArr[j] - currArr[j + 1] !== currArr[0] - currArr[1])
        arithmetic = false;
    }

    result.push(arithmetic);
  }

  return result;
};