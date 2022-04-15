export class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  hasNext() {
    return this.next !== null;
  }

  addNext(val) {
    this.next = new LinkedListNode(val);
  }

  getAt(index) {
    let current = this;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  deleteAt(index) {
    let current = this;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  insertAt(index, val) {
    let current = this;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.next = new LinkedListNode(val);
    current.next.next = current.next;
  }
}
