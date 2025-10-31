// Runtime 100 ms Beats 100% Memory 59.1 MB Beats 100%

const getCommon = (nums1: number[], nums2: number[]): number => {
  const set = new Set(nums1)

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) return nums2[i]
  }

  return -1
}

// added optimized solution
// Accepted
// Runtime 49 ms Beats 98.33% of users with TypeScript
// Memory 59.44 MB Beats 53.33% of users with TypeScript

const getCommon2 = (nums1: number[], nums2: number[]): number => {
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
    if (nums1[i] < nums2[j]) i++
    else if (nums1[i] > nums2[j]) j++
    else return nums1[i]
  }

  return -1
}