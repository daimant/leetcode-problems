/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let numStart = num;
  let i = 1;

  while (i <= numStart / 2) {
    if (numStart % i === 0) num -= i;
    i++;
  }

  return num === 0 && i > 1;
};
