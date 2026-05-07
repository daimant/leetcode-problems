// Accepted 827 / 827 testcases passed Sergey Pomortsev submitted at Feb 28, 2026 15:11
// Solution Runtime 42 ms Beats -% Analyze Complexity Memory 61.08 MB Beats -%

function distributeCandies(n: number, limit: number): number {
  const uniq = new Set<string>();

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      for (let k = 0; k <= limit; k++) {
        if (i + j + k === n) uniq.add(`${i}-${j}-${k}`);
      }
    }
  }

  return uniq.size;
};