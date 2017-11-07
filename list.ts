import { NodeItem } from './node';

// Doubly linked list implementation
class List<T> {
    private _headNode: NodeItem<T>;
    private _tailNode: NodeItem<T>;
    private _length: number;

    constructor() {
        this._headNode = null;
        this._tailNode = null;
        this._length = 0;
    }

    get head() {
        return this._headNode;
    }

    get tail() {
        return 0;
    }

    reverse() {
        // Reverses the list
    }

    drop(n: number) {
        // Drops n nodes from the list
    }

    cons(data: T) {
        // Prepend this data
    }






}