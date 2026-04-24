// Accepted 582 / 582 testcases passed Sergey Pomortsev submitted at Jan 28, 2026 00:02 Editorial
// Solution Runtime 33 ms Beats 6.15% Analyze Complexity Memory 65.35 MB Beats 67.69%

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let link = head
  while (link.next) {
    if (!link.next) return

    const min = link.val < link.next.val ? link.val : link.next.val
    let maxDivisor = 1
    for (let i = 2; i <= min; i++) {
      if (link.val % i === 0 && link.next.val % i === 0) maxDivisor = i
    }
    link.next = {
      val: maxDivisor,
      next: link.next
    }
    link = link.next.next
  }

  return head
};

// little optimize
// Accepted 582 / 582 testcases passed Sergey Pomortsev submitted at Jan 28, 2026 00:20 Editorial
// Solution Runtime 21 ms Beats 20.00% Analyze Complexity Memory 65.59 MB Beats 44.62%

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors2(head: ListNode | null): ListNode | null {
  let link = head
  while (link.next) {
    if (!link.next) return

    const min = link.val < link.next.val ? link.val : link.next.val
    let maxDivisor = 1
    if (link.val % min === 0 && link.next.val % min === 0) maxDivisor = min
    else {
      for (let i = 2; i <= min; i++) {
        if (link.val % i === 0 && link.next.val % i === 0) maxDivisor = i
      }
    }
    link.next = {
      val: maxDivisor,
      next: link.next
    }
    link = link.next.next
  }

  return head
};

// major optimize. accept Evclid algorithm by finding max common divider
// Accepted 582 / 582 testcases passed Sergey Pomortsev submitted at Jan 28, 2026 17:25 Editorial
// Solution Runtime 1 ms Beats 100.00% Memory 64.22 MB Beats 100.00%

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors3(head: ListNode | null): ListNode | null {
  let link = head
  while(link.next) {
    if (!link.next) return

    let min = Math.min(link.val, link.next.val)
    let maxDivisor = 1

    if (link.val % min === 0 && link.next.val % min === 0) maxDivisor = min
    else {
      let max = Math.max(link.val, link.next.val)
      let tempDiv = max % min

      while (max % min) {
        tempDiv = max % min
        max = min
        min = tempDiv
      }

      maxDivisor = tempDiv
    }

    link.next = {
      val: maxDivisor,
      next: link.next
    }
    link = link.next.next
  }

  return head
};