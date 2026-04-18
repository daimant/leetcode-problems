// Accepted 51 / 51 testcases passed Sergey Pomortsev submitted at Feb 19, 2026 15:06
// Solution Runtime 36 ms Beats 88.10% Analyze Complexity Memory 54.07 MB Beats 89.59%

function* fibGenerator(): Generator<number, any, number> {
  let a = null, b = null

  while (true) {
    if (b === null) {
      b = 0
      yield b
    } else if (b === 0) {
      a = b
      b = 1
      yield b
    } else {
      const temp = a + b
      a = b
      b = temp
      yield temp
    }
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */