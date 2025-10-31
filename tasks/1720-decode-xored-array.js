/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  const decoded = [first, ...encoded];
  const { length } = decoded;

  for (let i = 1; i < length; i++) decoded[i] = decoded[i] ^ decoded[i - 1];

  return decoded;
};
