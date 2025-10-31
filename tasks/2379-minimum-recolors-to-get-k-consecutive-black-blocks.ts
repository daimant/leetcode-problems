// Runtime 68 ms Beats 100% Memory 43.1 MB Beats 92.31%

const minimumRecolors = (blocks: string, k: number): number => {
  let result = blocks.slice(0, k).replace(/B/g, '').length
  let count = result

  for (let i = 1; i + k <= blocks.length; i++) {
    if (blocks[i - 1] === 'W') count--
    if (blocks[i + k - 1] === 'W') count++

    if (result > count) result = count
  }

  return result
}
