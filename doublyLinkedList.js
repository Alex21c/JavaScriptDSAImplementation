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
      this.push(val);  
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
        newNode.next=null;
        newNode.next=null;
        this.head = newNode;
        this.tail = newNode;
        ++this.length;  
        return this; // returning doubly linked list      
      }
  }

} 

let myDoublyLinkedList = new DoublyLinkedList(29);
myDoublyLinkedList.push(30);
myDoublyLinkedList.push(42);
myDoublyLinkedList.push(52);
console.log(myDoublyLinkedList);