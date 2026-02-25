// Accepted 73 / 73 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 20:43
// Solution Runtime 218 ms Beats 5.00% Analyze Complexity Memory 62.75 MB Beats 10.00%

function longestNiceSubstring(s: string): string {
  let longestNice = ''

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const currStr = s.slice(i, j + 1)
      const isNice = checkIsNice(currStr)

      if (isNice && currStr.length > longestNice.length) longestNice = currStr
    }
  }

  return longestNice
};

function checkIsNice(str: string) {
  const map = new Map()

  for (let i = 0; i < str.length; i++) {
    const lower = str[i].toLowerCase()
    const isLower = lower === str[i]
    if (map.has(lower)) map.set(lower, { ...map.get(lower), ...(isLower ? { lower: 1 } : { upper: 1 }) })
    else map.set(lower, { lower: isLower ? 1 : 0, upper: isLower ? 0 : 1 })
  }

  return Array.from(map.values()).every(el => el.lower && el.upper)
}

// optimized
// Accepted 73 / 73 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 21:10
// Solution Runtime 17 ms Beats 40.00% Analyze Complexity Memory 62.55 MB Beats 12.50%

function longestNiceSubstring(s: string): string {
  let longestNice = ''

  for (let i = 0; i < s.length - 1 - longestNice.length; i++) {
    const set = new Set(s[i])

    for (let j = i + 1; j < s.length; j++) {
      set.add(s[j])
      const isNice = checkIsNice(set)

      if (isNice && j - i + 1 > longestNice.length) longestNice = s.slice(i, j + 1)
    }
  }

  return longestNice
};

function checkIsNice(set: Set<string>) {
  for (let el of set) {
    const lower = el.toLowerCase()
    const isLower = lower === el

    if ((isLower && !set.has(el.toUpperCase())) || (!isLower && !set.has(lower))) return false
  }

  return true
}