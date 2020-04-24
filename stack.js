/*
Interview questions
use an array to implement three stacks - https://repl.it/@bgando/k-stacks-one-array-prompt, https://repl.it/@bgando/k-stacks-one-array-solution
implement a getMin() or getMax() method on your stack - https://repl.it/@bgando/min-stack-prompt, https://repl.it/@bgando/min-stack-solution
create a queue using 2 stacks - https://repl.it/@bgando/queue-two-stacks-prompt, https://repl.it/@bgando/queue-two-stacks-solution
sort a stack with the min values in order, on top. you can use another stack as a buffer - https://repl.it/@bgando/sort-stack-prompt, https://repl.it/@bgando/sort-stack-solution
write a function that returns true if a string of brackets is valid/balanced - https://repl.it/@bgando/bracket-validator-prompt, https://repl.it/@bgando/bracket-validator-solution
*/

// stack - its just an array using push / pop
// stores items in a last in, first out
// push / pop

/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {}; // _ means internal property dont work on it directly - only access it through public methods peek, pop, and push
    this._length = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value - the value to push
  */
  push(value) {
    // TODO: add typechecking and check arguments
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    // what if it is empty? if(this._length) {}
    const lastVal = this._storage[this.length - 1];
    delete this._storage[this._length - 1]; // this._storage[this._length -1] = undefined
    this._length--;
    return lastVal;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._storage[this.length - 1];
  }
}

const myStack = new Stack();

myStack.push('zero');
myStack.push('one');
// {_storage: {0: 'zero', 1: 'one'}
  // length: 2
// }
console.log(myStack);
myStack.pop();
// {_storage: {0: 'zero'}
  // length: 1
// }
console.log(myStack);
myStack.peek();
// {_storage: {0: 'zero'}
  // length: 1
// }