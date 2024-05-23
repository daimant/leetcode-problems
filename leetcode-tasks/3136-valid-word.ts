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
