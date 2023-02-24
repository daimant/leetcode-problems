// Runtime 63 ms Beats 82.61% Memory 42.8 MB Beats 97.10%

const repeatedCharacter = (s: string): string => {
  const set = new Set()
  let result = ''

  Array.from(s).forEach(el => {
    if (result) return
    else {
      if (set.has(el)) result = el
      else set.add(el)
    }
  })

  return result
}

// Runtime 60 ms Beats 91.30% Memory 42.5 MB Beats 100%

const repeatedCharacter2 = (s: string): string => {
  const set = new Set()

  for (const el of s) {
    if (set.has(el)) return el
    else set.add(el)
  }
}
