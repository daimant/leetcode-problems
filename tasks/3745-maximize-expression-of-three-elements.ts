// Accepted 1006 / 1006 testcases passed Sergey Pomortsev submitted at Nov 17, 2025 14:00
// Solution Runtime 0 ms Beats 100.00%  Analyze Complexity Memory 56.02 MB Beats 100.00%

function maximizeExpressionOfThree(nums: number[]): number {
  let max = -Number.MAX_SAFE_INTEGER;
  let max2 = -Number.MAX_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  nums.forEach(el => {
    if (el > max) {
      if (max !== -Number.MAX_SAFE_INTEGER) {
        max2 = max;
        if (max2 < min) min = max2;
      }
      max = el;
    } else if (el > max2) {
      max2 = el;
      if (max2 < min) min = max2;
    } else if (el < min) min = el;
  });

  return max + max2 - min;
};