// Runtime 100 ms Beats 100% Memory 59.1 MB Beats 100%

const getCommon = (nums1: number[], nums2: number[]): number => {
  const set = new Set(nums1)

  for(let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) return nums2[i]
  }

  return -1
}
