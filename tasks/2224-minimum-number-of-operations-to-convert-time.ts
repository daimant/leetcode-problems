// Runtime 55 ms Beats 95.24% Memory 44.5 MB Beats 57.14%

const convertTime = (current: string, correct: string): number => {
  const goalNum = Number(correct.slice(0, 2)) * 60 + Number(correct.slice(3))
  let currNum = Number(current.slice(0, 2)) * 60 + Number(current.slice(3))
  let result = 0

  while (currNum < goalNum) {
    if (currNum + 60 <= goalNum) currNum += 60
    else if (currNum + 15 <= goalNum) currNum += 15
    else if (currNum + 5 <= goalNum) currNum += 5
    else if (currNum + 1 <= goalNum) currNum += 1

    result++
  }

  return result
}
