// Accepted 218 / 218 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 20:55
// Solution Runtime 2 ms Beats 100.00% Memory 57.76 MB Beats 95.24%

function sortEvenOdd(nums: number[]): number[] {
  while (true) {
    let wasSwap = false

    for (let i = 0; i < nums.length - 2; i++) {
      if (i % 2 === 0 && nums[i] > nums[i + 2] || i % 2 && nums[i] < nums[i + 2]) {
        [nums[i], nums[i + 2]] = [nums[i + 2], nums[i]];
        wasSwap = true;
      }
    }

    if (!wasSwap) return nums;
  }
};