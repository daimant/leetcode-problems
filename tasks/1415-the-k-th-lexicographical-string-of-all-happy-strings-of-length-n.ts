// Accepted 345 / 345 testcases passed Sergey Pomortsev submitted at Feb 16, 2026 22:32
// Solution Runtime 4 ms Beats 60.00% Analyze Complexity Memory 62.88 MB Beats 10.00%

function getHappyString(n: number, k: number): string {
  const arr = ['a', 'b', 'c']

  const createStr = (parent: string) => {
    let newStr1 = parent + (parent[parent.length - 1] === 'a' ? 'b' : 'a')
    let newStr2 = parent + (parent[parent.length - 1] === 'a' ? 'c' : parent[parent.length - 1] === 'b' ? 'c' : 'b')

    arr.push(newStr1, newStr2)

    if (newStr1.length < n) {
      createStr(newStr1)
      createStr(newStr2)
    }
  }

  arr.forEach(el => {
    createStr(el)
  })

  return arr.filter(el => el.length === n).sort()[k - 1] || ''
};