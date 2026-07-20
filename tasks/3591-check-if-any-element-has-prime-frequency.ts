// Accepted 685 / 685 testcases passed Sergey Pomortsev submitted at Apr 03, 2026 23:15
// Solution Runtime 1 ms Beats 93.75% Memory 57.73 MB Beats 87.50%

function checkPrimeFrequency(nums: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }

  for (let el of map) {
    if (el[1] > 1 && checkNum(el[1])) return true;
  }

  return false;
};

function checkNum(num: number) {
  if (num === 2 || num === 3 || num === 5 || num === 7) return true;
  else if (num % 2 === 0) return false;

  for (let i = 3; i < num / 2; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}