import { NodeItem } from './node';

export class List<T> {
    private _headNode: NodeItem<T> | null;
    private _tailNode: NodeItem<T> | null;
    private _length: number;

    constructor() {
        this._headNode = null;
        this._tailNode = null;
        this._length = 0;
    }

    get head(): NodeItem<T> | null {
        return this._headNode;
    }

    set head(node: NodeItem<T> | null) {
        this._headNode = node;
    }

    get tail(): NodeItem<T> | null {
        return this._tailNode;
    }

    set tail(node: NodeItem<T> | null) {
        this._tailNode = node;
    }

    // Returns a new list with all elements of the original list except the first.
    get tailAllButFirst() {
        const clonedList = this.cloneRecursion(this.head);
        const headNode = clonedList.head;
        const newHeadNode = headNode ? headNode.nextNode : null;
        clonedList.head = newHeadNode;
        clonedList.length--;
        return clonedList;
    }

    get length() {
        return this._length;
    }

    set length(n: number) {
        this._length = n;
    }

    elementAt(n: number, node: NodeItem<T> | null = this.head): T | null {
        if (node === null) {
            return null;
        }
        if (n === 0) {
            return node.data
        }
        return this.elementAt(n - 1, node.nextNode);
    }

    reverse(): List<T> {
        if (this.head) {
            // return this.prependList(this.head, new List<T>());
            return new List<T>().reverseList(this.head);
        }
        return this;
    }

    // Reversing a list without cons operation
    prependList(node: NodeItem<T> | null, list: List<T>): List<T> {
        if (node === null) {
            return list;
        }
        // Tail call optimized
        return this.prependList(node.nextNode, list.cons(node.data));
    }

    // Reversing a list using cons operation
    reverseList(node: NodeItem<T> | null): List<T> {
        if (node === null) {
            return this;
        }
        return this.cons(node.data).reverseList(node.nextNode);
    }

    // Drops n nodes from the list means doing the tail operation n times
    drop(n: number): List<T> {
        if (n === 0) {
            return this;
        }
        return this.tailAllButFirst.drop(n - 1);
    }

    cons(data: T): List<T> {
        // Create a new Node
        const newNode = new NodeItem<T>(data);
        const clonedList = this.cloneRecursion(this.head);
        // Prepend this data
        newNode.nextNode = clonedList.head;
        clonedList.head = newNode;
        clonedList.length++;
        return clonedList;
    }

    // Iterative version of clone
    clone(): List<T> {
        // Returns a clone of the current list
        const currentList = this;
        const newList = new List<T>();
        let nextNode = this.head;
        newList.head = null;
        let prevNode: NodeItem<T> | null = null;
        while (nextNode) {
            const newNode = new NodeItem<T>(nextNode.data);
            if (prevNode) {
                prevNode.nextNode = newNode;
            } else {
                newList.head = newNode;
            }
            prevNode = newNode;
            nextNode = nextNode.nextNode;
        }
        return newList;
    }

    // Recursive version of clone
    cloneRecursion(node: NodeItem<T> | null, list: List<T> = new List<T>(), prevNode: NodeItem<T> | null = null): List<T> {
        if (node === null) {
            return list;
        }
        const newNode = new NodeItem<T>(node.data);
        const newList = new List<T>();
        newList.length = list.length + 1;
        newList.head = list.head;
        newList.tail = newNode;
        if (prevNode) {
            prevNode.nextNode = newNode;
        } else {
            newList.head = newNode;
        }
        return this.cloneRecursion(node.nextNode, newList, newNode);
    }

}