// Runtime 58 ms Beats 85.37% Memory 44.6 MB Beats 58.54%

const minNumber = (nums1: number[], nums2: number[]): number => {
  const set = new Set(nums1)

  nums2.sort((a, b) => a - b)

  for (const num of nums2) {
    if (set.has(num)) return num
  }

  return Number([nums1.sort((a, b) => a - b)[0], nums2[0]].sort().join(''))
}
