/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
  s = s.split('').map(el => el.charCodeAt() - 96).join('');

  let result;

  while (k > 0) {
    s = `${s.split('').reduce((acc, curr) => +acc + +curr)}`;
    result = s;
    k--;
  }

  return result;
};
