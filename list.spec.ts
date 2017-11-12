import { } from 'jasmine';
import { List } from './list';

describe('Testing Immutable List', () => {
    it('should be able to create a new List', () => {
        const list = new List<number>();
        expect(list).toBeDefined();
    });
    it('should create new list of length zero', () => {
        const list = new List<number>();
        expect(list.length).toEqual(0);
    });
    it('should be able to prepend element to a list using cons operation', () => {
        const list = new List<number>();
        expect(list.cons(2).elementAt(0)).toEqual(2);
    });
    it('should return a new list after cons operatation', () => {
        const list = new List<number>().cons(2);
        const newList = list.cons(3);
        expect(newList.length).toEqual(2);
        expect(list.length).toEqual(1);
        expect(list === newList).toBeFalsy;
    });
    it('should return a new list with all elements except the first one after tail operation', () => {
        const list = new List<number>().cons(3).cons(4).cons(5);
        const tailedList = list.tail;
        expect(list.length).toEqual(3);
        expect(tailedList.length).toEqual(2);
        expect(tailedList.elementAt(0)).toEqual(4);
    });
    it('should drop first n elements from a list and return a new list after drop operation', () => {
        const list = new List<number>().cons(3).cons(4).cons(5).cons(6);
        const droppedList = list.drop(2);
        expect(list.length).toEqual(4);
        expect(droppedList.length).toEqual(2);
        expect(droppedList.elementAt(0)).toEqual(4);
    });
    it('should reverse a list after the reverse operation', () => {
        const list = new List<number>().cons(3).cons(4).cons(5).cons(6);
        const reversedList = list.reverse();
        expect(reversedList.elementAt(0)).toEqual(3);        
        expect(reversedList.elementAt(1)).toEqual(4);        
        expect(reversedList.elementAt(2)).toEqual(5);        
        expect(reversedList.elementAt(3)).toEqual(6);        
    });
    it('should return the first element after the head operation', () => {
        const list = new List<number>().cons(3).cons(4).cons(5).cons(6);
        expect(list.head).toEqual(6);        
    });
})