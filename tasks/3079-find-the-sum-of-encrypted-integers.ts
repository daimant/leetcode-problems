// Accepted
// Runtime 72 ms Beats 58.18% of users with TypeScript
// Memory 54.26 MB Beats 38.18% of users with TypeScript

const sumOfEncryptedInt = (nums: number[]): number => nums.reduce((acc, curr, i, arr, currArr = String(curr).split('').map(el => +el)) => acc + +( new Array(currArr.length).fill(Math.max(...currArr)).join('') ), 0)

// Accepted
// Runtime 56 ms Beats 98.18% of users with TypeScript
// Memory 52.08 MB Beats 96.36% of users with TypeScript

const sumOfEncryptedInt2 = (nums: number[]): number => {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const currStr = String(nums[i])
    let currMax = 0
    let currResult = ''

    for (let j = 0; j < currStr.length; j++) {
      const currNum = Number(currStr[j])
      if (currNum > currMax) currMax = currNum
    }

    for (let k = 0; k < currStr.length; k++) currResult += String(currMax)

    result += Number(currResult)
  }

  return result
}