// Accepted
// Runtime 37 ms Beats 99.85% of users with TypeScript
// Memory 51.18 MB Beats 71.65% of users with TypeScript

const lengthOfLastWord = (s: string) => {
  const str = s.split(" ")

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "" || str[i] === " ") {
      str.splice(i, 1)
      i--
    }
  }

  return str.length < 1 ? 0 : str[str.length - 1].length
}