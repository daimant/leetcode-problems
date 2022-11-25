// Runtime: 62 ms, faster than 98.15% of TypeScript online submissions for Determine if Two Events Have Conflict.
// Memory Usage: 43.2 MB, less than 48.15% of TypeScript online submissions for Determine if Two Events Have Conflict.

const haveConflict = (event1: string[], event2: string[]): boolean => !(event1[1].replace(/:/, '') < event2[0].replace(/:/, '') || event2[1].replace(/:/, '') < event1[0].replace(/:/, ''))
