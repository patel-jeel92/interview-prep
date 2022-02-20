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

export default LRUCache;
