// Accepted 39 / 39 testcases passed Sergey Pomortsev submitted at Mar 27, 2026 12:08
// Solution Runtime 1 ms Beats 87.80% Memory 58.23 MB Beats 53.66%

function buddyStrings(s: string, goal: string): boolean {
  if (s.length === 1 || s.length !== goal.length) return false;

  const sArr = s.split('');
  const uniqSymbols = new Set(sArr).size === sArr.length;

  if (!(!uniqSymbols && s === goal)) return false;

  let missmatchCount = 0;
  let firstMissmatchIdx = -1;
  let isCorrectMissmatch = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      console.log(i)
      if (missmatchCount === 0) {
        missmatchCount++;
        firstMissmatchIdx = i;
      } else {
        if (missmatchCount === 1 && s[firstMissmatchIdx] === goal[i] && s[i] === goal[firstMissmatchIdx]) {
          missmatchCount++;
          isCorrectMissmatch = true;
        } else {
          isCorrectMissmatch = false;
          break;
        }
      }
    }
  }

  return isCorrectMissmatch;
};