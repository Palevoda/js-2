// size: Return the number of node(s)
// head: Return the element of the head
// add: Add another node in the tail
// remove: Remove certain node
// indexOf: Return the index of a node
// elementAt: Return the node of an index
// addAt: Insert a node at a specific index
// removeAt: Delete a node at a specific index

    class Node {
            element;
            next = null;
            constructor(element) {
                this.element = element;
            }
        }

        class LinkedList {
            size = 0;
            head = null;

            size() {
                return this.size();
            }

            head() {
                return this.head;
            }

            add(element) {

                if (this.head === null) {
                    this.head = element;
                    this.size++;
                } else {
                    let currentElement = this.head;
                    for (let i = 0; i < this.size; i++) {

                        if (currentElement.next === null) {
                            currentElement.next = element;
                            this.size++;
                            break;
                        } else {
                            currentElement = currentElement.next;
                        }
                    }
                }
            }

            addAt(position, element) {

                if (position > this.size || position < 0) {
                    console.log("Index out of range");
                } else if (position === 0) {
                    element.next = this.head;
                    this.head = element;
                    this.size++;
                } else {
                    let previous = null;
                    let currentElement = this.head;
                    for (let i = 0; i <= this.size; i++) {

                        if (i === position) {
                            previous.next = element;
                            element.next = currentElement;
                            this.size++;
                            break;
                        } else {
                            previous = currentElement;
                            currentElement = currentElement.next;
                        }
                    }
                }
            }

            indexOf(element) {
                    let previous = null;
                    let currentElement = this.head;
                    for (let i = 0; i <= this.size; i++) {
                        if (element.element == currentElement.element) {                            
                            return i;
                        } else {
                            previous = currentElement;
                            currentElement = currentElement.next;
                        }
                    }
            }

            removeAt(position) {
                if (position >= this.size || position < 0) {
                    console.log("Index out of range");
                } else if (position === 0) {
                    this.head = this.head.next;
                    this.size--;
                } else {
                    let previous = null;
                    let currentElement = this.head;
                    for (let i = 0; i <= this.size; i++) {

                        if (i === position) {
                            previous.next = currentElement.next;
                            this.size--;
                            break;
                        } else {
                            previous = currentElement;
                            currentElement = currentElement.next;
                        }
                    }
                }
            }

            remove() {
                    let previous = null;
                    let currentElement = this.head;
                    for (let i = 0; i <= this.size; i++) {
                        if (i === this.size) {
                            previous.next = null;
                            this.size--;
                            break;
                        } else {
                            previous = currentElement;
                            currentElement = currentElement.next;
                        }
                    }
            }

            elementAt(position) {
                if (position > this.size || position < 0) {
                    console.log("Index out of range");
                } else {
                    let previous = null;
                    let currentElement = this.head;
                    for (let i = 0; i <= this.size; i++) {
                        if (i === position) {
                            return currentElement;
                        } 
                        previous = currentElement;
                        currentElement = currentElement.next;
                    }
                }
            }

            showAll() {
                let currentElement = this.head;

                if (this.size === 0) console.log("List is empty");

                for (let i = 0; i < this.size; i++) {
                    console.log(currentElement.element);
                    currentElement = currentElement.next;
                }
            }
        }

        // 
        let linkedList = new LinkedList();

        let node1 = new Node(1);
        let node2 = new Node(2);
        let node3 = new Node(3);

        linkedList.add(node1);
        linkedList.add(node3);

        linkedList.showAll();
        linkedList.addAt(2, node2);

        console.log(linkedList.elementAt(1));

        linkedList.showAll();
        console.log();
        // linkedList.removeAt(2);
        // linkedList.remove();
        console.log(linkedList.indexOf(node2));
        console.log();
        linkedList.showAll();



