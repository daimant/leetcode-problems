// Accepted 115 / 115 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 19:00
// Solution Runtime 42 ms Beats 91.31% Analyze Complexity Memory 57.93 MB Beats 70.41%

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  let count = init
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => count = init,
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */