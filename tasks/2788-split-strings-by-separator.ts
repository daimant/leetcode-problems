// Runtime 97ms Beats 55.00% of users with TypeScript
// Memory 49.74MB Beats 28.75% of users with TypeScript

const splitWordsBySeparator = (words: string[], separator: string): string[] => words.map(word => word.split(separator)).flat(2).filter(word => word)