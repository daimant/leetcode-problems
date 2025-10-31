const cellsInRange = (s: string): string[] => {
  const result = []
  const startCol = s.charCodeAt(0)
  const startRow = Number(s[1])
  const endCol = s.charCodeAt(3)
  const endRow = Number(s[4])

  for (let i = 0; i <= endCol - startCol; i++) {
    const currCol = String.fromCharCode(startCol + i)

    for (let j = 0; j <= endRow - startRow; j++) {
      result.push(`${currCol}${startRow + j}`)
    }
  }

  return result
};

// Runtime: 72 ms, faster than 97.87% of TypeScript online submissions for Cells in a Range on an Excel Sheet.
// Memory Usage: 45.8 MB, less than 40.43% of TypeScript online submissions for Cells in a Range on an Excel Sheet.
