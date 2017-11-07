export class NodeItem<T> {
    nextNode: NodeItem<T>;
    data: T;
    prevNode: NodeItem<T>;
}