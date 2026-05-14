// Accepted 780 / 780 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 13:32
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.07 MB Beats 96.43%

function countKConstraintSubstrings(s: string, k: number): number {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let zeroes = 0;
    let ones = 0;

    for (let j = i; j < s.length; j++) {
      if (s[j] === '0') zeroes++;
      else ones++;

      if (zeroes <= k || ones <= k) result++;
    }
  }

  return result
};