// Wrong Answer 11 / 99 testcases passed

const replaceDigits = (s: string): string => s
  .split('')
  .map((el, i, arr) => i > 0 && +el ? String.fromCharCode(arr[i - 1].charCodeAt(0) + +el) : el)
  .join('')

// Runtime 70 ms Beats 32.26% Memory 44.8 MB Beats 12.90%

const replaceDigits2 = (s: string): string => s
  .split('')
  .map((el, i, arr) => i > 0 && !isNaN(+el) ? String.fromCharCode(arr[i - 1].charCodeAt(0) + +el) : el)
  .join('')

// Runtime 46 ms Beats 100% Memory 45.1 MB Beats 9.68%

const replaceDigits3 = (s: string): string => s
  .split('')
  .map((el, i, arr) => i % 2 ? String.fromCharCode(arr[i - 1].charCodeAt(0) + +el) : el)
  .join('')
