// wrong 28 / 113 testcases passed

const greatestLetter = (s: string): string => {
  const set = new Set()
  let result = ''

  s.split('').forEach(el => {
    const curr = el.charCodeAt(0)
    if ((set.has(curr + 32) || set.has(curr - 32)) && !result) result = el
    else set.add(curr)
  })

  return result.toUpperCase()
}

// Runtime 79 ms Beats 73.68% Memory 44.7 MB Beats 94.74%

const greatestLetter2 = (s: string): string => {
  const set = new Set()
  let result = ''

  s.split('').sort().forEach(el => {
    const curr = el.charCodeAt(0)
    if ((set.has(curr + 32) || set.has(curr - 32)) && el > result) result = el
    else set.add(curr)
  })

  return result.toUpperCase()
}

// Runtime 56 ms Beats 100% Memory 44.7 MB Beats 94.74%

const greatestLetter3 = (s: string): string => {
  const set = new Set(s.split(''))

  for (let i = 90; i >= 65; i--) {
    if (set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i + 32))) return String.fromCharCode(i)
  }

  return ''
}
