// Runtime 58 ms Beats 95.83% Memory 42.9 MB Beats 95.83%

const countAsterisks = (s: string): number => {
  let result = 0
  let blockStick = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*' && !blockStick) result++
    else if (s[i] === '|') blockStick = !blockStick
  }

  return result
}
