/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(A) {
  const result = [];
  let acc = 0;

  for (let i = 0; i < A.length; i++) {
    acc = (acc * 2 + A[i]) % 5;
    result.push(!acc);
  }

  return result;
};
