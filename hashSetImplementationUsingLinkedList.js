'use strict';
class Node{
    constructor(val){
        this.next=null;
        this.val=val;
        this.previous=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    add(key){
        let newNode = new Node(key);
        if(this.length===0){
            // create a new node 
                this.head=newNode;
                this.tail=newNode;
                ++this.length;
                return this;
        }else{
            // append
                let currentNode=this.tail;
                currentNode.next = newNode;
                newNode.previous=currentNode;
                this.tail=newNode;
                ++this.length;
                return this;
        }
    }

    contains(key){
        if(this.length === 0){
            return false;
        }
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val == key){
                return true;
            }
            currentNode=currentNode.next;
        }
        // Default is
            return false;
    }

    remove(key){
        if(this.length === 0){
            return false;
        }
        let currentNode = this.head;
        if(this.length===1 && this.head.val==key){
            this.head=null;
            this.tail=null;
            this.length=0;
            return true;
        }
        let idx=0;
        while(currentNode){          
            if(currentNode.val === key){          
              // breaking the link
              // Case #1: Remove last node
                if(this.length === idx+1){
                  // console.log('okay you want to remove last node');
                  if(this.length > 0){
                    // console.log('there are more than 1 nodes in the list');
                    let previousNode = currentNode.previous;
                    this.tail = previousNode;
                    previousNode.next = null;
                    --this.length;
                    return true;
                  }
                }
              // Case #2: it is middle node  
              else if(this.length > 1 && idx!==0){
                // console.log('it is the midle node');
                let previousNode =currentNode.previous;
                let nextNode = currentNode.next;
                previousNode.next = nextNode;
                nextNode.previous = previousNode;
                --this.length;
                return true;
              }
              // Case #3: the very first node
              else if(this.length>=1 && idx+1==1){
                // console.log('very first node');
                let nextNode = currentNode.next;
                this.head = nextNode;
                this.head.previous=null;
                nextNode.previous=this.head;
                --this.length;
                return true;
              }
            }
            currentNode=currentNode.next;
            ++idx;
        }
        // Default is
            return false;        
    }
}

class MyHashSet{
    constructor(){
        this.size=1000;
        this.hTable = new Array(this.size);        
    }
    hash(key){
        return key%this.size;
    }
    add(key){        
        let idx=this.hash(key);
        // chain this index with the doubly linked list 
        if(!this.hTable[idx]){
            this.hTable[idx] = new DoublyLinkedList();            
        }
        let linkedList = this.hTable[idx];            
        // Safeguard
            if(linkedList.contains(key)){
                return false;
            }
        return linkedList.add(key);
        //console.log(this.hTable);
        
    }
    remove(key){
        let idx=this.hash(key);
        // is there linked list at that index         
        if(!this.hTable[idx]){
            return false;
        }
        // if yes then find and remove it
        let linkedList = this.hTable[idx];            
        return linkedList.remove(key);
    }

    contains(key){
        let idx=this.hash(key);
        // is there linked list at that index         
        if(!this.hTable[idx]){
            return false;
        }
        // if yes then does it contains the key supplied?
        let linkedList = this.hTable[idx];            
        return linkedList.contains(key);
        
    }
}

// let hset = new MyHashSet();
// console.log(hset.add(448));
// console.log(hset.remove(152));

