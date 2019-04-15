'use strict';

class _Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  insertFirst(item) {
    const insertedNode = new _Node(item, this.head, null);
    if (!this.head) {
      this.head = insertedNode;
      this.tail = insertedNode;
    } else {
      this.head.prev = insertedNode;
      this.head = insertedNode;
    }
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      const insertedNode = new _Node(item, null, this.tail);
      this.tail.next = insertedNode;
      this.tail = insertedNode;
    }
  }
  peak() {
    return this.first.value;
  }
  display() {
    let result = [];
    let current = this.first;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

module.exports = Queue;