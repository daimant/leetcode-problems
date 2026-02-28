function countTriples(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i !== j) {
        for (let k = 1; k <= n; k++) {
          if (k !== i && k !== j && i ** 2 + j ** 2 === k ** 2) result++;
        }
      }
    }
  }

  return result;
};

// optimized
// Accepted 91 / 91 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 19:52
// Solution Runtime 11 ms Beats 27.54% Analyze Complexity Memory 57.62 MB Beats 27.54%

function countTriples(n: number): number {
  let result = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const currSqrt = Math.sqrt(i ** 2 + j ** 2);
      if (currSqrt % 1 === 0 && currSqrt <= n) result += 2;
    }
  }

  return result
};