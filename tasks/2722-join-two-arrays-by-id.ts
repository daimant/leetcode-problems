// Accepted
// Runtime 318 ms Beats 80.58%
// Memory 93.36 MB Beats 67.19%

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const obj = {}

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i].id] = arr1[i]
  }
  for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i].id] = (obj[arr2[i].id]) ? {...obj[arr2[i].id], ...arr2[i]} : arr2[i]
  }

  return Object.values(obj)
}
