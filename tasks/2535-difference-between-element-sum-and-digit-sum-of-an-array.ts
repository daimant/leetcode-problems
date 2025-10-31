// Runtime 71 ms Beats 90.48% Memory 47.6 MB Beats 21.43%

const differenceOfSum = (nums: number[]): number =>
  nums.reduce((acc, curr) => acc + curr, 0) -
  nums.reduce((acc, curr) => acc + curr, '').split('').reduce((acc, curr) => acc + Number(curr), 0)
