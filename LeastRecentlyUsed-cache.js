// Implement a Least Recently Used Cache (LRU), which is initialized with a capacity, and supports a set and get method.

//Goal: following operations are valid:
// let cache = new LRUcache(3)
// cache.set('key', 'value')
  //adds a key/value pair to the cache, and removes the LRU if this causes the cache to go over capacity
  //if the key is already in the cache, replace the existing key/value pair
// cache.get('key') => 'value'

//BONUS: I implemented a Least Recently UPDATED cache, instead of Least Recently USED.
// To alter this class to a true LRU cache, move the re-ordering check found in set() to get() and refactor as necessary

let store = {}

class LRUcache {
  constructor(cap){
    this.cap = cap
    this.cache = {}
    store.cache = []
  }
  get(key){
    if(this.cache[key] !== undefined) {
      return this.cache[key]
    }else {
      return -1
    }
  }
  set(key, value) {
    if(this.cache[key]===undefined) {
      // if key is not yet in the cache, check if adding it will make it go over capacity.
      // If so, remove the LRU element from store and cache
      if(store.cache.length + 1 > this.cap) {
        let rm = store.cache.shift()
        delete this.cache[rm]
      }
    } else {
      // if key is already in the cache, we know it won't go over capactiy.
      //remove the key from the store, so it can be added to the end when we update it.
      store.cache = store.cache.filter(el => {
        return el !== key
      })
    }
    store.cache.push(key)
    this.cache[key] = value
    // console.log(this.cache)
  }
}

//test basic case
let c = new LRUcache(3)
c.set('a', 10)
c.set('b', 9)
c.set('c', 8)
c.set('d', 7)
console.log("a: ", c.get('a')) //should return -1, because it expired on line 42
console.log("b: ", c.get('b')) //should return 9
console.log("c: ", c.get('c')) //should return 8
console.log("d: ", c.get('d')) //should return 7

//test if duplicates are overwritten - simple
let simpleDup = new LRUcache(3)
simpleDup.set('a', 10)
simpleDup.set('a', 7)
console.log('a ', simpleDup.get('a')) //should return 7

//test if duplicates are overwritten when at capacity
let dupC = new LRUcache(3)
dupC.set('a', 10)
dupC.set('b', 9)
dupC.set('c', 8)
dupC.set('a', 7)
console.log("a ", dupC.get('a'))  //should return 7, because a was overwritten
console.log("b: ", dupC.get('b')) //should return 9
console.log("c: ", dupC.get('c')) //should return 8

//test more complex duplicates and test if the store is updated in the correct order
//readability - to see order of Least Recently Updated, read .set() from bottom up.
let storeC = new LRUcache(3)
storeC.set('a', 10)
storeC.set('b', 9)
storeC.set('c', 8)
storeC.set('d', 6)  //a is removed
storeC.set('a', 7)  //b is removed
storeC.set('c', 5)  //update c, to change the order of the least recently updated
storeC.set('e', 4)  //d is removed
console.log("a ", storeC.get('a')) //should return 7
console.log("b ", storeC.get('b')) //should return -1, because it expired on line 64
console.log("c ", storeC.get('c')) //should return 5
console.log("d ", storeC.get('d')) //should return -1, because it was the least recently updated on line 66
console.log("e ", storeC.get('e')) //should return 4
