const minPartitions = (n: string): number => {
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

const minPartitions2 = (n: string): number => {
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
