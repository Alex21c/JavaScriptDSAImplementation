'use strict';
console.clear();
class Node{
  constructor(val){
      this.val=val;
      this.next=null;
      this.previous=null;
  }
}

class DoublyLinkedList{
  constructor(val){
      this.length=0;           
      this.head=null;
      this.tail=null;  
  }
/***
 * Get the node iff present at the index provided
 */
  get(idx){
    // Safeguard
      if((idx < 0) || (idx > this.length-1)){
        return false;
      }
    let counter, currentNode;
    // Case #1 index is closer to head node
      if(idx< Math.floor(this.length/2)){
        console.log("Near Head");
        counter=0; currentNode=this.head;
        while(counter !== idx){
          ++counter;
          currentNode = currentNode.next;
        }
        return currentNode;
      }
      // Case #2 index is closer to tail node
      else{
        console.log("Near Tail");
        counter=this.length-1; currentNode=this.tail;
        while(counter !== idx){
          --counter;
          currentNode = currentNode.previous;
        }        
        return currentNode;
      }
  }  
/***
 * Add node to the beginning of the Doubly Linked List
 */
  unshift(val){
    // Case #1 : List is empty
      if(this.length===0){
        let newNode = new Node(val);
        this.head=newNode;
        this.tail=newNode;
        this.length++;
        return this;     
      }
    // Case #2: List is having one or more nodes
      else if(this.length > 0){
        let headNode = this.head;
        let newNode = new Node(val);              
        newNode.next = headNode;
        headNode.previous = newNode;
        this.head = newNode;
        ++this.length;
        return this;
      }
  }  

/***
 * Removes the node from the beginning of the doubly linked list
 */
  shift(){
    // Case #1: List is having Nodes
      // Case #1.1: List is having only single Node
      if(this.length == 1){
        this.head=null;
        this.tail=null;
        this.length =0;
        return this;
      }    
      // Case #1.2 List is having more than one nodes
      else if(this.length > 1){
        let nextNode = this.head.next;
        nextNode.previous = null;
        this.head=nextNode;
        --this.length;
        return this;
      }    
    // Case #2: List is empty
    else if(this.length === 0){
      return false;
    }
  }        
  
/***
 * Remove the element from the end of the doubly linked list
 */
  pop(){
    // Case #1: List is having Nodes
      // Case #1.1: List is having only single Node
      if(this.length == 1){
        this.head=null;
        this.tail=null;
        this.length =0;
        return this;
      }
      // Case #1.2 List is having more than one nodes
      else if(this.length > 1){
        let previousNode = this.tail.previous;
        previousNode.next = null;
        this.tail.previous = null;
        this.tail = previousNode;
        this.length--;
        return this;
      }
    // Case #2: List is empty
      else if(this.length === 0){
        return false;
      }
  }
/***
 * Add new element at the end of the doubly linked list
 */
  push(val){
    // Step #1: Creating a new node
      let newNode = new Node(val);
    // Step #2: Adding new node at the end
    // Step #2 Case #1 Does it alreay having nodes?
      if(this.length > 0){
        newNode.previous=this.tail;
        newNode.next = null;      
        this.tail.next = newNode;
        this.tail = newNode;
        ++this.length;
        return this;
      }
    // Step #2 Case #2 It does not have any nodes
      else{
        this.head = newNode;
        this.tail = newNode;
        ++this.length;  
        return this; // returning doubly linked list      
      }
  }

} 

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(10);
myDoublyLinkedList.push(15);
myDoublyLinkedList.push(20);
myDoublyLinkedList.push(25);
myDoublyLinkedList.push(30);
myDoublyLinkedList.push(35);
myDoublyLinkedList.push(40);
myDoublyLinkedList.push(55);
myDoublyLinkedList.push(50);
myDoublyLinkedList.push(55);
myDoublyLinkedList.push(60);

console.log(myDoublyLinkedList);