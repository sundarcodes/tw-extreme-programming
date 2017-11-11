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