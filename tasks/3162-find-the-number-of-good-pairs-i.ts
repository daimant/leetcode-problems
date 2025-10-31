// Accepted
// Runtime 63 ms Beats 79.49% of users with TypeScript
// Memory 51.87 MB Beats 79.49% of users with TypeScript


  const numberOfPairs2 = (nums1: number[], nums2: number[], k: number): number => {
  let result = 0

  nums2.forEach(el => {
    el *= k
    nums1.forEach(elIn => {
      if (elIn % el === 0) result++
    })
  })

  return result
}
