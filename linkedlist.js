/*
Interview Questions
Delete the following
  - a node in the middle of a linked list - https://repl.it/@bgando/ll-delete-mid-node-prompt, https://www.geeksforgeeks.org/delete-middle-of-linked-list/
  - a node with only a variable pointing at that node - https://repl.it/@bgando/ll-delete-node-no-pointers-prompt, https://www.geeksforgeeks.org/given-only-a-pointer-to-a-node-to-be-deleted-in-a-singly-linked-list-how-do-you-delete-it/
  - a duplicate - https://repl.it/@bgando/ll-delete-dupe-node-prompt, https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/
Partition a linked list around a value - https://repl.it/@bgando/ll-partition-prompt, https://repl.it/@bgando/ll-partition-solution
Write a function for reversing a linked list. Can you do it in place? - https://repl.it/@bgando/ll-reverse-prompt, https://repl.it/@bgando/ll-reverse-solution
Check if a linked list contains a cycle - https://repl.it/@bgando/ll-cycle-detect-prompt, https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
Find the kth to the last node - https://repl.it/@bgando/ll-kth-to-last-node-prompt, https://repl.it/@bgando/ll-kth-to-last-node-solution
*/

// linked list
// organizes items sequentially, with each item storing a pointer to the next
// pros - fast operations on the ends, flexible size
// cons - costly lookups

/*
head        5   10  20  1   Null
pointer     ->  ->  ->  ->  
*/

// linked lists are often the underlying data structure for stack or queue
// you can implement a least recently used cache using a linked list
// hash tables often use linked lists to handle collisions

// const linkedList = {
//   head: {
//     value: 1
//     next: {
//       value: 2
//       next: {
//         value: 3
//         next: null
//       }
//     }
//   }
// }

/** Class representing a Linked List */

// Ahead of time figure out what to expect and write code to meet the expectation

class LinkedList {

  constructor(value) {
    this.head = {value: value, next: null};
    this.tail = this.head; // this.head, this.tail point to the same object in memory
  }
  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */

/*
this.head = {value: value, next: {value, next: null}};
this.tail = {value, next: null};
*/

  insert(value) {
    // update tail as needed 
    // dont need to update the head on the insert because we already initialized the first one
    const node = {value, next: null};
    // setting the next value of the current tail to our new node
    // console.log('this.head', this.head);
    this.tail.next = node; // "this is going to update both the head and the tail" 
    // update the tail to be our real tail which is our new node
    // console.log('this.head after updating this.tail.next', this.head);
    this.tail = node;
  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove() {

  }
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
  removeTail() {
    // loop and find the node before the tail
    // the one before the tail would be node.next === this.tail
    // this is traversing a linkedList
    let currentNode = this.head;
    while(currentNode.next !== this.tail) { // when our current node's next is equal to the tail we know it is the second to last node
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    let currentNode = this.head;
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currrentNode.value === value;
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this.head;
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this.tail;
  }
}

const myList = new LinkedList(1); //how should I initiate this, with a value or empty?

// {
//   head: {value: 1, next: null}, // in the beginning the head = the tail
//   tail: {value: 1, next: null}
// }

myList.insert(2);

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

myList.insert(3);
console.log(myList);
// {
//   head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }

myList.removeTail();
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
console.log(myList);

// myList.removeNext(prevNode)

// function removeNext(list, prevNode) {

// }