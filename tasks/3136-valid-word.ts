// Accepted
// Runtime 78 ms Beats 11.64% of users with TypeScript
// Memory 53.84 MB Beats 9.59% of users with TypeScript

const vovels = [97, 101, 105, 111, 117]

const isValid = (word: string): boolean => {
  if (word.length < 3 || word.replace(/[a-z, 0-9]/gi, '').length !== 0) return false

  let hasVovel = false
  let hasConsonant = false

  for (let i = 0; i < word.length; i++) {
    const code = word[i].toLowerCase().charCodeAt(0)
    if (!hasVovel && vovels.includes(code)) hasVovel = true
    else if (!hasConsonant && !vovels.includes(code) && code >= 97 && code <= 122) hasConsonant = true

    if (hasVovel && hasConsonant) return true
  }

  return false
}

// optimized
// Accepted
// Runtime 53 ms Beats 96.58% of users with TypeScript
// Memory 52.05 MB Beats 65.75% of users with TypeScript

const isValid2 = (word: string): boolean => {
  if (
    word.length < 3
    || word.replace(/[a-z, 0-9]/gi, '').length !== 0
    || word.replace(/[0-9]/, '').replace(/[aeiou]/gi, '').length === 0
    || word.replace(/[0-9]/, '').replace(/[^aeiou]/gi, '').length === 0
  ) return false
  else return true
}
