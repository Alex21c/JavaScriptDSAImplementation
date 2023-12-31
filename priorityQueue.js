////// IMPLEMENTED PRIORITY QUEUE /////
class Node{
  constructor(value, priority){
    this.value=value;
    this.priority = priority;
  }
}
class priorityQueue{
  constructor(){
    this.values = [];
    this.length = 0;
  }
  fetchMaxAndDecreasePriorityByOne(){
    if(this.length <=0 ){
      console.log('this.length < = 0');
      return;
    }
    let node = this.values[0];
    let value = node.value;
    this.decreasePriorityByOne(value);
    return value;
    
    
  }

  // decrease priority by One
  decreasePriorityByOne(value){
    if(this.values.length > 0){
      let idx = 0;
      for(let node of this.values){
        if(node.value === value){
          let newPriority = node.priority-1;
          let value = node.value;
          // removing node
            this.dequeue(node.value);
          // adding node
            if(newPriority>0){
              this.enqueue(value, newPriority);
            }
          return newPriority;
        }
        ++idx;
      }
    }
  }

  // Check whether an element is present in PQ or not
  has(value){
    if(this.values.length > 0){
      for(let node of this.values){
        if(node.value === value){
          return true;
        }
      }
    }
    // Default is
      return false;
  }
  // Add new element
  enqueue(value, priority){
    let newNode = new Node(value, priority);
    this.length++;
    this.values.push(newNode);
    this.bubbleUp();    
    return `${value}=> ${priority}`;
  }
  // helper function of enqueue, moves the newly added element to its correct position from last index
    bubbleUp(customIdx=null){
      let idx;
      if(customIdx === null){
        idx= this.values.length-1;
      }else{
        idx= customIdx;
      } 
      let element = this.values.at(idx);    
      while(idx>0){
        let parentIdx = Math.floor((idx-1)/2);
        let parent  = this.values.at(parentIdx);
        if(element.priority > parent.priority){
          this.values[parentIdx] = element;
          this.values[idx] = parent;
        }else{
          break;
        }

        idx=parentIdx;
      }
    }
  // Remove Element from PQ
  dequeue(){ // also called remove
    // removing from heap
      let max = this.values[0];
      let end = this.values.pop();      
      this.length--;
      // have the new root sinkDown to the correct spot
      if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
  }
  // helper function of dequque, after removing max element which is parent of pq, make new root parent
    sinkDown(){
      let idxParent = 0;
      let parent = this.values[idxParent];
          
      while(true){      
        // index of left & right childs  
          let idxLeftChild = (2 * idxParent) + 1;
          let idxRightChild = (2 * idxParent) + 2;
          let swapIdx = null;
        
        // swapping parent with largest child
          let leftChild=null;
          if(idxLeftChild < this.values.length){
            leftChild = this.values.at(idxLeftChild);
            
          }
          let rightChild=null;
          if(idxRightChild < this.values.length){          
            rightChild= this.values.at(idxRightChild);          
          } 
          // Safeguard       
            if(leftChild === null && rightChild === null){
              return; // out of bound
            }
          // console.log(`parent: ${parent}, leftChild: ${leftChild}, rightChild: ${rightChild}`);
          if(rightChild === null){
            swapIdx = idxLeftChild;
          }else if(leftChild.priority > parent.priority && leftChild.priority >= rightChild.priority){
            swapIdx = idxLeftChild;
          }else if(rightChild.priority > parent.priority && rightChild.priority >= leftChild.priority){
            swapIdx = idxRightChild;
          }
          // Safeguard
            if(swapIdx === null){
              return;
            }
          // swap
            [this.values[swapIdx], this.values[idxParent]] = [this.values[idxParent], this.values[swapIdx]];
            idxParent = swapIdx;
      }
    }
}

let pq = new priorityQueue();

console.log(`Adding ${pq.enqueue('a', 7)}`);
console.log(pq);
console.log(`Adding ${pq.enqueue('b', 1)}`);
console.log(pq);
console.log(`Adding ${pq.enqueue('c', 1)}`);
console.log(pq);
console.log(`Adding ${pq.enqueue('d', 2)}`);
console.log(pq);

let removed = pq.dequeue();
console.log(`\n\nRemoving ${removed.priority}`);
console.log(pq);
console.log(`Removing ${pq.dequeue()}`);
console.log(pq);
console.log(`Removing ${pq.dequeue()}`);
console.log(pq);
console.log(`Removing ${pq.dequeue()}`);
console.log(pq);

// // console.log(`\n\n has ${pq.has('a')}`);
// // console.log(`\n\n decreasePriority ${pq.decreasePriorityByOne('a')}`);
// // console.log(pq);

// console.log('\n');
// while(pq.length>0){
//   console.log(pq.fetchMaxAndDecreasePriorityByOne());
//   // console.log(pq);
// }