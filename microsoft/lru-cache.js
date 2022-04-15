class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.get(key)) {
      const result = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, result);
      return result;
    }
    return -1;
  }

  put(key, value) {
    if (this.get(key) === -1) {
      if (this.map.size === this.capacity) {
        for (const keyVal of this.map) {
          this.map.delete(keyVal[0]);
          break;
        }
      }
    }

    this.map.set(key, value);
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCacheWithNode {
  constructor(capacity) {
    // capacity
    this.capacity = capacity;

    // hash map to store key and pointer to node
    this.map = new Map();

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);

    // left = LRU, right = most recently used
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // eslint-disable-next-line class-methods-use-this
  remove(node) {
    const { prev } = node;
    const { next } = node;

    prev.next = next;
    next.prev = prev;
  }

  insert(node) {
    const { prev } = this.right;
    const next = this.right;

    prev.next = node;
    next.prev = node;

    node.next = next;
    node.prev = prev;
  }

  get(key) {
    // check if its in the map. If it is, return it
    if (this.map.get(key)) {
      // since we just accessed this val, we have to set it to most recently used
      this.remove(this.map.get(key));
      this.insert(this.map.get(key));
      return this.map.get(key).val;
    }
    return -1;
  }

  put(key, value) {
    // if key already exists, replace it by removing it
    if (this.map.get(key)) {
      this.remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.insert(newNode);

    if (this.map.size > this.capacity) {
      const lru = this.left.next;
      this.remove(lru);
      this.map.delete(lru.key);
    }
  }
}

export default LRUCache;
