/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  if (!root) return [];

  const check = [root];
  const elements = [root];

  while (check.length) {
    const currEl = check.shift();
    const currL = currEl.left;
    const currR = currEl.right;
    let index;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i] === currEl) index = i;
    }

    if (currR) {
      check.push(currR);
      elements.splice(index + 1, 0, currR);
    }
    if (currL) {
      check.push(currL);
      elements.splice(index, 0, currL);
    }
  }

  return elements.map(el => el.val);
};

// or with recurse
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal2 = function(root) {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
      ]
    : [];
};
