# Queues

    function Queue() {
      this.data = [];

      this.enqueue = val => {
        this.data.push(val);
        return true;
      }

      this.dequeue = () => {
        this.data.shift();
        return true;
      }

      this.size = () => this.data.length;

      this.front = () => this.data[0];

      this.isEmpty = () => !this.data.length;
    }

## Priority queues

    function PriorityQueue() {
      this.data = [];

      this.enqueue = ({ val, priority }) => {
        const index = this.data.findIndex(obj => obj.priority < priority);
        if(index && index !== -1) {
          this.data.splice(index, 0, { val, priority });
        }
        else this.data.push({ val, priority });
      };

      this.size = () => this.data.length;

      this.front = () => this.data[0];

      this.isEmpty = () => !this.data.length;
    }