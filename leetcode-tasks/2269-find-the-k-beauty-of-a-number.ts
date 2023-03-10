// Runtime 47 ms Beats 100% Memory 42.8 MB Beats 76%

const divisorSubstrings = (num: number, k: number, str = String(num), count = 0): number => {
  for (let i = 0; i <= str.length - k; i++) {
    if ((num / Number(str.slice(i, i + k))) % 1 === 0) count++
  }

  return count
}
