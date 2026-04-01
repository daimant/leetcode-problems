// Accepted 104 / 104 testcases passed Sergey Pomortsev submitted at Feb 15, 2026 09:52
// Solution Runtime 1 ms Beats 57.14% Analyze Complexity Memory 56.65 MB Beats 14.29%

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