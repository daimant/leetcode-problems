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
