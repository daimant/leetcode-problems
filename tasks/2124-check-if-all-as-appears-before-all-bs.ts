// Accepted 216 / 216 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 16:06
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.47 MB Beats 76.19%

function checkString(s: string): boolean {
  let lastA = -1;
  let firstB = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') lastA = i;
    else if (firstB === -1) firstB = i;
  }

  return lastA === -1 || firstB === -1 || lastA < firstB
};