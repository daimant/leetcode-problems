/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.set = new Set();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.set.add(word);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.set.has(word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if (this.set.has(prefix)) return true;

  outer: for (let word of this.set) {
    if (prefix[0] !== word[0]) continue;
    else {
      for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] !== word[i]) continue outer;
      }
    }
    return true;
  }

  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
