// Accepted 104 / 104 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 14:23
// Solution Runtime 0 ms Beats 100.00% Memory 56.58 MB Beats 20.00%

function smallestNumber(pattern: string): string {
  const arr = new Array(pattern.length + 1).fill(1)

  while (true) {
    let isChanged = false

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === 'I' && arr[i] >= arr[i + 1]) {
        arr[i + 1] = arr[i] + 1
        isChanged = true
      } else if (pattern[i] === 'D' && arr[i] <= arr[i + 1]) {
        arr[i] = arr[i + 1] + 1
        isChanged = true
      }
    }

    if (!isChanged && new Set(arr).size !== arr.length) {
      for (let i = 1; i < arr.length; i++) {
        const findIndex = arr.indexOf(arr[i])
        if (findIndex < i) {
          arr[i]++
          isChanged = true
        }
      }
    }

    if (!isChanged) break
  }

  return arr.join('')
};