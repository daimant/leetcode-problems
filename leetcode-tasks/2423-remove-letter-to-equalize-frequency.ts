const equalFrequency = (word: string): boolean => {
  let err = false

  for (let i = 1; i < word.length; i++) {
    if (word[i].charCodeAt(0) !== word[i - 1].charCodeAt(0) - 1 && !err) err = true
    else if (word[i].charCodeAt(0) !== word[i - 1].charCodeAt(0) - 1) return false
  }

  return true
};
