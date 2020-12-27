class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = this.head ? 1 : 0;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    while (currentNode?.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getNodeAt(index) {
    if (index < 0 || index > this.size - 1) {
      return undefined;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  add(data) {
    let newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (!!currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.size++;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.size - 1) {
      return undefined;
    } else {
      let newNode = new ListNode(data);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let currentNode = this.head;
        let previousNode;
        for (let i = 0; i < index; i++) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = newNode;
        newNode.next = currentNode;
      }

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size - 1) {
      return undefined;
    } else {
      let currentNode = this.head;

      if (index === 0) {
        this.head = currentNode.next;
      } else {
        let previousNode;
        for (let i = 0; i < index; i++) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
      }
      this.size--;
      return currentNode.data;
    }
  }

  removeElement(data) {
    let currentNode = this.head;
    let previousNode;
    while (!!currentNode) {
      if (currentNode.data === data) {
        if (previousNode) {
          previousNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }
        this.size--;
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  indexOf(data) {
    let currentNode = this.head;
    let index = 0;
    while (!!currentNode) {
      if (currentNode.data === data) {
        return index;
      } else {
        currentNode = currentNode.next;
        index++;
      }
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  length() {
    return this.size;
  }
}
