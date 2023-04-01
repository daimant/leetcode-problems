// Runtime 109 ms Beats 24.6% Memory 49.5 MB Beats 23.11%

const leftRigthDifference = (nums: number[]): number[] => {
  const leftArr = nums.reduce((acc, curr) => [...acc, curr + acc[acc.length - 1]] , [0])
  const rightArr = nums.reverse().reduce((acc, curr) => [...acc, curr + acc[acc.length - 1]] , [0])
  leftArr.pop()
  rightArr.pop()
  return leftArr.map((el, i) => Math.abs(el - rightArr[rightArr.length - i - 1]))
}
