import { List } from './list';
import { printList } from './util';
// Create a List of numbers
const list = new List<number>();
const newList = list.cons(5).cons(4).cons(3).cons(2);
console.log('After cons operation');
printList(newList);

const listAfterTail: List<number> = newList.tailAllButFirst;
console.log('After tail operation');
printList(newList);
console.log('New List');
printList(listAfterTail);

const listAfterDrop: List<number> = newList.drop(2);
console.log('After drop operation');
printList(newList);
console.log('New List');
printList(listAfterDrop);