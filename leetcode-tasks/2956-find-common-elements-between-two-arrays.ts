// wrong solution

const findIntersectionValues = (nums1: number[], nums2: number[]): number[] => {
  const set = new Map(nums1.map((el, i) => [el, i]))

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) return [set.get(nums2[i]), i]
  }

  return [0, 0]
}

// second wrong solution

const findIntersectionValues2 = (nums1: number[], nums2: number[]): number[] => {
  const map = new Map()

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], map.has(nums1[i]) ? -1 : i)
  }

  for (let i = 0; i < nums2.length; i++) {
    const get = map.get(nums2[i])
    if (get && get >= 0) return [map.get(nums2[i]), i]
  }

  return [0, 0]
}