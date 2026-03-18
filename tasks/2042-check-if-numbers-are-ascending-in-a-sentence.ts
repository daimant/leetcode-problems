// Accepted 98 / 98 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 19:01
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 53.83 MB Beats 80.95%

const areNumbersAscending = (s: string): boolean => {
  const arr = s.split(' ').map(el => +el).filter(el => el);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }

  return true;
}