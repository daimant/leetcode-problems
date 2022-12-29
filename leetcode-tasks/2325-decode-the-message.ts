// Runtime 85 ms Beats 61.82% Memory 44.7 MB Beats 100%

const decodeMessage = (key: string, message: string): string => {
  const dict = []

  key.split('').forEach(el => {
    if (!dict.includes(el) && el !== ' ') dict.push(el)
  })

  return message.split('').map((el: string) => el === ' ' ? el : String.fromCharCode(97 + dict.indexOf(el))).join('')
}
