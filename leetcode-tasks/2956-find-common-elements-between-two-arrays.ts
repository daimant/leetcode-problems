// wrong solution

const findIntersectionValues = (nums1: number[], nums2: number[]): number[] => {
  const set = new Map(nums1.map((el, i) => [el, i]))

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) return [set.get(nums2[i]), i]
  }

  return [0, 0]
}