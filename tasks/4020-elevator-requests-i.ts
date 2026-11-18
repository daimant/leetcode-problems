// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Nov 17, 2026 16:57
// Solution Runtime 0 ms Beats 100.00% Memory 61.43 MB Beats 9.68%

function elevatorRequests(n: number, reqs: number[]): number {
  let result = 0;
  let curr = 0;

  reqs.forEach(el => {
    result += Math.abs(el - curr)
    curr = el
  })

  return result;
};