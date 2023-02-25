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
