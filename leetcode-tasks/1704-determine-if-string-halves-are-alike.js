/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = s =>
  s.slice(0, s.length / 2).replace(/[^aeiou]/gi, "").length ===
  s.slice(s.length / 2).replace(/[^aeiou]/gi, "").length;
