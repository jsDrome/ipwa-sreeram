# Hackerrank problems

#### 24 May, 2020

### 1. Balanced brankets

    function isBalanced(s) {
      const complementary = {
        "}": "{",
        "]": "[",
        ")": "("
      };

      let stack = [];

      for (let i = 0; i < s.length; i++) {
        if (complementary[s[i]] && stack[stack.length - 1] === complementary[s[i]])
          stack.pop();
        else stack.push(s[i]);
      }
      return stack.length === 0 ? "YES" : "NO";
    }

### 2. Print linked list in reverse

    function reversePrint(head) {
        if (!head) return;
        console.log(head.data);
        return reversePrint(head.next);
    }

### 3. Delete a node

    function deleteNode(head, position) {
        if (!head) return;
        let pointer = head;
        let prevPointer;
        let i = 0;
        if (position === 0) {
            head = pointer.next;
        } else {
            while (pointer) {
                if (i === position) {
                    prevPointer.next = pointer.next;
                }
                prevPointer = pointer;
                pointer = pointer.next;
                i++;
            }
        }
        return head;
    }


### 4. Insert node at specific position

    function insertNodeAtPosition(head, data, position) {
        if (!head) head = new SinglyLinkedListNode(data);
        else {
            let i = 0;
            let pointer = head;
            let prevPointer;
            while (pointer) {
                if (i === position) {
                    let newNode = new SinglyLinkedListNode(data);
                    newNode.next = pointer;
                    prevPointer.next = newNode;
                }
                prevPointer = pointer;
                pointer = pointer.next;
                i++;
            }
        }
        console.log(head);
        return head;
    }


### 5. Insert node at head of Linked list

    function insertNodeAtHead(head, data) {
        const node = new SinglyLinkedListNode(data);
        node.next = head;
        return node;
    }


### 6. Insert node at tail of Linked list

    function insertNodeAtTail(head, data) {
        if (!head) {
            head = new SinglyLinkedListNode(data);
        } else {
            let pointer = head;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = new SinglyLinkedListNode(data);
        }
        return head;
    }


### 7. Print elements of a Linked list

    function printLinkedList(head) {
      let pointer = head;
      while(pointer) {
          console.log(pointer.data);
          pointer = pointer.next;
      }
    }
