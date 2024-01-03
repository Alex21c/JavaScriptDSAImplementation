'use strict';
class maxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();    
    return element;
  }

  bubbleUp(){
    let idx = this.values.length-1;
    let element = this.values.at(idx);    
    while(idx>0){
      let parentIdx = Math.floor((idx-1)/2);
      let parent  = this.values.at(parentIdx);
      if(element > parent){
        this.values[parentIdx] = element;
        this.values[idx] = parent;
      }else{
        break;
      }

      idx=parentIdx;
    }
  }

  extractMax(){ // also called remove
    // removing from heap
      let max = this.values[0];
      let end = this.values.pop();      
      // have the new root sinkDown to the correct spot
      if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
  }

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
        }else if(leftChild > parent && leftChild >= rightChild){
          swapIdx = idxLeftChild;
        }else if(rightChild > parent && rightChild >= leftChild){
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
let heap = new maxBinaryHeap();
console.log('maxBinaryHeap::');
console.log(`inserting`, heap.insert(36));
console.log(heap);
console.log(`inserting`, heap.insert(16));
console.log(heap);
console.log(`inserting`, heap.insert(56));
console.log(heap);
console.log(`inserting`, heap.insert(171));
console.log(heap);
console.log(`inserting`, heap.insert(27));
console.log(heap);
console.log(`inserting`, heap.insert(291));
console.log(heap);

console.log(`\nExtracting Max. `, heap.extractMax());
console.log(heap);
console.log(`Extracting Max. `, heap.extractMax());
console.log(heap);
console.log(`Extracting Max. `, heap.extractMax());
console.log(heap);
console.log(`Extracting Max. `, heap.extractMax());
console.log(heap);
console.log(`Extracting Max. `, heap.extractMax());
console.log(heap);
console.log(`Extracting Max. `, heap.extractMax());
console.log(heap);



