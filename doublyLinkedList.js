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
 * Removes the node iff present at the index provided
 */
  remove(idx){
    if(idx===0){
      // remove from the beginning
        return this.shift();
    }else if(idx=== this.length-1){
      // remove from the end
        return this.pop();
    }else if(idx>0 && idx<this.length){
      // remove from the middle
        let nodeToRemove = this.get(idx);
        let previousNode = nodeToRemove.previous;
        let nextNode = nodeToRemove.next;
        previousNode.newNode = nextNode;
        nextNode.previous=previousNode;
        --this.length;
        return this;
    }else if(idx<0 || idx>=this.length){
      // out of range
        return false;
    }
  }  
/***
 * Insert new with at index provided
 */
  insert(idx, val){
    if(idx === 0){
      // insert at the beginning
        return this.unshift(val);
    }else if(idx === this.length){
      // insert at the end
        return this.push(val);
    }else if(idx>0 && idx<this.length){
      // insert in the middle
        let nextNode = this.get(idx);
        let previousNode = nextNode.previous;
        let newNode = new Node(val);   
        // linking newNode with next node     
          newNode.next = nextNode;
          nextNode.previous = newNode;
        // linking new node with previous node
          newNode.previous= previousNode;
          previousNode.next= newNode;        
        this.length++;
        return this;
    }else if(idx<0 || idx>this.length){
      // out of range
        return false;
    }
  }
/***
 * Update the node with new val provided iff present at the index provided
 */
  set(idx, val){
    let nodeAtGivenIdx = this.get(idx);
    if(nodeAtGivenIdx === false){
      return false;
    }else{
      nodeAtGivenIdx.val = val;
      return this;
    }
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
        //console.log("Near Head");
        counter=0; currentNode=this.head;
        while(counter !== idx){
          ++counter;
          currentNode = currentNode.next;
        }
        return currentNode;
      }
      // Case #2 index is closer to tail node
      else{
        //console.log("Near Tail");
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
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(7);
myDoublyLinkedList.push(8);



console.log(myDoublyLinkedList);