import { items } from '../reducers/items';

describe('items function', () => {

    it('items must be function', () => {
        const type = typeof items;

        expect(type).toBe('function');
    });

    it('should return array', () => {
        const result = items();

        expect(result).toBeInstanceOf(Array);
    });
});