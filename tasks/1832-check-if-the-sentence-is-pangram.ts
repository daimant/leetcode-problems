// Runtime 59 ms Beats 98% Memory 42.8 MB Beats 99%

const checkIfPangram = (sentence: string): boolean => {
  for (let i = 97; i < 123; i++) {
    if (!sentence.includes(String.fromCharCode(i))) return false
  }

  return true
}

// Runtime 59 ms Beats 98% Memory 45.1 MB Beats 16%

const checkIfPangram2 = (sentence: string): boolean => {
  const set = new Set(sentence.split(''))

  for(let i = 97; i < 123; i++) {
    if (!set.has(String.fromCharCode(i))) return false
  }

  return true
}
