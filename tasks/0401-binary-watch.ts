// Accepted 11 / 11 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 18:31
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.67 MB Beats 45.28%

function readBinaryWatch(turnedOn: number): string[] {
  const vars = new Map<number, number[]>()
  const result = []

  for (let i = 0; i < 60; i++) {
    const lights = i.toString(2).split('').filter(el => el === '1').length
    vars.set(lights, vars.has(lights) ? [...vars.get(lights), i] : [i])
  }

  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= turnedOn; j++) {
      if (i + j === turnedOn) {
        const hArr = vars.get(i)
        const mArr = vars.get(j)

        if (!hArr || !mArr) continue

        for (let h = 0; h < hArr.length; h++) {
          if (hArr[h] > 11) continue

          for (let m = 0; m < mArr.length; m++) {
            result.push(`${hArr[h]}:${mArr[m].toString().padStart(2, '0')}`)
          }
        }
      }
    }
  }

  return result
};