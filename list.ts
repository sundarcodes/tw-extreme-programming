import { NodeItem } from './node';

// Doubly linked list implementation
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
    get tailAllButFirst() {
        // Returns a new list with all elements of the original list except the first.
        const clonedList = this.clone();
        const headNode = clonedList.head;
        const newHeadNode = headNode ? headNode.nextNode : null;
        clonedList.head = newHeadNode;
        return clonedList;
    }

    get length() {
        return this._length;
    }

    set length(n: number) {
        this._length = n;
    }

    reverse(): List<T> {
        // Reverses the list
        // Go through the current list and keep prepending nodes to the new list
        let reversedList: List<T> = new List<T>();
        let nextNode = this.head;
        while (nextNode) {
            reversedList = reversedList.cons(nextNode.data);
        }
        return reversedList;
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
        const clonedList = this.clone();
        // Prepend this data
        newNode.nextNode = clonedList.head;
        clonedList.head = newNode;
        clonedList.length++;
        return clonedList;
    }

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






}