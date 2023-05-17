// Wrong Answer 38 / 72 testcases passed

const getMinDistance = (nums: number[], target: number, start: number): number => {
  let result = Infinity
  nums.forEach((el, i) => el === target && i - start < result && (result = i - start))
  return result
}
