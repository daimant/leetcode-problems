"use strict";

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let map = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0]
  ]);
  let count = 0;

  for (let i = 0; i < text.length + 1; i++) {
    if (map.has(text[i])) map.set(text[i], map.get(text[i]) + 1);
  }

  if (map.size < 5 || map.get("l") < 2 || map.get("o") < 2) return 0;
  return Math.min(
    ...[...map].map(e =>
      e[0] === "o" || e[0] === "l" ? Math.trunc(e[1] / 2) : e[1]
    )
  );
};

// версия поиска непрерывногоо повторения слова
// let map = new Map();
//   let count = 0;

//   for(let i = 0; i < text.length + 1; i++) {
//     if (map.size === 7) {
//       map.clear();
//       count++;
//     }
//     if (text[i] === 'b' && !map.has('b')) map.set('b', 1);
//     if (text[i] === 'a' && !map.has('a')) map.set('a', 1);
//     if (text[i] === 'l' && !map.has('l')) { map.set('l', 1); continue; }
//     if (text[i] === 'l' && !map.has('l2')) map.set('l2', 1);
//     if (text[i] === 'o' && !map.has('o')) { map.set('o', 1); continue; }
//     if (text[i] === 'o' && !map.has('o2')) map.set('o2', 1);
//     if (text[i] === 'n' && !map.has('n')) map.set('n', 1);
//     console.log(Array.from(map))
//   }

//   return count;
