"use strict";

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let uniqueEmail = new Set();

  for (let i = 0; i < emails.length; i++) {
    let currEmail = emails[i];
    const at = currEmail.lastIndexOf("@");

    for (let j = 0; j < at; j++) {
      if (currEmail[j] === ".") {
        currEmail = currEmail.slice(0, j) + " " + currEmail.slice(j + 1);
      } else if (currEmail[j] === "+") {
        currEmail = currEmail.slice(0, j) + currEmail.slice(at);
        break;
      }
    }

    uniqueEmail.add(currEmail.replace(/ /g, ""));
  }

  return [...uniqueEmail].length;
};
