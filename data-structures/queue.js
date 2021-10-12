export default class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    console.log(this.data);
  }

  clear() {
    this.data = [];
  }
}
