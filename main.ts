import { List } from './list';
import { printList, map, filter, printListOperationInfo } from './util';
import chalk from 'chalk';

const list = new List<number>();
const newList = list.cons(5).cons(4).cons(3).cons(2);
printListOperationInfo(list, newList, 'Cons');

const listAfterTail: List<number> = newList.tail;
printListOperationInfo(newList, listAfterTail, 'Tail');

const listAfterDrop: List<number> = newList.drop(2);
printListOperationInfo(newList, listAfterDrop, 'Drop 2');

const reverseList: List<number> = newList.reverse();
printListOperationInfo(newList, reverseList, 'Reverse');

printListOperationInfo(newList, map(newList, (x: number) => 2 * x), 'Map - double numbers');
printListOperationInfo(newList, filter(newList, (x: number) => x % 2 == 0), 'Filter - even numbers');
