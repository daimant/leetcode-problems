// Accepted 1069 / 1069 testcases passed Sergey Pomortsev submitted at Nov 11, 2025 15:06
// Solution Runtime 36 ms Beats 67.86% Analyze Complexity Memory 57.51 MB Beats 92.86%

function countMajoritySubarrays(nums: number[], target: number): number {
  let subarraysCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let currCount = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === target) currCount++;
      if (currCount > (j - i + 1) / 2) subarraysCount++;
    }
  }

  return subarraysCount;
}