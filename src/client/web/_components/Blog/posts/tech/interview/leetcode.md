# Leetcode Programs

&nbsp;

    /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */
    /**
    * @param {ListNode} head
    * @param {number} n
    * @return {ListNode}
    */

### Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

    var deleteNode = function(node) {
        console.log(node);
        node.val = node.next.val;
        node.next = node.next.next;
    };

### Given a linked list, remove the n-th node from the end of list and return its head.

    var removeNthFromEnd = function(head, n) {
      let i = 1;
      let prev = head;
      const traverse = (node, prev) => {
        node.next && traverse(node.next, node);
        if (i === n) {
            if (i === 1) {
                if (node === head) {
                    head = null;
                    return;
                }
                prev.next = null;
            } else {
                node.val = node.next.val;
                node.next = node.next.next;
            }
        }
        i++;
      }
      traverse(head, prev);
      return head;
    };

