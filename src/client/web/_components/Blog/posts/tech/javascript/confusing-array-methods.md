# The confusing bits in javaScript

&nbsp;

## Mutating


**push** - Pushes an element to the end, returns new length, mutates the array.

**unshift** - Opposite of push. Adds an element to the beginning of the array, returns new length, mutates the array.

**pop** - Removes the last element in an array, returns it, mutates the original array.

**shift** - Opposite of pop. Removes an element from the beginning of the array, returns it, mutates the original array.

**splice** - creates a new array using the given start index and number of elements, mutates the original array.


&nbsp;

## Non mutating


**slice** - creates a new array using the given indices, returns it, does not mutate the original array.

**map** - iterates, returns new array.

**reduce** - iterates, returns a value, does not mutate.

**filter** - iterates and pushes to a new array based on a callback returning boolean.

&nbsp;

## Helpers

**indexOf** - returns the first index

**lastIndexOf** - returns the last index

**findIndex** - returns the first index based on given callback

**find** - returns the first value based on given callback

