// Accepted 27 / 27 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 19:34
// Solution Runtime 32 ms Beats 94.75% Analyze Complexity Memory 53.94 MB Beats 86.98%

interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
