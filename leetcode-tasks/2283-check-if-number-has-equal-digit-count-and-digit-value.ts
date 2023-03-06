// Runtime 61 ms Beats 93.33% Memory 44.9 MB Beats 50%

const digitCount = (num: string): boolean => {
  const map = new Map()

  for (let i = 0; i < num.length; i++) {
    map.set(Number(num[i]), (map.get(Number(num[i])) || 0) + 1)
  }

  for (let i = 0; i < num.length; i++) {
    if ((map.get(i) || 0) !== Number(num[i])) return false
  }

  return true
}
