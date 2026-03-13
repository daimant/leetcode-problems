// Accepted 186 / 186 testcases passed Sergey Pomortsev submitted at Mar 08, 2026 09:34
// Solution Runtime 0 ms Beats 100.00% Memory 56.05 MB Beats 58.33%

function findDifferentBinaryString(nums: string[]): string {
  const uniq = new Set(nums);
  let max = parseInt(new Array(nums[0].length).fill(1).join(''), 2);

  for (let i = 0; i <= max; i++) {
    const curr = i.toString(2).padStart(nums[0].length, '0');
    if (!uniq.has(curr)) return curr;
  }
};