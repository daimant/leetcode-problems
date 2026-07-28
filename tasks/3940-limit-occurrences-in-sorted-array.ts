// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 18:27
// Solution Runtime 1 ms Beats 83.20% Memory 59.38 MB Beats 47.20%

function limitOccurrences(nums: number[], k: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const get = map.get(nums[i]);

    if (get < k) map.set(nums[i], get + 1);
    else if (get >= k) {
      nums.splice(i, 1);
      i--;
    } else map.set(nums[i], 1);
  }

  return nums;
};