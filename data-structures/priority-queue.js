class PQNode {
  constructor(params) {
    this.value = params.value;
    this.priority = params.priority;
  }
}

export default class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  enqueue(value, priority) {
    const newNode = new PQNode({ value, priority });
    this.heap.push(newNode);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  dequeue() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();
    const currentIdx = 1;
    const [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
    const currentChildIdx =
      this.heap[right] && this.heap[right].priority >= this.heap[left].priority
        ? right
        : left;
    while (
      this.heap[currentChildIdx] &&
      this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority
    ) {
      const currentNode = this.heap[currentIdx];
      const currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}
