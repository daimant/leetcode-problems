// Runtime: 67 ms, faster than 90.91% of TypeScript online submissions for Number of Valid Clock Times.
// Memory Usage: 42.8 MB, less than 72.73% of TypeScript online submissions for Number of Valid Clock Times.

const countTime = (time: string): number => {
  let result = 1

  if (time[0] === '?' && time[1] === '?') {
    result *= 24
  } else {
    if (time[0] === '?') {
      result *= Number(time[1]) < 4 ? 3 : 2
    }
    if (time[1] === '?') {
      result *= Number(time[0]) !== 2 ? 10 : 4
    }
  }

  if (time[3] === '?') result *= 6
  if (time[4] === '?') result *= 10

  return result
}

const countTime2 = (time: string): number => {
  let result = 1

  if (time[0] === '?' && time[1] === '?') result *= 24
  else {
    if (time[0] === '?') result *= Number(time[1]) < 4 ? 3 : 2
    else if (time[1] === '?') result *= Number(time[0]) !== 2 ? 10 : 4
  }

  if (time[3] === '?') result *= 6
  if (time[4] === '?') result *= 10

  return result
}
