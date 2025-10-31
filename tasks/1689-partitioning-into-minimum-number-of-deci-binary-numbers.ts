const minPartitions7 = (n: string): number => {
  let max = -Infinity

  for (let i = 0; i < n.length; i++) {
    if (max < Number(n[i])) {
      max = Number(n[i])
    }
  }

  return max
};

// time o(n) space o(1)
// Runtime: 80 ms, faster than 95.45% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 47.8 MB, less than 50.00% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.

const minPartitions6 = (n: string): number => {
  let max = -Infinity

  for (const num of n) {
    if (max < Number(num)) {
      max = Number(num)
    }
  }

  return max
};

// time o(n) space o(n)
// Runtime: 80 ms, faster than 95.45% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 47.5 MB, less than 54.55% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.

const minPartitions5 = (n: string): number => Math.max(...n.split('').map(el => Number(el)));

// Runtime: 172 ms, faster than 18.18% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 52.5 MB, less than 27.27% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.

const minPartitions4 = (n: string): number => {
  const arr = n.split('')
  let countBin = 0

  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] !== '0') {
        arr[i] = String(Number(arr[i]) - 1)
      }

      if (arr[i] === '0' && i === 0) {
        arr.shift()
        i--;
      }
    }

    countBin++
  }

  return countBin
};

// Runtime: 6044 ms, faster than 9.09% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 50.9 MB, less than 31.82% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.

const minPartitions3 = (n: string): number => {
  let countBin = 0

  while (n !== '') {
    for (let i = 0; i < n.length; i++) {
      if (n[i] !== '0') {
        n = n.slice(0, i) + String(Number(n[i]) - 1) + n.slice(i + 1)
      }
    }
    n = n.replace(/^0+/, '')

    countBin++
  }

  return countBin
};

// Time Limit Exceeded

const minPartitions2 = (n: string): number => {
  let countBin = 0

  while (n !== '0') {
    const currBin = n.slice().replace(/[^0]/g, '1')
    const newN = BigInt(n) - BigInt(currBin)

    n = String(newN)
    countBin++
  }

  return countBin
};

// Runtime: 3396 ms, faster than 9.09% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 52.4 MB, less than 27.27% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.

const minPartitions1 = (n: string): number => {
  let countBin = 0

  while (n !== '0') {
    let currBin = ''

    for (let i = 0; i < n.length; i++) {
      currBin += n[i] === '0' ? '0' : '1'
    }

    const newN = BigInt(n) - BigInt(currBin)

    n = String(newN)
    countBin++
  }

  return countBin
};

// Runtime: 5866 ms, faster than 9.09% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 75.8 MB, less than 9.09% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
