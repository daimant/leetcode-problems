// Accepted 795 / 795 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 10:29
// Solution Runtime 42 ms Beats 97.73% Memory 57.89 MB Beats 45.45%

function numberOfAlternatingGroups(colors: number[]): number {
  let count = 0;

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] !== (colors[i - 1] ?? colors[colors.length - 1]) && colors[i] !== (colors[i + 1] ?? colors[0])) count++;
  }

  return count;
};