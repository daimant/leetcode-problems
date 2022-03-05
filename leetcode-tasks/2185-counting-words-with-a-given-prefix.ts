const prefixCount = (words: string[], pref: string): number => {
  let countWords = 0

  for (const word of words) {
    let countLetters = 0

    for (let i = 0; i < pref.length; i++) {
      if (word[i] === pref[i]) {
        countLetters++
      }
    }

    if (countLetters === pref.length) {
      countWords++
    }
  }

  return countWords
};

// 95 / 95 test cases passed.
// Status: Accepted
// Runtime: 86 ms
// Memory Usage: 45.4 MB
