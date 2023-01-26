// Runtime 100 ms Beats 11.36% Memory 46.9 MB Beats 20.45%

const closetTarget = (words: string[], target: string, startIndex: number): number => {
  let moveRight = -1
  let moveLeft = -1

  for (let i = startIndex; i < words.length && moveRight < 0; i++) {
    if (words[i] === target) moveRight = i - startIndex

    if (i === words.length - 1) {
      for (let j = 0; j < startIndex && moveRight < 0; j++) {
        if (words[j] === target) moveRight = j + i - startIndex + 1
      }
    }
  }

  for (let i = startIndex; i >= 0 && moveLeft < 0; i--) {
    if (words[i] === target) moveLeft = startIndex - i

    if (i === 0) {
      for (let j = words.length - 1; j > startIndex && moveLeft < 0; j--) {
        if (words[j] === target) moveLeft = startIndex + words.length - j
      }
    }
  }

  if (moveRight < 0 && moveRight < 0) return -1

  return Math.min(moveRight < 0 ? Infinity : moveRight, moveLeft < 0 ? Infinity : moveLeft)
}

// Runtime 72 ms Beats 65.91% Memory 46.1 MB Beats 79.55%

const closetTarget2 = (words: string[], target: string, startIndex: number): number => {
  let moveRight = -1
  let moveLeft = -1

  for (let i = startIndex; i < words.length && moveRight < 0; i++) {
    if (words[i] === target) moveRight = i - startIndex

    if (i === words.length - 1) {
      for (let j = 0; j < startIndex && moveRight < 0; j++) {
        if (words[j] === target) moveRight = j + i - startIndex + 1
      }
    }
  }

  for (let i = startIndex; i >= 0 && moveLeft < 0; i--) {
    if (moveRight <= startIndex - i) return moveRight
    if (words[i] === target) moveLeft = startIndex - i

    if (i === 0) {
      for (let j = words.length - 1; j > startIndex && moveLeft < 0; j--) {
        if (moveRight <= startIndex + words.length - j) return moveRight
        if (words[j] === target) moveLeft = startIndex + words.length - j
      }
    }
  }

  if (moveRight < 0 && moveRight < 0) return -1

  return Math.min(moveRight < 0 ? Infinity : moveRight, moveLeft < 0 ? Infinity : moveLeft)
}
