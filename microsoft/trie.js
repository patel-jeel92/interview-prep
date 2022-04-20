export class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (const char of word) {
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
    }
    cur.endOfWord = true;
  }

  search(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return cur.endOfWord;
  }

  startsWith(prefix) {
    let cur = this.root;
    for (const char of prefix) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }
    return true;
  }
}
