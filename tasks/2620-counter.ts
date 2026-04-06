// Accepted 23 / 23 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 11:05
// Solution Runtime 34 ms Beats 94.26% Analyze Complexity Memory 56.16 MB Beats 5.35%

function createCounter(n: number): () => number {
  return () => n++
}


/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */