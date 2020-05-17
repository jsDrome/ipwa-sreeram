# How do functions and constructors in Javascript differ?

Lets impletemend the Stack data structure in 2 different ways.

## Using a Constructor

    const StackConstructor = function() {
      this.data = {};
      this.count = 0;

      this.push = n => {
        this.data[this.count] = n;
        this.count++;
        return this.count;
      };

      this.pop = () => {
        if(!this.count) return;
        const val = this.data[this.count - 1];
        delete this.data[this.count - 1];
        this.count--;
        return val;
      };

      this.peek = () => {
        if (!this.count) return;
        return this.data[this.count - 1];
      };

      this.size = () => this.count;
    };


## Using a function

    const StackFunction = () => {
      const data = {};
      let count = 0;

      const push = n => {
        data[count] = n;
        count++;
        return count;
      }

      const pop = () => {
        if(!count) return;
        const val = data[count - 1];
        delete data[count - 1];
        count--;
        return val;
      };

      const peek = () => {
        if(!count) return;
        return data[count - 1];
      }

      const size = () => count;

      return { push, pop, peek, size };

    }

## Differences

- The way the functions are invoked

  Constructors are invoked with the `new` keyword. It creates a brand new object.
  All the methods and properties become properties of the new object.

- Value of `this` inside the function and constructor.
  `this` points to the new object when invoked as a constructor. Thats why all the properties and methods become members of the new object.
  Whereas `this` will point to the global namespace, window in a browser, when invoked as a function.

- Private and public members.
  In the Constructor way, all members are public.
  Whereas, in the function way, variables which are defined but not returned, they are private because of closures.