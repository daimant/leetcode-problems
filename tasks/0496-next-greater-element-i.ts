// Accepted 17 / 17 testcases passed Sergey Pomortsev submitted at Mar 01, 2026 14:38
// 'Solution Runtime 2 ms Beats 91.24% Analyze Complexity Memory 58.06 MB Beats 75.28%

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const mapIdx = new Map();
  const result = [];

  for (let i = 0; i < nums2.length; i++) {
    mapIdx.set(nums2[i], i);
  }

  for (let i = 0; i < nums1.length; i++) {
    let curr = null;

    for (let j = mapIdx.get(nums1[i]) + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        curr = nums2[j];
        break;
      }
    }

    result.push(curr || -1);
  }

  return result;
};