// Accepted 262 / 262 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 18:22
// Solution Runtime 1 ms Beats 100.00% Analyze Complexity Memory 58.01 MB Beats 50.00%

function minMovesToSeat(seats: number[], students: number[]): number {
  let result = 0

  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)

  seats.forEach((el, i) => {
    result += Math.abs(students[i] - el)
  })

  return result
};