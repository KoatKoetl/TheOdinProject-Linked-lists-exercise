class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getHead() {
    // return the first element
    return this.head;
  }

  tail() {
    // return last element
    if (this.head === null) return null;
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  append(value) {
    // Adds new node to the end of list
    const newNode = new Node(value);
    if (this.head === null) return this.prepend(value);
    let lastElement = this.head;
    while (lastElement.nextNode !== null) {
      lastElement = lastElement.nextNode;
    }
    lastElement.nextNode = newNode;
  }

  prepend(value) {
    // Add new node to the start of list
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  getSize() {
    // Return the total number of nodes
    if (this.head === null) return 0;

    let size = 0;

    let element = this.head;
    while (element !== null) {
      element = element.nextNode;
      size++;
    }
    return size;
  }

  at(Index) {
    // Return node from index
    let theElement = this.head;
    let indexCount = 0;
    let listLength = this.getSize();

    if (Index < listLength) {
      while (theElement.nextNode !== null) {
        if (Index === indexCount) {
          return theElement;
        }
        theElement = theElement.nextNode;
        indexCount++;
      }
      return theElement;
    } else {
      return null;
    }
  }

  pop() {
    // removes last element from list
    let currElem = this.head;
    let prevElem = null;

    while (currElem.nextNode !== null) {
      prevElem = currElem;
      currElem = currElem.nextNode;
    }
    prevElem.nextNode = null;
  }

  contains(value) {
    // Return true if values are there otherwise false
    let currElem = this.head;
    let searchElem = value;

    while (currElem !== null) {
      if (currElem.value === searchElem) {
        return true;
      }
      currElem = currElem.nextNode;
    }
    return false;
  }

  find(value) {
    // return the index of found value otherwise null
    let element = this.head;
    let indexCount = 0;

    while (element !== null) {
      if (value === element.value) {
        return indexCount;
      }
      indexCount++;
      element = element.nextNode;
    }
    return null;
  }

  toString() {
    // Show in console linked lists object in one line.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let element = this.head;
    let string = '';

    while (element !== null) {
      string += element.value + ' -> ';
      element = element.nextNode;
    }

    return string + 'null';
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend(5);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(23);
myLinkedList.append(11);
myLinkedList.append(42);

console.log('Head of list:');
console.log(myLinkedList.getHead());
console.log('Tail of list:');
console.log(myLinkedList.tail());
console.log('Get item by index: ');
console.log(myLinkedList.at(1));
console.log('Get index of item: ');
console.log(myLinkedList.find(15));
console.log('Size of list: ' + myLinkedList.getSize());
console.log('Does list contain: ' + myLinkedList.contains(42));
console.log(myLinkedList.toString());
