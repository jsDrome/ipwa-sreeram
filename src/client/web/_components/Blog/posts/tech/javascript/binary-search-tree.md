# Binary Search Tree


    function Node(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }

    function BST() {
      this.root = null;

      this.add = data => {
        if(!this.root) {
          this.root = new Node(data);
          return;
        }

        const search = (node, data) => {
          if (data < node.data) {
            if(!node.left) node.left = new Node(data);
            else search(node.left, data);
          } else if (data > node.data) {
            if(!node.right) node.right = new Node(data);
            else search(node.right, data);
          }
        };

        search(this.root, data);
      };

      findMin = () => {
        if(!this.root) return null;

        let current = this.root;
        while(current.left) {
          current = current.left;
        }
        return current.data;
      }

      findMax = () => {
        if(!this.root) return null;

        let current = this.root;
        while(current.right) {
          current = current.right;
        }
        return current.data;
      }

      find = data => {
        let current = this.root;

        while(current) {
          if(current.data === data) return current;
          if(current.left < data) current = current.left;
          if(current.right > data) current = current.right;
        }
        return null;
      }

      isPresent = data => {
        let current = this.root;

        while(current) {
          if(current.data === data) return true;
          if(current.left < data) current = current.left;
          if(current.right > data) current = current.right;=
        }
        return false;
      }

      this.remove = data => {
        if(!this.root) return;
        this.root = searchRemove(this.root, data);

        const searchRemove = (node, data) => {

          if (node.data < data) node.left = searchRemove(node.left, data);
          if (node.data > data) node.right = searchRemove(node.right, data);

          if (node.data === data) {
            if(!node.left && !node.right) {
              return null;
            }
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let subnode = node.right;
            while (subnode.left) {
              subnode = subnode.left;
            }

            node.data = subnode.data;
            node.right = searchRemove(node.right, subnode.data);
          }

          return node;
        }
      }

      this.inOrderTraversal = () => {

      }

      this.preOrderTraversal = () => {

      }

      this.postOrderTraversal = () => {

      }
    }