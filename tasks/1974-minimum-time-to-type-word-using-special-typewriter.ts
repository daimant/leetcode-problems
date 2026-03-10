// Accepted 135 / 135 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:02
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.11 MB Beats 81.48%

function minTimeToType(word: string): number {
  let result = 0;
  let prevNum = 97

  for (let i = 0; i < word.length; i++) {
    const currNum = word.charCodeAt(i)
    const diff = Math.abs(currNum - prevNum)

    prevNum = currNum

    result += Math.min(diff, 26 - diff) + 1
  }

  return result
};