# Cracking the Coding Interview solutions

#### 24 May, 2020

## 2.1 Remove dups in sorted linked list

    var deleteDuplicates = function(head) {
        if (!head) return null;

        let p1 = head;
        let p2 = head.next;

        while (p2) {
            if (p2.val === p1.val) p1.next = p2.next;
            else p1 = p1.next;
            p2 = p2.next;
        }

        return head;
    };

## 2.2 Kth to last element in a Linked list

    var findElement = function(head) {
      let i = 0;
      const traverse = node => {
        node.next && traverse(node.next);
        i++;
        if(i === k) return node.val;
      }
      traverse(head);
    };
