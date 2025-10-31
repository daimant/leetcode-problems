/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  secret = [...secret];
  guess = [...guess];

  let bulls = 0,
    cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      secret.splice(i, 1);
      guess.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    const search = secret.indexOf(guess[i]);

    if (~search) {
      cows++;
      secret.splice(search, 1);
    }
  }

  return `${bulls}A${cows}B`;
};
