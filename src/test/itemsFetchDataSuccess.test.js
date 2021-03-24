import { itemsFetchDataSuccess } from '../actions/items';

describe('itemsFetchDataSuccess function', () => {

    it('itemsFetchDataSuccess must be function', () => {
        const type = typeof itemsFetchDataSuccess;

        expect(type).toBe('function');
    });

    it('should return object', () => {
        const result = itemsFetchDataSuccess('payload');

        expect(result).toBeInstanceOf(Object);
    });
});