/**
 * @param {string} w
 * @return {boolean}
 */
var detectCapitalUse = function(w) {
  return (
    w.replace(/[a-z]/g, "") === "" ||
    w.replace(/[A-Z]/g, "") === "" ||
    w.replace(/^[A-Z][a-z]+/, "") === ""
  );
};
