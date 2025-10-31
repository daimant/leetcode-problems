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

// Accepted
// Runtime 82 ms Beats 94.74% of users with TypeScript
// Memory 57.10 MB Beats 28.57% of users with TypeScript

const findIntersectionValues3 = (nums1: number[], nums2: number[]): number[] => {
  const result = [0, 0]
  const setNums1 = new Set(nums1)
  const setNums2 = new Set(nums2)

  nums1.forEach((el) => {
    if (setNums2.has(el)) result[0]++
  })
  nums2.forEach((el) => {
    if (setNums1.has(el)) result[1]++
  })


  return result
}