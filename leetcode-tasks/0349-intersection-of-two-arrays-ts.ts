// Accepted
// Runtime 48 ms Beats 94.26% of users with TypeScript
// Memory 51.67 MB Beats 55.50% of users with TypeScript

const intersection2 = (nums1: number[], nums2: number[]): number[] => {
  let nums2Set = new Set(nums2);
  let result: Set<number> = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (nums2Set.has(nums1[i])) result.add(nums1[i]);
  }

  return Array.from(result)
}