// link: http://tinyurl.com/104116116112115058047047108101101116099111100101046099111109047112114111098108101109115047100101115105103110045116105110121117114108
// Accepted 739 / 739 testcases passed Sergey Pomortsev submitted at Feb 08, 2026 21:19
// Solution Runtime 57 ms Beats 15.38% Analyze Complexity Memory 58.88 MB Beats 5.13%

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const arr = []

  for (let i = 0; i < longUrl.length; i++) {
    arr.push(String(longUrl[i].charCodeAt(0)).padStart(3, '0'))
  }

  return `http://tinyurl.com/${arr.join('')}`
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const str = shortUrl.slice(19)
  const arr = []

  for (let i = 0; i < str.length; i += 3) {
    arr.push(str.slice(i, i + 3))
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(Number(arr[i]))
  }

  return arr.join('')
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
