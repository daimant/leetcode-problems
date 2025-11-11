// Accepted 979 / 979 testcases passed Sergey Pomortsev submitted at Nov 10, 2025 22:50
// Solution Runtime 250 ms Beats 85.00% Analyze Complexity Memory 104.56 MB Beats 80.00%

function minimumDistance(nums: number[]): number {
  const map = new Map();
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const mapGet = map.get(nums[i])

    if (mapGet) {
      const currMath =
        Math.abs(mapGet[0] - mapGet[1])
        + Math.abs(mapGet[1] - i)
        + Math.abs(i - mapGet[0]);
      if (result > currMath) result = currMath;
      if (result === 4) return result
    }

    if (!mapGet) map.set(nums[i], [i]);
    else if (mapGet.length === 1) map.set(nums[i], [...mapGet, i]);
    else map.set(nums[i], [mapGet[1], i]);
  }

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}