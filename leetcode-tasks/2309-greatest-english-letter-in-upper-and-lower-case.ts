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
