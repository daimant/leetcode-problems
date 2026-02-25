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