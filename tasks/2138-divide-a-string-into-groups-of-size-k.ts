// Accepted 157 / 157 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 20:11
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.51 MB Beats 77.78%

const divideString = (s: string, k: number, fill: string): string[] => {
  const result = [];

  for (let i = 0; i < s.length; i += k) {
    result.push(s.slice(i, i + k));
  }

  result[result.length - 1] = result[result.length - 1].padEnd(k, fill);

  return result;
}