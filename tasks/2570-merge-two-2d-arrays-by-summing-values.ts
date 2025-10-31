// Runtime 75 ms Beats 92.96% Memory 47.4 MB Beats 46.48%

const mergeArrays = (nums1: number[][], nums2: number[][]): number[][] => {
  const map = new Map(nums1 as [number, number][])

  nums2.forEach(el => {
    map.set(el[0], (map.get(el[0]) || 0) + el[1])
  })

  return [...map].sort((a, b) => a[0] > b[0] ? 1 : -1)
}
