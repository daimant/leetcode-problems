// Accepted 941 / 941 testcases passed Sergey Pomortsev submitted at May 07, 2026 16:04
// Solution Runtime 2 ms Beats 60.23% Memory 60.06 MB Beats 23.86%

function firstStableIndex(nums: number[], k: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (Math.max(...nums.slice(0, i + 1)) - Math.min(...nums.slice(i)) <= k) return i;
  }

  return -1;
};

// optimized
// Accepted 941 / 941 testcases passed Sergey Pomortsev submitted at May 07, 2026 16:08
// Solution Runtime 0 ms Beats 100.00% Memory 58.23 MB Beats 57.95%

function firstStableIndex(nums: number[], k: number): number {
  let leftMax = nums[0];
  let rightMin = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (leftMax < nums[i]) leftMax = nums[i];
    if (i && rightMin === nums[i - 1]) rightMin = Math.min(...nums.slice(i));

    if (leftMax - rightMin <= k) return i;
  }

  return -1;
};