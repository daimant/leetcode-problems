// Accepted 805 / 805 testcases passed Sergey Pomortsev submitted at Feb 08, 2026 18:32
// Solution Runtime 1 ms Beats 78.05% Analyze Complexity Memory 61.09 MB Beats 7.32%

const stableMountains = (height: number[], threshold: number): number[] => height.reduce((acc, curr, i, arr) => curr && arr[i - 1] > threshold ? [...acc, i] : acc, [])