# Closures in Javascript

&nbsp;

## Summary

Lets implement 2 independent counters. An up counter and a down counter. Lets look at the problems we face and their solutions.

Lets create a global variable called counter and a function which will increment it.

    var counter = 0;

    const add = () => {
      counter++;
    };

Lets invoke it 3 times.

    add();
    add();
    add();

At this point, the value of the counter is 3. And it works just fine.

Now, lets implement the down counter in a similar way.

    var counter = 0;

    const subtract = () => {
      counter--;
    };

Lets invoke it 3 times.

    subtract();
    subtract();
    subtract();

At this point, the value of the counter is -3. And it works just fine.

But what happens when both of these functions are in the same application? There is a name collition and both functions having access to counter will be able to change them. This is the first problem. Lets solve this. Lets move the counter variables to the respective functions.

    const add = () => {
      var counter = 0;
      counter++;
    };

    const subtract = () => {
      var counter = 0;
      counter--;
    };

This way, we solve the name collition problem but the output will be 1 and -1 repectively. Because the counter variables are intialized every time. So how do we solve this? What if we do something like this?

    const add = (() => {
      var counter = 0;
      return () => ++counter;
    })();

    const subtract = (() => {
      var counter = 0;
      return () => ++counter;
    })();

We create a function, initialize a local variable called counter and return a function which will increase/decrease this counter. This way, we solve both the problem of polluting the global namespace as well as the initialization issue. This process of a function returning another function but still having access to the outer variables is called as closures.
