class Node<T> {
    value: T;
    nextNode: Node<T> | null;

    constructor(value: T, nextNode: Node<T> | null = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private listSize: number;

    constructor(head: Node<T> | null = null) {
        this.head = head;
        this.tail = null;
        this.listSize = 0;
    }

    append(value: T): void {
        this.listSize += 1;
        const newNode = new Node(value, null);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        let headCopy = this.head;

        while (headCopy.nextNode !== null) {
            headCopy = headCopy.nextNode;
        }

        headCopy.nextNode = newNode;
        this.tail = headCopy.nextNode;
    }

    prepend(value: T) {
        this.listSize += 1;
        const newNode = new Node(value);

        [newNode.nextNode, this.head] = [this.head, newNode];
    }
}
