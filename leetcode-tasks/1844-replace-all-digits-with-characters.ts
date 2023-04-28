// Wrong Answer 11 / 99 testcases passed

const replaceDigits = (s: string): string => s
  .split('')
  .map((el, i, arr) => i > 0 && +el ? String.fromCharCode(arr[i - 1].charCodeAt(0) + +el) : el)
  .join('')
