// Accepted 82 / 82 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 19:12
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.58 MB Beats 92.31%

function findFinalValue(nums: number[], original: number): number {
  let result = original;
  let isFound = true;

  while (isFound) {
    isFound = false;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === result) {
        result *= 2;
        isFound = true;
      }
    }
  }

  return result;
};