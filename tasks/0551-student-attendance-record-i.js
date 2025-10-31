"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !(
    s.replace(/A/g, "").length < s.length - 1 ||
    s.replace(/LLL/g, "").length !== s.length
  );
};
