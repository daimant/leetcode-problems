/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function(IP) {
  IP = IP.toLowerCase();
  const ip4 = IP.split(".");
  const ip6 = IP.split(":");

  if (
    (ip4.length !== 4 && ip6.length !== 8) ||
    (IP.includes(":") && IP.includes(".")) ||
    IP.includes("..") ||
    IP.includes("::") ||
    IP[0] === "." ||
    IP[0] === ":" ||
    IP[IP.length - 1] === "." ||
    IP[IP.length - 1] === ":" ||
    (IP.includes(".") && IP.toLowerCase().includes("e"))
  )
    return "Neither";

  if (
    ip4.length === 4 &&
    ip4.every(el => el === Number(el).toString() && +el >= 0 && +el <= 255)
  )
    return "IPv4";
  if (
    ip6.length === 8 &&
    ip6.every(el => {
      const curr = parseInt(el, 16);
      if (
        el.length > 0 &&
        el.length <= 4 &&
        curr >= 0 &&
        curr <= 65535 &&
        (Number(el) ||
          [...el].every(l => isFinite(l) || (l >= "a" && l <= "f")))
      )
        return true;
    })
  )
    return "IPv6";

  return "Neither";
};
