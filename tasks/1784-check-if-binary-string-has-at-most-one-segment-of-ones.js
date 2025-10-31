/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = s =>
  !~s.indexOf("0") ? true : !~s.indexOf("1", s.indexOf("0"));
