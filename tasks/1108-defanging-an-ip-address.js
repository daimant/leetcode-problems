"use strict";

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let defIp = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] !== ".") {
      defIp += address[i];
    } else {
      defIp += "[.]";
    }
  }
  return defIp;
};
