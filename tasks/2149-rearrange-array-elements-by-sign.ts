// Accepted; 133 / 133 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 20:26
// Solution Runtime 17 ms Beats 44.94% Analyze Complexity Memory 98.91 MB Beats 48.31%

function rearrangeArray(nums: number[]): number[] {
  const arr = []
  const pos = nums.filter(el => el >= 0)
  const neg = nums.filter(el => el < 0)

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(pos[i], neg[i])
  }

  return arr
};

// Accepted 133 / 133 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 20:45
// Solution Runtime 17 ms Beats 44.94% Analyze Complexity Memory 98.68 MB Beats 56.18%

function rearrangeArray(nums: number[]): number[] {
  const arr = []
  const pos = []
  const neg = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) pos.push(nums[i])
    else neg.push(nums[i])
  }

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(pos[i], neg[i])
  }

  return arr
};