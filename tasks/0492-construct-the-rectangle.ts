// Accepted 52 / 52 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 20:37
// Solution Runtime 0 ms Beats 100.00% Memory 55.32 MB Beats 73.81%

function constructRectangle(area: number): number[] {
  const sqrt = Math.sqrt(area);
  if (Math.trunc(sqrt) ** 2 === area) return Array.of(sqrt, sqrt);

  let result = [area, 1];

  for (let i = 2; i < sqrt; i++) {
    if (area % i === 0) {
      result = [area / i, i];
    }
  }

  return result;
};