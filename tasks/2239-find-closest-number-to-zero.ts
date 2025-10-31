// Runtime 57 ms Beats 100% Memory 45.6 MB Beats 60%

const findClosestNumber = (nums: number[]): number => {
  let min = Infinity
  let num = null

  nums.forEach(el => {
    const currAbs = Math.abs(el)
    if (currAbs < min || (currAbs === min && el > num)) {
      min = currAbs
      num = el
    }
  })

  return num
}
