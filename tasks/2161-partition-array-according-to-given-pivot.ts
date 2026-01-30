// Accepted 44 / 44 testcases passed Sergey Pomortsev submitted at Jan 29, 2026 22:45
// Solution Runtime 26 ms Beats 71.62% Analyze Complexity Memory 85.44 MB Beats 98.65%

function pivotArray(nums: number[], pivot: number): number[] {
  return [...nums.filter(el => el < pivot), ...nums.filter(el => el === pivot), ...nums.filter(el => el > pivot)]
};

// optimized solution
// Accepted 44 / 44 testcases passed Sergey Pomortsev submitted at Jan 30, 2026 12:49
// Solution Runtime 16 ms Beats 84.81% Analyze Complexity Memory 81.48 MB Beats 100.00%

function pivotArray(nums: number[], pivot: number): number[] {
  const lessByPivot: number[] = []
  const greatByPivot: number[] = []
  let pivotCount = 0

  nums.forEach(el => {
    if (el < pivot) lessByPivot.push(el)
    else if (el > pivot) greatByPivot.push(el)
    else pivotCount++
  })

  return lessByPivot.concat(new Array(pivotCount).fill(pivot), greatByPivot)
};