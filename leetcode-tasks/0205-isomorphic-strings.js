"use strict";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapS = new Map();
  let mapT = new Map();

  s = s.split("");
  t = t.split("");

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i]) === false) {
      mapS.set(s[i], i);
      s[i] = i;
    }

    if (mapS.has(s[i]) === true) {
      s[i] = mapS.get(s[i]);
    }

    if (mapT.has(t[i]) === false) {
      mapT.set(t[i], i);
      t[i] = i;
    }

    if (mapT.has(t[i]) === true) {
      t[i] = mapT.get(t[i]);
    }
  }

  return s.join("") === t.join("");
};

//   s = s.split('');
//   t = t.split('');
//   for (let i = 0; i < s.length; i++) {
//     if (Number.isInteger(s[i]) === false) {
//       for (let j = i + 1; j < s.length; j++) {
//         if (s[j] === s[i]) s[j] = i;
//       }
//       s[i] = i;
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (Number.isInteger(t[i]) === false) {
//       for (let j = i + 1; j < t.length; j++) {
//         if (t[j] === t[i]) t[j] = i;
//       }
//       t[i] = i;
//     }
//   }

//   return s.join('') === t.join('');
