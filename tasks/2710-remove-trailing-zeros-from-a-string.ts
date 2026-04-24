// Accepted 756 / 756 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 21:30
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.77 MB Beats 38.89%

function removeTrailingZeros(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== '0') return num.slice(0, i + 1)
  }
};