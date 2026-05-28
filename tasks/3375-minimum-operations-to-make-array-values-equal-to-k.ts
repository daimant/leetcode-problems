// Accepted 969 / 969 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 11:58
// Solution Runtime 51 ms Beats 57.14% Analyze Complexity Memory 57.85 MB Beats 71.43%

const minOperations = (nums: number[], k: number): number => {
  if (nums.some(el => el < k)) return -1;
  return Array.from(new Set(nums)).filter(el => el > k).length;
}

// in one pass
// Accepted 969 / 969 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 12:01
// Solution Runtime 36 ms Beats 100.00% Analyze Complexity Memory 58.05 MB Beats 57.14%

const minOperations = (nums: number[], k: number): number => {
  const uniq = new Set();

  for (let num of nums) {
    if (num < k) return -1;
    else if (num > k) uniq.add(num);
  }

  return uniq.size;
}