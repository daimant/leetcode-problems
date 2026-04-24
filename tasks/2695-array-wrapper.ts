// Accepted 70 / 70 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 17:57
// Solution Runtime 31 ms Beats 98.76% Analyze Complexity Memory 54.55 MB Beats 92.80%

class ArrayWrapper {
  nums = []

  constructor(nums: number[]) {
    this.nums = nums
  }

  valueOf(): number {
    return this.nums.reduce((acc, curr) => acc + curr, 0)
  }

  toString(): string {
    return JSON.stringify(this.nums)
  }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */