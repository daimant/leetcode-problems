// Wrong Answer 38 / 72 testcases passed

const getMinDistance = (nums: number[], target: number, start: number): number => {
  let result = Infinity
  nums.forEach((el, i) => el === target && i - start < result && (result = i - start))
  return result
}

// Runtime 59 ms Beats 86.67% Memory 44.9 MB Beats 20%

const getMinDistance2 = (nums: number[], target: number, start: number): number => {
  const diffs = new Set()

  nums.forEach((el, i) => {
    if (el === target) diffs.add(Math.abs(i - start))
  })

  return Math.min(...Array.from(diffs) as number[])
}
