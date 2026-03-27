// Accepted 202 / 202 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 18:55
// Solution Runtime 6 ms Beats 94.06% Analyze Complexity Memory 63.45 MB Beats 30.20%

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const uniq1 = new Set(nums1)
  const uniq2 = new Set(nums2)
  const arr1 = new Set<number>()
  const arr2 = new Set<number>()

  for (let i = 0; i < nums1.length; i++) {
    if (!uniq2.has(nums1[i])) arr1.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!uniq1.has(nums2[i])) arr2.add(nums2[i])
  }

  return [Array.from(arr1), Array.from(arr2)]
};