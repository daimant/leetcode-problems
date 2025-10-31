/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function(salary) {
  return (
    (salary.reduce((acc, curr) => acc + curr) -
      Math.max(...salary) -
      Math.min(...salary)) /
    (salary.length - 2)
  );
};
