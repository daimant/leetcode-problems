// Accepted 906 / 906 testcases passed Sergey Pomortsev submitted at Mar 01, 2026 12:43
// Solution Runtime 13 ms Beats 100.00% Analyze Complexity Memory 63.65 MB Beats 70.00%

function findXSum(nums: number[], k: number, x: number): number[] {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    if (i >= k) {
      if (map.get(nums[i - k]) === 1) map.delete(nums[i - k]);
      else map.set(nums[i - k], map.get(nums[i - k]) - 1);
    }

    if (i >= k - 1) {
      result.push(
        Array
          .from(map)
          .sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1])
          .slice(0, x)
          .reduce((acc, curr) => acc + curr[0] * curr[1], 0)
      );
    }
  }

  return result;
};