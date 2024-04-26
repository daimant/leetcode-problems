// Accepted
// Runtime 53 ms Beats 98.53% of users with TypeScript
// Memory 51.97 MB Beats 63.24% of users with TypeScript

const findLatestTime = (s: string): string => {
  const arr = s.split('')

  if (arr[0] === '?') arr[0] = ( arr[1] === '?' || arr[1] === '0' || arr[1] === '1' ) ? '1' : '0'
  if (arr[1] === '?') arr[1] = ( arr[0] === '0' ) ? '9' : '1'
  if (arr[3] === '?') arr[3] = '5'
  if (arr[4] === '?') arr[4] = '9'

  return arr.join('')
}