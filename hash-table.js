/*
Interview Questions
Count the number of occurences of all characters or words in a body of text or a string - https://repl.it/@bgando/ht-unique-string-prompt, https://www.geeksforgeeks.org/determine-string-unique-characters/
Delete duplicates in a list - https://repl.it/@bgando/ht-remove-dups-prompt, https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/
Find a unique value in a list - https://repl.it/@bgando/ht-find-unique-list-prompt, https://www.geeksforgeeks.org/non-repeating-element/
Find if two integers in a list add up to k - https://repl.it/@bgando/ht-two-items-sum, https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
*/

// hash table
// organizes data for quick look up on values for a given key
// pros - fast lookups, flexible keys
// cons - slow worst-case lookups, unordered, single-directional lookups

// {} Map Set
// Map - can save any data type like a set but you still have key value pair like an object
// .has, .get, .set to interact with map instead of . notation like object
// when you think of optimizing a problem that requires a fast lookup always think hash table

/** Class representing a Hash Table */

class HashTable {
  constructor(val) {
    this._storage = [];
    this._tableSize = val;
    this._inputSize = 0;
  }
  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  */
  insert(key, value) {
    const index = this._hash(key, this._tableSize);

    if (!this._storage[index]) {
      this._storage[index] = []; 
    }
    //TODO: loop through array and find if key was already inserted
    this._storage[index].push([key, value]);
  }
  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove() {

  }
  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  //  { _storage: [0,0,0,[['a', 1], ['b',2],0,0,0] }
  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const arrayAtIndex = this._storage[index];

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i];
        if (keyValueArray[0] === key) return keyValueArray[1];
      }
    }

  }  
  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}

const myHT = new HashTable(25);

console.log(myHT)

myHT.insert('a', 1);
myHT.insert('b', 2);

console.log(myHT)
// HashTable