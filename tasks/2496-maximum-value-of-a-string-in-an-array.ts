// Runtime 67 ms Beats 100% Memory 43.3 MB Beats 57.89%

const maximumValue = (strs: string[]): number => strs.reduce((acc, curr) =>
  !Number.isNaN(Number(curr)) && Number(curr) > acc
    ? Number(curr)
    : Number.isNaN(Number(curr)) && curr.length > acc
      ? curr.length
      : acc, 0)
