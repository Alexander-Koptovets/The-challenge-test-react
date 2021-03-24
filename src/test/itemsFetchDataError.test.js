import { itemsFetchDataError } from '../actions/items';

describe('itemsFetchDataError function', () => {

    it('itemsFetchDataError must be function', () => {
        const type = typeof itemsFetchDataError;

        expect(type).toBe('function');
    });

    it('should return object', () => {
        const result = itemsFetchDataError('message');

        expect(result).toBeInstanceOf(Object);
    });
});