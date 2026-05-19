// Accepted 506 / 506 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 20:05
// Solution Runtime 35 ms Beats 100.00% Analyze Complexity Memory 56.94 MB Beats 11.11%

const checkTwoChessboards = (c1: string, c2: string): boolean => {
  const [[c1S, c1N], [c2S, c2N]] = [c1, c2].map(el => [el[0].charCodeAt(0), +el[1]]);
  const c1IsW = Boolean((c1S % 2 && c1N % 2 === 0) || (c1S % 2 === 0 && c1N % 2));
  const c2IsW = Boolean((c2S % 2 && c2N % 2 === 0) || (c2S % 2 === 0 && c2N % 2));
  return (c1IsW && c2IsW) || (!c1IsW && !c2IsW);
};