// Accepted 196 / 196 testcases passed Sergey Pomortsev submitted at Mar 26, 2026 15:25
// Solution Runtime 0 ms Beats 100.00% Memory 60.16 MB Beats 64.15%

function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2) return num.slice(0, i + 1);
  }

  return '';
};