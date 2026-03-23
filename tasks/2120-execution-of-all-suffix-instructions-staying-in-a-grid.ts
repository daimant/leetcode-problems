// Accepted 113 / 113 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 13:29
// Solution Runtime 28 ms Beats 100.00% Analyze Complexity Memory 60.87 MB Beats 50.00%

function executeInstructions(n: number, startPos: number[], s: string): number[] {
  const result = [];

  outer: for (let i = 0; i < s.length; i++) {
    const pos = [...startPos];

    for (let j = 0; j + i < s.length; j++) {
      if (s[j + i] === 'R') pos[1]++;
      else if (s[j + i] === 'L') pos[1]--;
      else if (s[j + i] === 'U') pos[0]--;
      else if (s[j + i] === 'D') pos[0]++;

      if (pos[0] < 0 || pos[0] === n || pos[1] < 0 || pos[1] === n) {
        result.push(j);
        continue outer;
      }
    }

    result.push(s.length - i);
  }

  return result;
};