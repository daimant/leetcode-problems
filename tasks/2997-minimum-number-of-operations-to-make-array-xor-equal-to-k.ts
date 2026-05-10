// Accepted 684 / 684 testcases passed Sergey Pomortsev submitted at Feb 15, 2026 13:21
// Solution Runtime 53 ms Beats 80.00% Analyze Complexity Memory 67.13 MB Beats 100.00%

function minOperations(nums: number[], k: number): number {
  let xorK = k.toString(2)
  let xorNums = nums.reduce((acc, curr) => acc ^ curr, 0).toString(2)
  let result = 0

  if (xorK.length > xorNums.length) xorNums = xorNums.padStart(xorK.length, '0')
  else xorK = xorK.padStart(xorNums.length, '0')

  for (let i = 0; i < xorK.length; i++) {
    if (xorK[i] !== xorNums[i]) result++
  }

  return result
};