// Accepted
// Solution Runtime 80 ms Beats 5.06% of users with JavaScript
// Memory 38.54 MB Beats 100.00% of users with JavaScript

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function(students, sandwiches) {
  let zeroStud = students.filter(el => el === 0).length;
  let oneStud = students.length - zeroStud;

  while (students.length) {
    if (students[0] === sandwiches[0]) {
      const types = students.shift();
      sandwiches.shift();

      if (types) oneStud--;
      else zeroStud--;
    } else students.push(students.shift());

    if (
      (oneStud === 0 && sandwiches[0] === 1) ||
      (zeroStud === 0 && sandwiches[0] === 0)
    )
      break;
  }

  return students.length;
};
