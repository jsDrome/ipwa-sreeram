# Leetcode problems

https://leetcode.com/explore/interview/card/top-interview-questions-easy/

## Arrays

### 1. Remove Duplicates from sorted array (2 pointer method)

    var removeDuplicates = function(nums) {
        if (!nums) return 0;
        if (nums.length === 1) return 1;
        let p1 = 1; let p2 = 0
        for (; p1 < nums.length; p1++) {
            if (nums[p2] !== nums[p1]) {
                nums[++p2] = nums[p1];
            }
        }
        return p2 + 1;
    };

### 2. Best time to buy stock

    var maxProfit = function(prices) {
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            const diff = prices[i] - prices[i-1];
            profit += diff > 0 ? diff : 0;
        }

        return profit;
    };

### 3. Rotate array

    var rotate = function(nums, k) {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
    };

### 4. Contains duplicate

    var containsDuplicate = function(nums) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) return true;
            else map[nums[i]] = true;
        }
        return false;
    };

### 5. Find the duplicate number

    var singleNumber = function(nums) {
        let map = {};
        for (let i = 0; i< nums.length; i++) {
            if (map[nums[i]]) delete map[nums[i]];
            else map[nums[i]] = true;
        };
        return Object.keys(map)[0]
    };

### 7. Plus 1

    var plusOne = function(digits) {
        let pointer = digits.length - 1;
        let carry = 0;
        do {
            let sum = digits[pointer] += 1;
            if (sum === 10) {
                sum = 0;
                carry = 1;
            } else {
                carry = 0;
            }
            digits[pointer] = sum;
            pointer --;
        } while (carry === 1 && pointer > -1)
        if (carry) digits.unshift(1);
        return digits;
    };

### 8. Move zeros

    var moveZeroes = function(nums) {
        let count = 0;
        for (let i = 0; i < nums.length;) {
            if (!nums[i]) {
                nums.splice(i, 1);
                count++;
            } else i++;
        }
        for (let i = 0; i < count; i++) {
            nums.push(0);
        }
        return nums;
    };

### 9. Two sum

    var twoSum = function(nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map[complement]) return [map[complement] - 1, i];
            map[nums[i]] = i+1;
        }
    };

### 10. Valid Sudoku

    var isValidSudoku = function(board) {
        const map = {};

        for (let i = 0; i< 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j];
                if (num !== '.') {
                    const row = i;
                    const col = j;
                    const boxRow = Math.floor(i/3);
                    const boxCol = Math.floor(j/3);

                    if (map[`${num}-row-${row}`] || map[`${num}-col-${col}`] || map[`${num}-box-${boxRow}${boxCol}`]) return false;

                    map[`${num}-row-${row}`] = true;
                    map[`${num}-col-${col}`] = true;
                    map[`${num}-box-${boxRow}${boxCol}`] = true;
                }

            }
        }
        return true;
    };

## Linked Lists

### 1. Delete node in a Linked List

    var deleteNode = function(node) {
        console.log(node);
        node.val = node.next.val;
        node.next = node.next.next;
    };

### 2. Remove Nth Node From End of List

    var removeNthFromEnd = function(head, n) {
      let i = 1;
      let prev = head;
      const traverse = (node, prev) => {
        node.next && traverse(node.next, node);
        if (i === n) {
            if (i === 1) {
                if (node === head) {
                    head = null;
                    return;
                }
                prev.next = null;
            } else {
                node.val = node.next.val;
                node.next = node.next.next;
            }
        }
        i++;
      }
      traverse(head, prev);
      return head;
    };

## Math

### 1. FizzBuzz

    /**
    * @param {number} n
    * @return {string[]}
    */


    var fizzBuzz = function(n) {
        const map = {
            3: 'Fizz',
            5: 'Buzz',
        }

        const ret = [];

        for (let i = 1; i <= n; i++) {
            let str = '';
            for (let n in map) if (i % +n === 0) str += map[n];
            ret.push(str || i + '');
        }
        return ret;
    };
