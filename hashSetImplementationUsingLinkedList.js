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
        if(this.length===1){
            this.head=null;
            this.tail=null;
            this.length=0;
            return true;
        }
        while(currentNode){
            if(currentNode.val === key){
                // breaking the link
                let previousNode = currentNode?.previous;
                let nextNode = currentNode?.next;
                if(previousNode?.previous){
                    previousNode.next = nextNode;
                }else{
                    this.head=nextNode;
                }
                if(nextNode?.previous){
                    nextNode.previous = previousNode;
                }else{
                    this.tail=previousNode;
                }
                --this.length;
               return true;
            }
            currentNode=currentNode.next;
        }
        // Default is
            return false;        
    }
}

class MyHashSet{
    constructor(){
        this.size=10;
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
        linkedList.add(key);
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

let hset = new MyHashSet();
hset.add(58);
hset.add(14);
hset.remove(91);
hset.add(6);
hset.add(66);
hset.add(51);
hset.add(16);
hset.add(40);
hset.add(52);
hset.add(48);
hset.add(42);
hset.add(85);
hset.add(36);
hset.remove(0);
console.log(hset.contains(40));
hset.add(3);
hset.remove(25);
hset.add(99);
hset.remove(66);
hset.add(60);
hset.remove(58);
hset.add(97);
hset.add(35);
hset.add(65);
hset.add(41);
hset.add(10);
hset.add(37);
hset.add(65);
hset.remove(37);
hset.add(28);
hset.add(30);
hset.add(63);
hset.add(76);
hset.remove(90);
console.log(hset);

