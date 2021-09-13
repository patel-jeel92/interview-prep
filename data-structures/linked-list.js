class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  hasNext() {
    return this.next !== null;
  }

  addNext(data) {
    this.next = new LinkedListNode(data);
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

  insertAt(index, data) {
    let current = this;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.next = new LinkedListNode(data);
    current.next.next = current.next;
  }
}
export default LinkedList;
