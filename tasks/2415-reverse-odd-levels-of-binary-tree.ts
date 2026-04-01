// Accepted 57 / 57 testcases passed Sergey Pomortsev submitted at Feb 08, 2026 20:20
// Solution Runtime 9 ms Beats 41.03% Analyze Complexity Memory 84.12 MB Beats 61.54%

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const map = new Map()

  checkTreeLevels(root, 0, 1, map)

  Array.from(map.keys()).forEach((key) => {
    map.set(key, map.get(key).reverse())
  })

  replaceTreeVals(root, 0, 1, map)

  return root
};

const checkTreeLevels = (link: TreeNode | null, level: number, position: number, map: Map<number, number[]>) => {
  if (!link) return

  if (level % 2) {
    let arr = []
    if (map.has(level)) arr = map.get(level)
    arr[position - 1] = link.val
    map.set(level, arr)
  }

  checkTreeLevels(link.left, level + 1, (position * 2) - 1, map)
  checkTreeLevels(link.right, level + 1, position * 2, map)
}

const replaceTreeVals = (link: TreeNode | null, level: number, position: number, map: Map<number, number[]>) => {
  if (!link) return

  if (level % 2) link.val = map.get(level)[position - 1]

  replaceTreeVals(link.left, level + 1, (position * 2) - 1, map)
  replaceTreeVals(link.right, level + 1, position * 2, map)
}

// optimize

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const map = new Map()

  checkTreeLevels(root, 0, 1, map)
  replaceTreeVals(root, 0, 1, map)

  return root
};

const checkTreeLevels = (link: TreeNode | null, level: number, position: number, map: Map<number, number[]>) => {
  if (!link) return

  if (level % 2) {
    let arr = []
    if (map.has(level)) arr = map.get(level)
    arr[position - 1] = link.val
    map.set(level, arr)
  }

  checkTreeLevels(link.left, level + 1, (position * 2) - 1, map)
  checkTreeLevels(link.right, level + 1, position * 2, map)
}

const replaceTreeVals = (link: TreeNode | null, level: number, position: number, map: Map<number, number[]>) => {
  if (!link) return

  if (level % 2) link.val = map.get(level)[map.get(level).length - 1 - (position - 1)]

  replaceTreeVals(link.left, level + 1, (position * 2) - 1, map)
  replaceTreeVals(link.right, level + 1, position * 2, map)
}