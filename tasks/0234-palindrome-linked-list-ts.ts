// Accepted
// Runtime 139 ms Beats 64.42% of users with TypeScript
// Memory 77.78 MB Beats 28.27% of users with TypeScript

const isPalindrome = (head: ListNode | null): boolean => {
  let arr = [];

  while (head) {
    if (head.val !== null) {
      arr.push(head.val)
    }
    head = head.next
  }
  return JSON.stringify(arr) === JSON.stringify(arr.reverse());
}