// wrong solution

const minimumBoxes = (apples: number[], capacity: number[]): number => {
  let appleIndex = 0
  let applesFromLastBox = 0

  capacity.sort((a, b) => b - a)
  apples.sort((a, b) => a - b)

  for (let i = 0; i < capacity.length; i++) {
    let currBox = capacity[i]

    if (applesFromLastBox < currBox) {
      currBox -= applesFromLastBox
      applesFromLastBox = 0
    } else {
      applesFromLastBox -= currBox
      continue
    }

    while (true) {
      appleIndex++
      if (currBox - apples[appleIndex] > 0) currBox -= apples[appleIndex]
      else {
        applesFromLastBox = apples[appleIndex] - currBox
        break
      }
    }

    if (appleIndex === apples.length) return capacity.length - i
  }

  return capacity.length
}

// Accepted
// Runtime 48 ms Beats 98.99% of users with TypeScript
// Memory 51.96 MB Beats 38.38% of users with TypeScript

const minimumBoxes2 = (apples: number[], capacity: number[]): number => {
  let applesAmount = apples.reduce((acc, curr) => acc + curr, 0)
  capacity.sort((a, b) => b - a)


  for (let i = 0; i < capacity.length; i++) {
    applesAmount -= capacity[i]
    if (applesAmount <= 0) return i + 1
  }

  return capacity.length
}