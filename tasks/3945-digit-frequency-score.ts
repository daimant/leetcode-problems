// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 18:20
// Solution Runtime 1 ms Beats 78.53% Memory 58.64 MB Beats 14.14%

function digitFrequencyScore(n: number): number {
  const arr = new Array(10).fill(0);
  const str = String(n);

  for (let i = 0; i < str.length; i++) {
    arr[Number(str[i])]++;
  }

  return arr.reduce((acc, curr, i) => acc + curr * i, 0);
};