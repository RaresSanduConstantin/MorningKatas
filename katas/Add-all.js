/* 
Yup!! The problem name reflects your task; just add a set of numbers. But you may feel yourselves condescended, to write a program just to add a set of numbers. Such a problem will simply question your erudition. So, let's add some flavor of ingenuity to it. Addition operation requires cost now, and the cost is the summation of those two to be added. So, to add 1 and 10, you need a cost of 11. If you want to add 1, 2 and 3, there are several ways:

1 + 2 = 3, cost = 3,
3 + 3 = 6, cost = 6,
Total = 9.
1 + 3 = 4, cost = 4,
2 + 4 = 6, cost = 6,
Total = 10.
2 + 3 = 5, cost = 5,
1 + 5 = 6, cost = 6,
Total = 11.
I hope you have understood already your mission: to add a set of integers so that the cost is minimal.

Your Task
Given a vector of integers, return the minimum total cost of addition.


const {assert} = require('chai');

describe('Tests', () => {
  function test(numbers, expected) {
    assert.strictEqual(addAll(numbers), expected, `Test failed for [${numbers}]`);
  }

  it('Sample Tests', () => {
    test([1, 2, 3], 9);
    test([1, 2, 3, 4], 19);
    test([1, 2, 3, 4, 5], 33);
  });
});

https://www.codewars.com/kata/5b7d7ce57a0c9d86c700014b/train/javascript
*/

function addAll(numbers) {
    numbers.sort((a, b) => a - b);
    let totalCost = 0;
    
    while (numbers.length > 1) {
      let sum = numbers[0] + numbers[1];
      totalCost += sum;
      numbers = [sum, ...numbers.slice(2)].sort((a, b) => a - b);
    }
    
    return totalCost;
  }
  



//addvance solution
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeft(i) {
        return 2 * i + 1;
    }

    getRight(i) {
        return 2 * i + 2;
    }

    insert(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i !== 0 && this.heap[this.getParent(i)] > this.heap[i]) {
            [this.heap[i], this.heap[this.getParent(i)]] = [this.heap[this.getParent(i)], this.heap[i]];
            i = this.getParent(i);
        }
    }

    remove() {
        const root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let i = 0;
        while (this.getLeft(i) < this.heap.length) {
            let smaller = this.getLeft(i);
            if (this.getRight(i) < this.heap.length && this.heap[this.getRight(i)] < this.heap[this.getLeft(i)]) {
                smaller = this.getRight(i);
            }

            if (this.heap[i] < this.heap[smaller]) {
                break;
            }

            [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
            i = smaller;
        }

        return root;
    }
}

function addAll(numbers) {
    let heap = new MinHeap();
    for(let num of numbers) {
        heap.insert(num);
    }

    let totalCost = 0;
    while (heap.heap.length > 1) {
        let val1 = heap.remove();
        let val2 = heap.remove();
        totalCost += val1 + val2;
        heap.insert(val1 + val2);
    }

    return totalCost;
}
