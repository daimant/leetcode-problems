// Runtime 65 ms Beats 76.32% Memory 43.3 MB Beats 60.53%

const categorizeBox = (l: number, w: number, h: number, m: number): string => {
  let bulky = ''
  let heavy = ''

  if ([l, w, h, m].some(el => el >= 10 ** 4) || l * w * h >= 10 ** 9) bulky = 'Bulky'
  if (m >= 100) heavy = 'Heavy'

  return (bulky && heavy && 'Both') || bulky || heavy || 'Neither'
}
