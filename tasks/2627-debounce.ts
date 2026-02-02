// Accepted 9 / 9 testcases passed Sergey Pomortsev submitted at Jan 27, 2026 23:41 Editorial
// Solution Runtime 38 ms Beats 97.75% Analyze Complexity Memory 55.62 MB Beats 52.81%

type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timeout

  return function (...args) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */