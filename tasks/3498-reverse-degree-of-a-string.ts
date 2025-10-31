const reverseDegree = (s: string): number => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += (Math.abs(s[i].charCodeAt(0) - 97 - 26)) * (i + 1);
  }

  return result;
};

// more readable, but slower
const reverseDegree1 = (s: string): number => {
  let result = 0;

  Array.from(s).forEach((el, i) => {
    result += (Math.abs(s[i].charCodeAt(0) - 97 - 26)) * (i + 1);
  })

  return result;
};
