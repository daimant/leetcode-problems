// Accepted 105 / 105 testcases passed Sergey Pomortsev submitted at Feb 11, 2026 10:46
// Solution Runtime 9 ms Beats 44.44% Analyze Complexity Memory 64.89 MB Beats 11.11%

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

class Tree {
  val: number
  parent: Tree | null
  left: Tree | null
  right: Tree | null

  constructor(val?: number, parent?: Tree | null, left?: Tree | null, right?: Tree | null) {
    this.val = (val === undefined ? 0 : val)
    this.parent = (parent === undefined ? null : parent)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function recoverFromPreorder(traversal: string): Tree | null {
  const firstHypIndex = traversal.indexOf('-')

  if (firstHypIndex === -1) return new Tree(+traversal)

  const head = new Tree(Number(traversal.slice(0, firstHypIndex)))
  let link = head
  let accLevel = 0

  let i = firstHypIndex;
  while (i < traversal.length) {
    let currLevel = 0

    for (let j = i; j < traversal.length; j++) {
      if (traversal[j] === '-') currLevel++
      else break
    }
    const nextHyp = traversal.indexOf('-', i + currLevel)
    const currNum = nextHyp !== -1 ? traversal.slice(i + currLevel, nextHyp) : traversal.slice(i + currLevel)

    i = nextHyp

    if (accLevel !== currLevel - 1) {
      while (accLevel !== currLevel - 1) {
        link = link.parent
        accLevel--
      }

      if (!link) link = head
    }

    if (!link.left) {
      link.left = new Tree(Number(currNum), link)
      link = link.left
    } else {
      link.right = new Tree(Number(currNum), link)
      link = link.right
    }
    accLevel = currLevel

    if (nextHyp === -1) break
  }

  const clearArrParents = (node: Tree | null) => {
    if (!node) return
    delete node.parent
    clearArrParents(node.left)
    clearArrParents(node.right)
  }
  clearArrParents(head)

  return head
};
