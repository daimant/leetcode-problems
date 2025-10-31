/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0,
      right = n;

    while (1) {
      const middle = Math.ceil(left + (right - left) / 2),
        shot = isBadVersion(middle);

      if (left === right - 1) return right;
      else if (!shot) left = middle;
      else if (shot) right = middle;
    }
  };
};
