'use strict';
/**
 * 706. Design HashMap
 * Leetcode : https://leetcode.com/problems/design-hashmap
 *
 */

class Node{
  constructor(key, value){
    // console.log(`${key} ${value}`);
    this.next=null;
    this.key=key;
    this.value=value;
    this.previous=null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }

  remove(key){
    if(this.length ===0){
      return false;
    }
    let currentNode = this.head;
    let idx=0;
    while(currentNode){
      if(currentNode.key === key){
        // console.log(`removing ${key}`);
       // now here node found and i need to delete it
       // Case #1: node is present the head
        if(idx===0){
          // Case #1.1 its the only node
            if(this.length===1){
              this.head=null;
              this.tail=null;
              this.length=0;
              return true;
            }
          // Case #1.2 its the first node and there are other nodes attached to it
            else{
              // making next node as the head node
                let nextNode = currentNode.next;
                nextNode.previous=null;
                this.head = nextNode;
                --this.length;
                return true;
            }
        }
       // case #2: node is present at the tail
        else if(idx === this.length-1){
          // console.log('node is present at the tail');
          let previousNode = currentNode.previous;
          previousNode.next=null;
          this.tail=previousNode;
          --this.length;
          return true;
        }
       // Case #3: node is in betweeen head and tail
        else{
          let previousNode = currentNode.previous;
          let nextNode = currentNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
          --this.length;
          return true;
        }
      }
      currentNode = currentNode.next;
      ++idx;
    }
    // Default
      return false; //not found;
  }
  get(key){    
    if(this.length ===0){
      return -1;
    }
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.key === key){
        // console.log(`${currentNode.key} equals ${key}, so returning ${currentNode.value}`);        
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    // Default
      return -1; //not found;
  }
  
  add(key,value){
    let newNode = new Node(key, value);
    // is list empty
      if(this.length === 0){
        // adding new node
          this.head=newNode;
          this.tail=newNode;
          ++this.length;
          return true;
      }else{
        // does key already present in the linkedList?
          let currentNode = this.head;
          while(currentNode){
            if(currentNode.key === key){
              // Node is already present, just need to update its value
              currentNode.value = value;
              return true;
            }
            currentNode=currentNode.next;
          }

        // attaching node at the end
          newNode.previous= this.tail;
          this.tail.next = newNode;
          this.tail=newNode;
          ++this.length;
          return true;
      }
      let currentNode = this.head;
    // default
      return false;
  }
}

class MyHashMap{
  constructor(){
    this.size=997; // Magic of prime number
    this.hTable = new Array(this.size);
  }
  hash(key){
    return key%this.size;
  }
  // void put(int key, int value) inserts a (key, value) pair into the HashMap. 
  // If the key already exists in the map, update the corresponding value.
  put(key, value){
    let idx = this.hash(key);
    // is there linked list present at that index?
      if(this.hTable[idx] === undefined){
        // create new DoublyLinkedList
        this.hTable[idx] = new DoublyLinkedList();
      }
    // adding|updating
      return this.hTable[idx].add(key, value);
      
 
  }
  // int get(int key) returns the value to which the specified key is mapped,
  // or -1 if this map contains no mapping for the key.
  get(key){
    let idx = this.hash(key);
    // is there linked list present at that index?
      if(this.hTable[idx] === undefined){
        return -1;
      }    
    // fetching
      // console.log(`looking for key:${key} at idx:${idx} of hTable`);
      return this.hTable[idx].get(key);
  }

  // void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
  remove(key){
    let idx = this.hash(key);
    // is there linked list present at that index?
      if(this.hTable[idx] === undefined){
        return false; // nothing to remove
      }
    // remove
      return this.hTable[idx].remove(key);
  }
}

// let objMyHashMap = new MyHashMap();
// console.log(objMyHashMap.put(1,1));
// console.log(objMyHashMap.put(2,2));
// console.log(objMyHashMap.get(1));
// console.log(objMyHashMap.get(3));
// console.log(objMyHashMap.put(2,1));
// console.log(objMyHashMap.get(2));
// console.log(objMyHashMap.remove(2));
// console.log(objMyHashMap);
// console.log(objMyHashMap.get(2));


