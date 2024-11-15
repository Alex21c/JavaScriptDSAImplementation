class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class priorityQueue{
  constructor() {
    this.values = [];
    this.length = 0;
  }

  // Fetch the maximum value and decrease its priority by 1
  fetchMaxAndDecreasePriorityByOne() {
    if (this.length <= 0) {
      console.log('Queue is empty');
      return null;
    }
    const node = this.values[0];
    const value = node.value;
    this.decreasePriorityByOne(value);
    return value;
  }

  // Decrease the priority of a specific value by 1
  decreasePriorityByOne(value) {
    const idx = this.values.findIndex(node => node.value === value);
    if (idx === -1) {
      console.log(`Value ${value} not found in the queue.`);
      return null;
    }

    this.values[idx].priority -= 1;
    if (this.values[idx].priority <= 0) {
      this.dequeue(); // Remove the node if its priority is 0 or less
    } else {
      this.bubbleUp(idx);
      this.sinkDown(idx);
    }
  }

  // Check if the queue contains a value
  has(value) {
    return this.values.some(node => node.value === value);
  }

  // Add a new element
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.length++;
    this.bubbleUp();
    return `${value} => ${priority}`;
  }

  // Move the newly added element to its correct position
  bubbleUp(customIdx = null) {
    let idx = customIdx !== null ? customIdx : this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      // Swap parent and child
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Remove the maximum element (highest priority)
  dequeue() {
    if (this.length === 0) {
      console.log("Queue is empty");
      return null;
    }

    const max = this.values[0];
    const end = this.values.pop();
    this.length--;
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  // Move the root element to its correct position
  sinkDown(startIdx = 0) {
    let idx = startIdx;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority > element.priority) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      // Swap parent and child
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
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
