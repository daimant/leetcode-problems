// Runtime 85 ms Beats 61.82% Memory 44.7 MB Beats 100%

const decodeMessage = (key: string, message: string): string => {
  const dict = []

  key.split('').forEach(el => {
    if (!dict.includes(el) && el !== ' ') dict.push(el)
  })

  return message.split('').map((el: string) => el === ' ' ? el : String.fromCharCode(97 + dict.indexOf(el))).join('')
}

// Runtime 74 ms Beats 87.27% Memory 45.1 MB Beats 76.36%

const decodeMessage2 = (key: string, message: string): string => {
  const dict = []

  key.split('').forEach(el => {
    if (!dict.includes(el) && el !== ' ') dict.push(el)
  })

  dict.length = 26

  const map = new Map(dict.map((el, i) => [el, i]))

  return message.split('').map((el: string) =>  el === ' ' ? el : String.fromCharCode(97 + map.get(el))).join('')
}

// Runtime 67 ms Beats 96.36% Memory 45.4 MB Beats 61.82%
