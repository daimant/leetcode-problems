// Accepted 288 / 288 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:29
// Solution Runtime 4 ms Beats 78.26% Analyze Complexity Memory 60.27 MB Beats 60.87%

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const set3 = new Set(nums3)
  const result = new Set<number>()

  for (let el of set1) {
    if (set2.has(el) || set3.has(el)) result.add(el)
  }

  for (let el of set2) {
    if (set1.has(el) || set3.has(el)) result.add(el)
  }

  for (let el of set3) {
    if (set2.has(el) || set1.has(el)) result.add(el)
  }

  return Array.from(result)
};