import { List } from './list';
import { printList } from './util';
// Create a List of numbers
const list = new List<number>();
const newList = list.cons(5).cons(4).cons(3).cons(2);
console.log('After cons operation, Prepended List');
printList(newList);

const listAfterTail: List<number> = newList.tailAllButFirst;
console.log('After tail operation, original List');
printList(newList);
console.log('Tailed List');
printList(listAfterTail);

const listAfterDrop: List<number> = newList.drop(2);
console.log('After drop operation, original List');
printList(newList);
console.log('Dropped List');
printList(listAfterDrop);

const reverseList: List<number> = newList.reverse();
console.log('After reverse operation, original List');
printList(newList);
console.log('Reversed List');
printList(reverseList);