// Accepted
// Runtime 43 ms Beats 98.27%
// Memory 51.67 MB Beats 66.21%

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

const isEmpty = (obj: Obj): boolean => JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]'
