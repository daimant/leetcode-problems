// Accepted
// Runtime 51 ms Beats 92.82% of users with TypeScript
// Memory 51.08 MB Beats 100.00% of users with TypeScript

const sumNumbers = (root: TreeNode | null): number => {
  const open = (tree, parent = "") => {
    if (!tree) return
    if (!tree.left && !tree.right) result += +( parent + tree.val )
    if (tree.left) open(tree.left, parent + tree.val)
    if (tree.right) open(tree.right, parent + tree.val)
  }
  let result = 0
  open(root)
  return result
}