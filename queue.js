'use strict';

// Creates a node containing the data and a reference to the next item
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
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
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
    // result.push(current.value);
    return result;
  }
}

module.exports = Queue;