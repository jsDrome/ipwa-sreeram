# Prototypes

    Array.prototype.print = function() {
      console.log(this);
    };

### Program to check if a string is unique

    String.prototype.isUnique = function() {
      return new Set(this).size === this.length;
    };

    console.log("abcdef".isUnique());

## Call and Apply

    const a = [1, 2];
    const b = [3, 4];

    a.print();
    a.print.call(b, 'a');
    a.print.apply(b, ['a']);

## Implement Array.prototype.isArray

    const isArray = item => Object.prototype.toString.call(item) === '[object Array]';

## Implement Array.prototype.flat

    const flat = arr => {
      let result = [];
      const isArray = item => Object.prototype.toString.call(item) === '[object Array]';

      const flatten = arr => {
        arr.forEach(item => {
          if (item) {
            if(!isArray(item)) result.push(item);
            else flatten(item);
          }
        });
      };

      flatten(arr);
      return result;
    };

    const arr = [1, [[2], 3, 4, null], null, [5]];

    console.log(flat(arr));

## Hoisting - What will be logged in the console?

    var x = function() {
      return a;
      var a = 1;
    }

    console.log(x())

    var x = function() {
      return a;
      var a = 1;
      function a() { return 'hello'}
    }

    console.log(x())

## Closure

    for (var i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log(i + i + '' + i)
      }, i*1000)
    }

## Property accessors

    var a={},
        b={ key:'b' },
        c={ key:'c' };

    a[b]=123;
    a[c]=456;

    console.log(a);
    console.log(a[c]);

## Context

    var myName = 1;

    var myObject = {
      getName: function (){
        var myName = 2;
        return this.myName;
      },
      myName: 3,
    };

    var getNameFunc = myObject.getName;

    console.log(getNameFunc());
    console.log(myObject.getName());


## This - What will this print?

    var length = 10;

    function fn() {
      console.log(this.length);
    }

    fn();


## This - What will this print?

    var length = 10;

    function fn() {
      console.log(this.length);
    }

    var obj = {
      length: 5,
      method: function(fn) {
        fn();
        arguments[0]();
      }
    };

    obj.method(fn, 1);

## Implement _bind function

    Function.prototype._bind = function(context, a) {
      const that = this;
      return function(b) {
        return that(a, b);
      }
    }

    let plus = function(x,y) {
      return x + y;
    }

    let plus2 = plus.bind(null, 2);
    console.log(plus2);

    let plus4 = plus._bind(null, 4);
    console.log(plus4(6));
