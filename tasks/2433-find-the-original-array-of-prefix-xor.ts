// Accepted 46 / 46 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 13:17
// Solution Runtime 5 ms Beats 76.19% Analyze Complexity Memory 81.66 MB Beats 33.33%

function findArray(pref: number[]): number[] {
  const result = [pref[0]]
  let accXor = pref[0]

  for (let i = 1; i < pref.length; i++) {
    const currXorEl = accXor ^ pref[i]
    result.push(currXorEl)
    accXor = accXor ^ currXorEl
  }

  return result
};