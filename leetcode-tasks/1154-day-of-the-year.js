// Accepted
// Runtime 48 ms Beats 100.00% of users with JavaScript
// Memory 33.87 MB Beats 100.00% of users with JavaScript

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  return (new Date(date) - new Date(date.slice(0, 4)) + 86400000) / 86400000;
};
