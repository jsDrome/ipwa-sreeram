# Linked List algorithms

#### 31 May, 2020

## Iteration

    const iterate = head => {
      if (!head) return;
      let pointer = head;
      while (pointer) {
        pointer = pointer.next;
      }
    };

## Previous node

    const iterate = head => {
      if (!head) return;
      let pointer = head;
      let prevPointer;
      while (pointer) {
        prevPointer = pointer;
        pointer = pointer.next;
      }
    }

## Print linked list

https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

    function printLinkedList(head) {
        if (!head) return;
        let pointer = head;
        while (pointer) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
    }

## Print linked list in reverse

https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse

    function reversePrint(head) {
        if (!head) return;
        let pointer = head;
        reversePrint(pointer.next);
        console.log(pointer.data);
    }

## Insert node at head

https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list

    function insertNodeAtHead(head, data) {
        const node = new SinglyLinkedListNode(data);
        if (!head) return node;
        node.next = head;
        return node;
    }

## Insert node at tail

https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list

    function insertNodeAtTail(head, data) {
        const node = new SinglyLinkedListNode(data);
        if (!head) return node;
        let pointer = head;
        while (pointer.next) {
            pointer = pointer.next;
        }
        pointer.next = node;
        return head;
    }

## Insert node at specific position in a linked list

https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

    function insertNodeAtPosition(head, data, position) {
        const node = new SinglyLinkedListNode(data);
        if (!head) return node;
        let i = 0;
        let pointer = head;
        let prevPointer;
        while (pointer) {
            if (i === position) {
                if (i === 0) {
                    node.next = head;
                    return node;
                }
                prevPointer.next = node;
                node.next = pointer;
            }
            prevPointer = pointer;
            pointer = pointer.next;
            i++;
        }
        return head;
    }

## Delete node in linked list

https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list

    function deleteNode(head, position) {
        if (!head) return;
        let pointer = head;
        let i = 0;
        let prevNode;
        while (pointer) {
            if (i === position) {
                if (i === 0) return head.next;
                prevNode.next = pointer.next;
                return head;
            }
            prevNode = pointer;
            pointer = pointer.next;
            i++;
        }
        return head;
    }

## Delete nth node from tail in linked list

    const deleteNode = (head, pos) => {
      if (!head) return;
      let i = 0;
      const delete = (node, prevNode) => {
        let pointer = node;
        pointer.next && delete(pointer.next, pointer);
        if (i === pos) {
          if (prevNode) prevNode.next = pointer.next;
          else return null;
        }
        i++;
      }
      delete(head);
    };

## Delete duplicate values from sorted linked list

    function removeDuplicates(head) {
        if (!head) return;
        if (!head.next) return head;
        let p1 = head;
        let p2 = head.next;
        while (p2) {
            if (p2.data === p1.data) p1.next = p2.next;
            else p1 = p1.next;
            p2 = p2.next;
        }
        return head;
    }


## Reverse a linked list

https://www.hackerrank.com/challenges/reverse-a-linked-list

    function reverse(head) {
        let tail = null;
        const r = (node, prev = null) => {
            node.next && r(node.next, node);
            if (!tail) tail = node;
            node.next = prev;
        }
        r(head);
        return tail;
    }

## Merge 2 sorted linked lists

https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists

    function mergeLists(head1, head2) {
        let p1 = head1;
        if (!head2) return head1;
        while(p1) {
            let p2 = head2;
            let prevNode;
            while (p2) {
                if (p2.data >= p1.data) break;
                prevNode = p2;
                p2 = p2.next;
            }
            const newNode = new SinglyLinkedListNode(p1.data);
            if (prevNode) {
                prevNode.next = newNode;
                newNode.next = p2;
            } else {
                newNode.next = p2;
                head2 = newNode;
            }
            p1 = p1.next;
        }
        return head2;
    }

## Compare 2 linked lists

https://www.hackerrank.com/challenges/compare-two-linked-lists

    function CompareLists(llist1, llist2) {
        if (!llist1 && !llist2) return true;
        if ((!llist1 && llist2) || (!llist2 && llist1)) return false;
        let p1 = llist1;
        let p2 = llist2;
        while (p1) {
            if (!p2) return false;
            if (p1.data !== p2.data) return false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return true;
    }

## Detect cycle in a linked list

https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

    function hasCycle(head) {
        if (!head) return false;

        let p1 = head;
        let p2 = head;

        while (p1.next && p2.next) {
            p1 = p1.next;
            p2 = p2.next.next;
            if(p1 === p2) return true;
        }
        return false;
    }

## Add 2 numbers

https://leetcode.com/problems/add-two-numbers/

    const addTwoNumbers = (l1, l2) => {
      let temp = 0;
      let carry = 0;
      let digit = 0;
      let sum;

      const addToSum = num => {
        if (!sum) sum = new ListNode(num);
        else {
          let pointer = sum;
          while(pointer.next) {
            pointer = pointer.next;
          }
          pointer.next = new ListNode(num);
        }
      };

      while (l1 || l2) {
        temp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(temp/10);
        digit = temp % 10;
        addToSum(digit);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
      }
        if (carry) addToSum(carry);
        return sum;
    };

## Delete duplicate values from unsorted linked list
