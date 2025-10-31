// Wrong Answer
// 802 / 1252 testcases passed

const furthestDistanceFromOrigin = (moves: string): number => {
  let result = 0
  let direction = 'R'

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'R') {
      result++
      if (direction !== 'R') direction !== 'R'
    } else if (moves[i] === 'L') {
      result--
      if (direction !== 'L') direction !== 'L'
    } else {
      if (direction !== 'R') result++
      else result--
    }
  }

  return Math.abs(result)
}

// Accepted
// Runtime 62 ms Beats 100.00%
// Memory 54.67 MB Beats 18.92%

const furthestDistanceFromOrigin2 = (moves: string): number => {
  return Math.max(measureDistance(moves, 'R'), measureDistance(moves, 'L'))
}

const measureDistance = (moves: string, direction: string) => {
  let result = 0

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'R') {
      result++
      if (direction !== 'R') direction !== 'R'
    } else if (moves[i] === 'L') {
      result--
      if (direction !== 'L') direction !== 'L'
    } else {
      if (direction === 'R') result++
      else result--
    }
  }

  return Math.abs(result)
}
