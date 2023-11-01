console.clear();
class Node{
  constructor(val){
      this.val=val;
      this.next=null;
  }
}
class SinglyLinkedList{
  constructor(val){
      this.head=null;
      this.tail=null;        
      this.length=0;
  }
  /// add new node to the end of the list //
  push(val){    
      let newNode = new Node(val);
      // there is no node
      if(this.length===0){
        this.head=newNode;
        this.tail=this.head;
      }else{//there is head node present
        this.tail.next=newNode;
        this.tail=newNode;
        // console.log(newNode);
      }
      ++this.length;
      return this; // returning back the whole linked list
  }
  /// remove tail node //
  pop(){
    // Safeguard
    if(this.length<=1){      
      this.head=null;
      this.tail=null;
      this.length=0;
      return this;
    }

    let currentNode = this.head;
    while(currentNode.next.next){
      currentNode=currentNode.next;
    }
    this.tail=currentNode;
    this.tail.next=null;
    this.length--;
    return this; // returning back the whole linked list
  }
  /// remove node from the beginning //
  shift(){
    // Safeguard
    if(this.length<=1){
      this.head=null;
      this.tail=null;      
      this.length=0;
      return this;      
    }
    this.head = this.head.next;
    --this.length;
    return this;
    
  }
  /// Add node to the beginning //
  unshift(val){
    let newNode = new Node(val);
    if(this.length===0){
      this.head=newNode;
      this.tail=newNode;
      this.length=1;
      return this;
    }
    newNode.next=this.head;
    this.head=newNode;
    ++this.length;
    return this;
  }
  /// Get element if present at given index //
  get(idx){
    // Safeguard
      if(idx<0 || idx>=this.length){
        return null;
      }
    let counter=0;
    let currentNode=this.head;
    while(counter<idx){
      currentNode=currentNode.next;
      ++counter;
    }
    return currentNode;
  }
  /// Update the element value with the index provided, if it exist //
  set(idx, val){
    let resultNode = this.get(idx);
    if(resultNode !== null){
      resultNode.val = val;
    }
    return resultNode;
  }
  /// Insert new Node at the index specified //
  insert(idx, val){
    // Safeguard
      if(idx<0 || idx>this.length){
        return false;
      }
      // Inserting
      if(idx===0){
        this.unshift(val); // insert at the beginning
      }else if(idx === this.length){
        this.push(val);//insert at the end
      }else{
      // somewhere in the middle of the linked list from 0 to n
      let newNode = new Node(val);
      let previousNode = this.get(idx-1);
      let nextNodeOfPreviousBK = previousNode.next;
      // pointing previous node to next node
        previousNode.next = newNode;
      // and new node to the what was earlier next node of perviousNode
        newNode.next = nextNodeOfPreviousBK;
        ++this.length;
      }
    return true;
  }
  
  /// Removes the node from the index specified //
  remove(idx){
    // Safeguard
      if(idx<0 || idx>=this.length){
        return false;
      }
    // Removing      
      if(idx===0){// removing head node        
        return this.shift();
      }else if(idx === this.length-1){
        return this.pop();
      }else{
        // get index of previous and next nodes
        let previousNode = this.get(idx-1);
        let nextNode = this.get(idx+1);
        if(previousNode && nextNode){
          previousNode.next=nextNode;
          this.length--;
          return this; // return the entire list after node removal
        }
      }
  }
  
  /// Reverse the entire Linked List //
  reverse(){
    // making head tail and tail as head
      let tempNode = this.head;
      this.head=this.tail;
      this.tail = tempNode;     

    let currentNode, previousNode, nextNode;    
    currentNode=this.tail;    
    previousNode=null;
    nextNode=currentNode.next;
    let bkNode;
    
    while(nextNode){
      // console.log(previousNode);
      // console.log(currentNode);
      // console.log(nextNode);
      // console.log("---");
      bkNode=nextNode.next;
      nextNode.next = currentNode;
      currentNode.next = previousNode;
      previousNode=currentNode;
      currentNode=nextNode;
      nextNode=bkNode;
    }
    return this;
  }  

  /// Print all elements present inside list //
  print(){
    let current=this.head;
    let output=[];
    while(current){
      output.push(current.val);
      current=current.next;
    }
    return output;
  }
  
} 


let mySinglyLinkedList = new SinglyLinkedList();
mySinglyLinkedList.push("Node1");
mySinglyLinkedList.push("Node2");
mySinglyLinkedList.push("Node3");
mySinglyLinkedList.push("Node4");
mySinglyLinkedList.push("Node5");
// mySinglyLinkedList.unshift("Node*");
 
// console.log(mySinglyLinkedList);
// mySinglyLinkedList.pop();
// console.log(mySinglyLinkedList);




