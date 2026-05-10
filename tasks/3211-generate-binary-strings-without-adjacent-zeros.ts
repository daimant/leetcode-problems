// Accepted 20 / 20 testcases passed Sergey Pomortsev submitted at Feb 02, 2026 22:51
// Solution Runtime 160 ms Beats 14.81% Analyze Complexity Memory 64.96 MB Beats 33.33%

function validStrings(n: number): string[] {
  const result = []
  const end = 2 ** n

  for (let i = 0; i < end; i++) {
    const curr = i.toString(2).padStart(n, '0')
    if (!i.toString(2).padStart(n, '0').includes('00')) result.push(curr)
  }

  return result
};