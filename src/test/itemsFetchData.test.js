import { itemsFetchData } from '../actions/items';

describe('itemsFetchData function', () => {

    it('itemsFetchData must be function', () => {
        const type = typeof itemsFetchData;

        expect(type).toBe('function');
    });

    it('should return promise', () => {
        const result = itemsFetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');

        expect(result).toBeInstanceOf(Promise);
    });
});