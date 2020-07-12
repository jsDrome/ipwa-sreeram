# Binary Search tree algorithms

#### 02 June, 2020

## Insert node

https://www.hackerrank.com/challenges/binary-search-tree-insertion

    function insert(root, data) {
      const searchTree = node => {
        if (data < node.data) {
          if (!node.left) node.left = new Node(data);
          else return searchTree(node.left);
        }
        if (data > node.data) {
          if (!node.right) node.right = new Node(data);
          else return searchTree(node.right);
        }
      }
      searchTree(root);
    }


## Find minimum

    function findMin(root) {
      if (!root) return null;
      let pointer = root;
      while (pointer.left) pointer = pointer.left;
      return pointer.data;
    }

## Find maximum

    function findMax(root) {
      if (!root) return null;
      let pointer = root;
      while (pointer.right) pointer = pointer.right;
      return pointer.data;
    }

## isPresent

    function isPresent(root, data) {
      const searchTree = node => {
        if (!node) return false;
        if (data === node.data) return true;
        if (data < node.data) return searchTree(node.left);
        if (data > node.data) return searchTree(node.right);
        return false;
      }
      return searchTree(root);
    }

## Remove Node

    function remove(root, data) {
      const remove => (root, data) => {
        if (!node) return;
        if (node.data === data) {
          if (!node.left && !node.right) return null;
          if (!node.left) return node.right;
          if (!node.right) return node.left;
          else {
            let tempNode = node.right;
            while (tempNode.left) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = remove(node.right, tempNode.data);
            return node;
          }

        } else if (data < node.data) {
          node.left = remove(node.left, data);
        } else {
          node.right = remove(node.right, data);
        }
      };

      root = remove(root, data);
    }

## Preorder traversal/Depth first search

https://www.hackerrank.com/challenges/tree-preorder-traversal

    function preOrder (root) {
      if (!root) return null;
      const values = [];
      const traverse = node => {
        values.push(node.data);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
      };
      traverse(root);
      return values;
    }

## Postorder traversal

https://www.hackerrank.com/challenges/tree-postorder-traversal

    function postOrder (root) {
      const values = [];
      const traverse = node => {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        values.push(node.data);
      }
      traverse(root);
      return values;
    }

## Inorder traversal

https://www.hackerrank.com/challenges/tree-inorder-traversal

    function inOrder (root) {
      const values = [];
      const traverse = node => {
        node.left && traverse(node.left);
        values.push(node.data);
        node.right && traverse(node.right);
      }
      traverse(root);
      return values;
    }

## Level order traversel/Breadth first search

https://www.hackerrank.com/challenges/tree-level-order-traversal

    function levelOrder(root) {
      if (!root) return null;
      const values = [];
      const queue = [];
      queue.push(root);

      while (q.length) {
        const node = q.shift();
        values.push(node.data);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      return values;
    }


## Average at each level of a BST

    function average = root => {
      if (!root) return null;

      let data = {};

      const collect = (node, data, depth = 0) {
        if (data[depth]) {
          data[depth][0] += node.data;
          data[depth][1]++;
        } else {
          data[depth] = [node.data, 0];
        }
        node.left && collect(node.left, data, depth++);
        node.right && collect(node.right, data, depth++);
      };

      collect(root, data);

      let result = [];
      for (let i in data) {
        result.push(data[i][0]/data[i][1]+1);
      }
      // [4, 8, 6, 6, 2]
      return result;
    }

## Maximum depth of BST

    var maxDepth = function(root) {
        if (!root) return 0;
        let d = 1;
        const traverse = (node, depth = 1) => {
            if (depth > d) d = depth;
            node.left && traverse(node.left, depth+1);
            node.right && traverse(node.right, depth+1);
        };
        traverse(root);
        return d;
    };

## Validate BST

    var isValidBST = function(root) {
        if (!root) return true;
        let values = [];
        let ret = true;
        const traverse = node => {
            node.left && traverse(node.left);
            if (values[values.length - 1] >= node.val) ret = false;
            values.push(node.val);
            node.right && traverse(node.right);
        };

        traverse(root);
        return ret;
    };


## BST Iterator class

    const BSTIterator = class {
        constructor(root) {
            this.result = [];
            this.index = 0;
            if (!root) return;

            const traverse = node => {
                node.left && traverse(node.left);
                this.result.push(node.val);
                node.right && traverse(node.right);
            };
            traverse(root);
        }
    };

    BSTIterator.prototype.next = function() {
        return this.result[this.index++];
    };

    BSTIterator.prototype.hasNext = function() {
        return !!this.result[this.index] || this.result[this.index] === 0;
    };
