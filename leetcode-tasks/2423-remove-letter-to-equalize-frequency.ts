// wrong

const equalFrequency = (word: string): boolean => {
  let err = false

  for (let i = 1; i < word.length; i++) {
    if (word[i].charCodeAt(0) !== word[i - 1].charCodeAt(0) - 1 && !err) err = true
    else if (word[i].charCodeAt(0) !== word[i - 1].charCodeAt(0) - 1) return false
  }

  return true
};

// wrong

const equalFrequency2 = (word: string): boolean => word.length - 1 <= new Set(word.split('')).size;

// wrong 42 / 48 testcases passed

const equalFrequency3 = (word: string): boolean => {
  const map = new Map()
  let err = false

  word.split('').forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  const letts = Array.from(map.values())

  if (letts.length === 1) return true

  for (let i = 0; i < letts.length - 1; i++) {
    if (letts[i] === letts[i + 1]) continue
    if ((letts[i] + 1 === letts[i + 1] || letts[i] - 1 === letts[i + 1]) && !err) {
      err = true
      i++
    } else if ((letts[i] !== letts[i + 1] && err) || (letts[i] + 1 !== letts[i + 1] || letts[i] - 1 !== letts[i + 1])) return false
  }

  const lettAvg = letts.reduce((acc, curr) => acc + curr) / letts.length

  if (letts[0] === 1 && lettAvg % 1 === 0) return true
  else if (lettAvg % 1 === 0) return false

  return true
}

// wrong 40 / 48 testcases passed

const equalFrequency4 = (word: string): boolean => {
  const map = new Map()
  let err = false
  let allLettCountEqual = true

  word.split('').forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  if (map.size === 1) return true

  const letts = Array.from(map.values())

  letts.sort()

  for (let i = 0; i < letts.length - 1; i++) {
    if (letts[i] !== letts[i + 1]) allLettCountEqual = false
    if (letts[i] !== letts[i + 1] && err) return false
    if (letts[i] < letts[i + 1] - 1 && i > 0) return false


    if (letts[i] === letts[i + 1]) continue

    if (
      (i === 0 && letts[i] === 1 && letts[i] !== letts[i + 1] && !err) ||
      ((letts[i] + 1 === letts[i + 1]) && !err)
    ) {
      err = true
      i++
    }
  }

  return (allLettCountEqual && letts[0] === 1) || !allLettCountEqual
}
