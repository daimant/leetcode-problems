// Accepted 866 / 866 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 18:06
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.76 MB Beats 36.00%

const findClosest = (x: number, y: number, z: number): number => {
  const [one, two] = [Math.abs(z - x), Math.abs(z - y)]
  return one === two ? 0 : one < two ? 1 : 2
}