// Accepted 1016 / 1016 testcases passed Sergey Pomortsev submitted at Nov 09, 2025 13:31
// Solution Runtime 1 ms Beats 100.00% Analyze Complexity Memory 57.69 MB Beats 100.00%

function minMoves(nums: number[]): number {
  const max = Math.max(...nums);
  let result = 0;

  nums.forEach(num => {
    result += max - num;
  });

  return result;
}

// one-line
// Accepted 1016 / 1016 testcases passed Sergey Pomortsev submitted at Nov 09, 2025 13:34
// Solution Runtime 1 ms Beats 100.00% Analyze Complexity Memory 57.64 MB Beats 100.00%

const minMoves2 = (nums: number[], max = Math.max(...nums)): number => nums.reduce((acc, curr) => acc + max - curr, 0);
