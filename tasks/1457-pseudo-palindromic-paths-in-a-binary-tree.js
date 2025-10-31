/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const pseudoPalindromicPaths = function(root) {
  const search = (tree, parents = []) => {
    if (!tree) return;

    const curr = [...parents, tree.val];

    if (!tree.left && !tree.right) arr.push(curr.sort());
    if (tree.left) search(tree.left, curr);
    if (tree.right) search(tree.right, curr);
  };
  const arr = [];
  let count = 0;
  search(root);

  for (let a = 0; a < arr.length; a++) {
    let error = 0;

    for (let i = 0; i < arr[a].length; i++) {
      if (arr[a][i] !== arr[a][i + 1]) error++;
      else if (arr[a][i] === arr[a][i + 1]) i++;
    }
    if (error < 2) count++;
  }

  return count;
};
