// Accepted
// Runtime 63 ms Beats 100.00% of users with TypeScript
// Memory 52.76 MB Beats 100.00% of users with TypeScript

const resultArray = (nums: number[]): number[] => {
  nums.reverse()
  const arr1 = [nums.pop()]
  const arr2 = [nums.pop()]

  while (nums.length) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) arr1.push(nums.pop())
    else arr2.push(nums.pop())
  }

  return [...arr1, ...arr2]
}