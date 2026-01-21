// Accepted 793 / 793 testcases passed Sergey Pomortsev submitted at Jan 21, 2026 21:13
// Solution Runtime 1 ms Beats 90.48% Analyze Complexity Memory 58.08 MB Beats 53.97%

const w = ['a', 'e', 'i', 'o', 'u']

function vowelConsonantScore(s: string): number {
  const clearS = s.replace(/[^a-z]/gi, '')
  const wCount = clearS.split('').filter(el => w.includes(el)).length
  return wCount !== clearS.length ? Math.floor(wCount / (clearS.length - wCount)) : 0
}