// Accepted 995 / 995 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 18:45
// Solution Runtime 2 ms Beats 92.04% Analyze Complexity Memory 57.53 MB Beats 93.81%

function reverseByType(s: string): string {
  const placesLetts = new Set()
  const letts = []
  const symbs = []

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 97) {
      placesLetts.add(i)
      letts.push(s[i])
    } else symbs.push(s[i])
  }

  letts.reverse()
  symbs.reverse()

  let str = ''
  let lettsIdx = 0
  let symbsIdx = 0

  for (let i = 0; i < s.length; i++) {
    str += placesLetts.has(i) ? letts[lettsIdx++] : symbs[symbsIdx++]
  }

  return str
};

// optimized
// Accepted 995 / 995 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 18:50
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 59.20 MB Beats 40.71%

function reverseByType(s: string): string {
  const placesLetts = new Set()
  const letts = []
  const symbs = []

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 97) {
      placesLetts.add(i)
      letts.push(s[i])
    } else symbs.push(s[i])
  }

  let str = ''
  let lettsIdx = 0
  let symbsIdx = 0

  for (let i = 0; i < s.length; i++) {
    str += placesLetts.has(i) ? letts[letts.length - 1 - lettsIdx++] : symbs[symbs.length - 1 - symbsIdx++]
  }

  return str
};