// Accepted 82 / 82 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 18:20
// Solution Runtime 1 ms Beats 100.00% Memory 62.71 MB Beats 80.00%

function diagonalPrime(nums: number[][]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j || nums.length - 1 - i === j) {
        const isPrime = checkPrime(nums[i][j]);
        if (isPrime && result < nums[i][j]) result = nums[i][j];
      }
    }
  }

  return result;
};

function checkPrime(num: number) {
  if (num === 2 || num === 3 || num === 5 || num === 7) return true;
  if (num % 2 === 0 || num === 1) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}