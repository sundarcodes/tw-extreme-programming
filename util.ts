import { NodeItem } from './node';
import { List } from './list';

export function printList<T>(list: List<T>) {
    console.log('HEAD');
    printNodeInfo(list.head);
}

function printNodeInfo<T>(node: NodeItem<T> | null) {
    if (node === null) {
        console.log('END');
        return;
    }
    console.log(`${node.data}`);
    printNodeInfo(node.nextNode);
}

export function map<T>(list: List<T>, fn: (ele: T) => any) {
    // const mappedList = new List<T>();
    // return generateNewNode(list.head, fn, mappedList).reverse();
    return mapNode(list.head, fn);
}


export function filter<T>(list: List<T>, fn: (ele: T) => any) {
    // const mappedList = new List<T>();
    // return generateNewNode(list.head, fn, mappedList).reverse();
    return filterNode(list.head, fn);
}


function generateNewNode<T>(node: NodeItem<T> | null, fn: (ele: T) => any, list: List<T>): List<T> {
    if (node === null) {
        return list;
    }
    return generateNewNode(node.nextNode, fn, list.cons(fn(node.data)));
}

function mapNode<T>(node: NodeItem<T> | null, fn: (ele: T) => any): List<T> {
    if (node === null) {
        return new List<T>();
    }
    // Not tail call optimized
    return mapNode(node.nextNode, fn).cons(fn(node.data));
}

function filterNode<T>(node: NodeItem<T> | null, fn: (ele: T) => any): List<T> {
    if (node === null) {
        return new List<T>();
    }
    // Not tail call optimized
    if (fn(node.data)) {
        return filterNode(node.nextNode, fn).cons(node.data);
    }
    return filterNode(node.nextNode, fn);
}