// Runtime 60 ms Beats 80.83% Memory 45 MB Beats 30%

const arraySign = (nums: number[], product = nums.reduce((acc, curr) => acc * curr)): number => product > 0 ? 1 : product < 0 ? -1 : 0
