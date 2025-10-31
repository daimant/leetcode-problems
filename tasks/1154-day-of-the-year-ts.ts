// Accepted
// Runtime 126 ms Beats 100.00% of users with TypeScript
// Memory 59.30 MB Beats 65.52% of users with TypeScript

const dayOfYear = (date: string): number => (+new Date(date) - +new Date(date.slice(0,4)) + 86400000) / 86400000;