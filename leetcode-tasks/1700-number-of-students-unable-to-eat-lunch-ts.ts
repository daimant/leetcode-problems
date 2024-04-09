// Accepted
// Runtime 53 ms Beats 85.38% of users with TypeScript
// Memory 51.93 MB Beats 27.69% of users with TypeScript

const countStudents = (students: number[], sandwiches: number[]): number => {
  let zeroStud = students.filter(el => el === 0).length
  let oneStud = students.length - zeroStud

  while (students.length) {
    if (students[0] === sandwiches[0]) {
      const types = students.shift()
      sandwiches.shift()

      if (types) oneStud--
      else zeroStud--
    } else students.push(students.shift())

    if (oneStud === 0 && sandwiches[0] === 1 || zeroStud === 0 && sandwiches[0] === 0) break
  }

  return students.length
}
