// Accepted 680 / 680 testcases passed Sergey Pomortsev submitted at Dec 04, 2025 21:49
// Solution Runtime 14 ms Beats 11.39% Analyze Complexity Memory 59.22 MB Beats 59.49%

function minLengthAfterRemovals(s: string): number {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }

  return Math.abs((map.get('a') || 0) - (map.get('b') || 0))
};

// optimized
// Accepted 680 / 680 testcases passed Sergey Pomortsev submitted at Dec 04, 2025 21:52
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 59.64 MB Beats 26.58%

function minLengthAfterRemovals2(s: string): number {
  let countA = 0
  let countB = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') countA++
    else countB++
  }

  return Math.abs(countA - countB)
};