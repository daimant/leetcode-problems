// Accepted 983 / 983 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 11:19
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.39 MB Beats 38.46%

function finalPositionOfSnake(n: number, commands: string[]): number {
  let x = 0
  let y = 0

  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'UP':
        y = y - 1
        break
      case 'DOWN':
        y = y + 1
        break
      case 'LEFT':
        x = x - 1
        break
      case 'RIGHT':
        x = x + 1
        break
    }
  }

  return x + y * n
};