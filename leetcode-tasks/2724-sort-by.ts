// Accepted
// Runtime 113 ms Beats 98.25%
// Memory 67.32 MB Beats 12.48%

// @ts-ignore
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => arr.sort((a, b) => fn(a) - fn(b))
