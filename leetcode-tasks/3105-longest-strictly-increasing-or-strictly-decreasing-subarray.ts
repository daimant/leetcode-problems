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

// optimized
// Accepted
// Runtime 44 ms Beats 100.00% of users with TypeScript
// Memory 51.74 MB Beats 95.08% of users with TypeScript

const longestMonotonicSubarray2 = (nums: number[]): number => {
  let maxSubLen = 1
  let subLen = 0
  let subType = ''

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (subType === 'dec') subLen++
      else {
        subLen = 2
        subType = 'dec'
      }
    } else if (nums[i] < nums[i + 1]) {
      if (subType === 'inc') subLen++
      else {
        subLen = 2
        subType = 'inc'
      }
    } else {
      subLen = 1
      subType = ''
    }

    if (maxSubLen < subLen) maxSubLen = subLen
  }

  return maxSubLen
}