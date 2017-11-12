import { NodeItem } from './node';
import { List } from './list';

export function printList<T>(list: List<T>) {
    console.log('HEAD');
    printNodeInfo(list.headNode);
}

function printNodeInfo<T>(node: NodeItem<T> | null) {
    if (node === null) {
        console.log('END');
        return;
    }
    console.log(`${node.data}`);
    printNodeInfo(node.nextNode);
}


export function map<T>(list: List<T>, fn: (ele: any) => any) {
    let mappedList = new List<T>();
    for (let i = list.length - 1; i >= 0; i--) {
        mappedList = mappedList.cons(fn(list.elementAt(i)));
    }
    return mappedList;
}

export function filter<T>(list: List<T>, fn: (ele: any) => any) {
    let filteredList = new List<T>();
    for (let i = list.length - 1; i >= 0; i--) {
        if (fn(list.elementAt(i))) {
            filteredList = filteredList.cons(list.elementAt(i));
        }
    }
    return filteredList;
}


// Recursive version of map
// May be an overkill :)
export function mapR<T>(list: List<T>, fn: (ele: T) => any) {
    return mapNode(list.headNode, fn);
}

// Recursive version of filter
export function filterR<T>(list: List<T>, fn: (ele: T) => any) {
    return filterNode(list.headNode, fn);
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