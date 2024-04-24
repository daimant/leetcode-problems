// Accepted
// Runtime 55 ms Beats 89.92% of users with TypeScript
// Memory 51.79 MB Beats 88.24% of users with TypeScript

const differenceOfSums = (n: number, m: number): number => {
  let nums1 = 0
  let nums2 = 0

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) nums1 += i
  }
  for (let i = m; i <= n; i += m) {
    nums2 += i
  }

  return nums1 - nums2
}