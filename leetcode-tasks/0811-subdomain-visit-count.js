"use strict";

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let sessions = new Map();

  for (let i = 0; i < cpdomains.length; i++) {
    let currSession = cpdomains[i].split(" ").reverse();
    if (sessions.has(currSession[0]))
      sessions.set(
        currSession[0],
        sessions.get(currSession[0]) + +currSession[1]
      );
    if (!sessions.has(currSession[0]))
      sessions.set(currSession[0], +currSession[1]);

    let separate = currSession.slice();

    while (separate[0].indexOf(".") !== -1) {
      separate[0] = separate[0]
        .split(".")
        .slice(1)
        .join(".");

      if (sessions.has(separate[0]))
        sessions.set(separate[0], sessions.get(separate[0]) + +separate[1]);
      if (!sessions.has(separate[0])) sessions.set(separate[0], +separate[1]);
    }
  }

  return Array.from(sessions).map(el => el.reverse().join(" "));
};
