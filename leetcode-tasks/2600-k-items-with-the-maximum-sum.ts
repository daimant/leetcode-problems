// 1213 / 1310 testcases passed

const kItemsWithMaximumSum = (numOnes: number, numZeros: number, numNegOnes: number, k: number): number => {
  if (numOnes >= k) return k
  else if (numOnes + numZeros >= k) return numOnes
  else return numOnes - k % (numOnes + numZeros)
}

// Runtime 72 ms Beats 100% Memory 46.3 MB Beats 100%

const kItemsWithMaximumSum2 = (ones: number, zeros: number, neg: number, k: number): number => k
  ? [...new Array(ones).fill(1), ...new Array(zeros).fill(0), ...new Array(neg).fill(-1)].slice(0, k).reduce((acc, curr) => acc + curr)
  : 0
