// Accepted 114 / 114 testcases passed Sergey Pomortsev submitted at Feb 05, 2026 18:53
// Solution Runtime 44 ms Beats 96.83% Analyze Complexity Memory 57.50 MB Beats 6.46%

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let result = x

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result)
    }

    return result
  }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */