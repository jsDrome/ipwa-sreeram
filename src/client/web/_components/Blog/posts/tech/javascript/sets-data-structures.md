# An insight into Sets in JavaScript

Methods in the dataStructure: has, values, add, remove, size, union, intersection, difference, subset.

    function MySet() {
      this.data = {};
      this.count = 0;

      this.has = val => !!this.data[val];

      this.values = () => this.data;

      this.add = val => {
        if (!this.has(val)) {
          this.data[val] = val;
          this.count++
          return true;
        }
        return false;
      };

      this.remove = val => {
        if (this.has(val)) {
          delete this.data[val];
          this.count--;
          return true;
        }
        return false;
      };

      this.size = () => this.count;

      /* not in ES6 */

      this.union = givenSet => {
        let unionSet = new MySet();
        let firstSetArr = this.values();
        let secondSetArr = givenSet.values();

        for (let val in firstSetArr) {
          unionSet.add(val);
        }
        for (let val in secondSetArr) {
          unionSet.add(val);
        }

        return unionSet;
      };

      this.intersection = givenSet => {
        let interSectionSet = new MySet();
        let secondSetArr = givenSet.values();

        for (let val in secondSetArr) {
          if (this.has(val))
            interSectionSet.add(val);
        }

        return interSectionSet;

      };

      this.difference = givenSet => {

        let differenceSet = new MySet();
        let firstSetArr = this.values();
        let secondSetArr = givenSet.values();

        for (let val in firstSetArr) {
          if (!givenSet.has(val)) {
            differenceSet.add(val);
          }
        }

        for (let val in secondSetArr) {
          if (!this.has(val)) {
            differenceSet.add(val);
          }
        }

        return differenceSet;
      };

      this.subSet = givenSet => {
        const secondSetArr = givenSet.values();

        for (let val in secondSetArr) {
          if (!this.has(val)) return false;
        }
        return true;
      }

    }