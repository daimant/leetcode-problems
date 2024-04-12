// Accepted
// Runtime 51 ms Beats 98.36% of users with TypeScript
// Memory 52.10 MB Beats 49.18% of users with TypeScript

const longestMonotonicSubarray = (nums: number[]): number => {
  let maxSubLen = 1
  let sub = { length: 0, type: '' }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (sub.type === 'dec') sub.length++
      else setSub(sub, 2, 'dec')
    } else if (nums[i] < nums[i + 1]) {
      if (sub.type === 'inc') sub.length++
      else setSub(sub, 2, 'inc')
    } else setSub(sub, 1)

    if (maxSubLen < sub.length) maxSubLen = sub.length
  }

  return maxSubLen
}


const setSub = (sub: { length: number, type: string }, newLen: number = 0, newType: string = '') => {
  sub.length = newLen
  sub.type = newType
}