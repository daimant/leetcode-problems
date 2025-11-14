// Accepted 899 / 899 testcases passed Sergey Pomortsev submitted at Nov 14, 2025 09:14
// Solution Runtime 2 ms Beats 84.51% Analyze Complexity Memory 59.96 MB Beats 15.49%

function minimumDistance1(nums: number[]): number {
  const collection = new Map();

  nums.forEach((num, i) => {
    collection.set(num, [...(collection.has(num) ? collection.get(num) : []), i])
  });

  const arrs = Array
    .from(collection)
    .filter(el => el[1].length >= 3)
    .map(el => el[1]);
  let result: number = Number.MAX_SAFE_INTEGER;

  arrs.forEach(arr => {
    for (let i = 0; i < arr.length - 2; i++) {
      const currSum = Math.abs(arr[i] - arr[i + 1]) + Math.abs(arr[i + 1] - arr[i + 2]) + Math.abs(arr[i + 2] - arr[i]);
      if (currSum < result) result = currSum;
    }
  })

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}