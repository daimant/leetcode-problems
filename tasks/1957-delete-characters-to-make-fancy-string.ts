// Accepted 306 / 306 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 20:09
// Solution Runtime 98 ms Beats 7.14% Analyze Complexity Memory 80.83 MB Beats 57.14%

function makeFancyString(s: string): string {
  const arr = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1] || s[i] !== s[i - 2]) arr.push(s[i]);
  }

  return arr.join('');
};