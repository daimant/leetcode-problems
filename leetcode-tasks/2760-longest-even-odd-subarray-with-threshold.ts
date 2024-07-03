// Wrong Answer
// 6231 / 6873 testcases passed

const longestAlternatingSubarray = (nums: number[], threshold: number): number => {
  let max = 0
  let currSeq = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 !== 0) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 === 0) currSeq++
    else if (currSeq !== 0) {
      if (nums[i] % 2 === 0 && nums[i - 1] % 2 !== 0) currSeq++
      else if (nums[i] % 2 !== 0 && nums[i - 1] % 2 === 0) currSeq++
    }

    if (currSeq > max) max = currSeq
  }

  return max
}

// Wrong Answer
// 6583 / 6873 testcases passed

const longestAlternatingSubarray2 = (nums: number[], threshold: number): number => {
  let max = 0
  let currSeq = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 !== 0) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 === 0) currSeq++
    else if (currSeq !== 0) {
      if (nums[i] % 2 === 0 && nums[i - 1] % 2 !== 0) currSeq++
      else if (nums[i] % 2 !== 0 && nums[i - 1] % 2 === 0) currSeq++
      else currSeq = 0
    }

    if (currSeq > max) max = currSeq
  }

  return max
}

// Wrong Answer
// 6349 / 6873 testcases passed

const longestAlternatingSubarray3 = (nums: number[], threshold: number): number => {
  let max = 0
  let currSeq = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 !== 0) currSeq = 0
    else if (currSeq !== 0) {
      if (nums[i] % 2 === 0 && nums[i - 1] % 2 !== 0) currSeq++
      else if (nums[i] % 2 !== 0 && nums[i - 1] % 2 === 0) currSeq++
      else currSeq = 0
    }

    if (currSeq === 0 && nums[i] % 2 === 0) currSeq++
    if (currSeq > max) max = currSeq
  }

  return max
}

// Accepted
// Runtime 113 ms Beats 91.67%
// Memory 57.30 MB Beats 100.00%

const longestAlternatingSubarray4 = (nums: number[], threshold: number): number => {
  let max = 0
  let currSeq = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) currSeq = 0
    else if (currSeq === 0 && nums[i] % 2 !== 0) currSeq = 0
    else if (currSeq !== 0) {
      if (nums[i] % 2 === 0 && nums[i - 1] % 2 !== 0) currSeq++
      else if (nums[i] % 2 !== 0 && nums[i - 1] % 2 === 0) currSeq++
      else currSeq = 0
    }

    if (nums[i] <= threshold && currSeq === 0 && nums[i] % 2 === 0) currSeq++
    if (currSeq > max) max = currSeq
  }

  return max
}
