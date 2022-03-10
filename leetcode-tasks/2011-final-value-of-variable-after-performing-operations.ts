const finalValueAfterOperations = (els: string[]): number => els.reduce((acc, curr) => curr[1] === '-' ? --acc : ++acc, 0)

// Runtime: 87 ms, faster than 69.09% of TypeScript online submissions for Final Value of Variable After Performing Operations.
// Memory Usage: 44.7 MB, less than 38.18% of TypeScript online submissions for Final Value of Variable After Performing Operations.
