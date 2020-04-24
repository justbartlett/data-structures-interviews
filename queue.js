// queue - its just an array using push /unshift
// stores items in a first in first out order 
// enqueue / dequeue

/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0; // this is a head index this isn't a pointer to the head
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value - the value to enqueue
  */
  enqueue(value) {
    // TODO: argument validation
    const lastIndex = this._length + this._headIndex;
    this._storage[lastIndex] = value;
    this._length++;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    if(this._length) {
      const firstVal = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      this._headIndex++;
      return firstVal;
    }
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    return this._storage[this._headIndex];
  }
}

const newQueue = new Queue;
newQueue.enqueue('cool');
newQueue.enqueue('cool2');
console.log(newQueue);
// Queue { _storage: { 0: 'cool', 1: 'cool2' }, _length: 2, _headIndex: 0 }

newQueue.dequeue();
console.log(newQueue);
// Queue { _storage: { 1: 'cool2' }, _length: 1, _headIndex: 1 }

newQueue.enqueue('cool3');
console.log(newQueue);
newQueue.peek();
// {{0, cool}}