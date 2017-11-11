export class NodeItem<T> {
    private _nextNode: NodeItem<T> | null;
    private _data: T;
    private _prevNode: NodeItem<T> | null;

    constructor(data: T) {
        this._data = data;
        this._nextNode = null;
        this._prevNode = null;
    }

    get nextNode(): NodeItem<T> | null {
        return this._nextNode;
    }

    set nextNode(node: NodeItem<T> | null) {
        this._nextNode = node;
    }

    get prevNode(): NodeItem<T> | null {
        return this._prevNode;
    }

    set prevNode(node: NodeItem<T> | null) {
        this._prevNode = node;
    }

    get data(): T {
        return this._data;
    }

    // destroy() {
    //     this._data = null;
    //     this._nextNode = null;
    //     this._prevNode = null;
    // }
}