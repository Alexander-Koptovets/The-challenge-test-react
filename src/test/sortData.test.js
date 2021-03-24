import { sortData } from '../reducers/items';

describe('sortData function', () => {

    it('sortData must be function', () => {
        const type = typeof sortData;

        expect(type).toBe('function');
    });

    it('should return array', () => {
        const result = sortData(arr);

        expect(result).toBeInstanceOf(Array);
    });

    it('should return string', () => {
        const result = sortData('Error message');

        expect(result).toBeInstanceOf(String);
    });
});

let arr = [
    {"id":1,"label":"List item 1","parent_id":0,},
    {"id":5,"label":"List item 5","parent_id":1},
    {"id":6,"label":"List item 6","parent_id":1},
    {"id":7,"label":"List item 7","parent_id":1},
    {"id":8,"label":"List item 8","parent_id":7},
    {"id":9,"label":"List item 9","parent_id":7},
    {"id":2,"label":"List item 2","parent_id":0},
    {"id":3,"label":"List item 3","parent_id":0},
    {"id":4,"label":"List item 4","parent_id":0},
];