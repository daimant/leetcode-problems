// Accepted 17 / 17 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 11:31
// Solution Runtime 10 ms Beats 28.86% Analyze Complexity Memory 74.08 MB Beats 68.86%

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

function balanceBST(root: TreeNode | null): TreeNode | null {
  const set = new Set<number>()
  const checkNodes = (link: TreeNode | null) => {
    if (!link) return

    set.add(link.val)
    if (link.left) checkNodes(link.left)
    if (link.right) checkNodes(link.right)
  }
  checkNodes(root)

  const arr = Array.from(set).sort((a, b) => a - b)
  const head = new TreeNode()
  const rebuildTree = (link: TreeNode | null, start: number, end: number) => {
    if (!link) return

    if (end - start >= 2) {
      const currIndex = Math.trunc((end + 1 - start) / 2) + start
      link.val = arr[currIndex]

      link.left = new TreeNode()
      link.right = new TreeNode()
      rebuildTree(link.left, start, currIndex - 1)
      rebuildTree(link.right, currIndex + 1, end)
    } else {
      link.val = arr[start]
      if (end !== start) link.right = new TreeNode(arr[end])
    }
  }
  rebuildTree(head, 0, arr.length - 1)

  return head
};